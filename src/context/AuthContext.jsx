// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth, db } from '../components/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       try {
//         console.log('onAuthStateChanged user:', user);
//         if (user) {
//           console.log('reading doc at:', `Users/${user.uid}`);
//           const docRef = doc(db, 'Users', user.uid);
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             setCurrentUser({ ...user, ...docSnap.data() });
//           } else {
//             setCurrentUser(user);
//           }
//         } else {
//           setCurrentUser(null);
//         }
//       } catch (err) {
//         console.error('AuthContext onAuthStateChanged error:', err);
//         setCurrentUser(null);
//       } finally {
//         setLoading(false);
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../components/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// Create context (no export here)
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const docRef = doc(db, 'Users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser({ ...user, ...docSnap.data() });
          } else {
            setCurrentUser(user);
          }
        } else {
          setCurrentUser(null);
        }
      } catch (err) {
        console.error('AuthContext onAuthStateChanged error:', err);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// ✅ Attach helper functions to the main component
AuthProvider.useAuth = function useAuth() {
  return useContext(AuthContext);
};

// ✅ Export just one thing (the component)
export default AuthProvider;
