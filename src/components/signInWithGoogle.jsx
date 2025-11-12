import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"
    />
  </svg>
);

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: '',
        });
        toast.success('User logged in successfully!', {
          position: 'top-center',
        });
        navigate(from, { replace: true });
      }
    });
  }

  return (
    <div>
      {/* <button
        onClick={googleLogin}
        type="button" 
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 border-1 border-gray-200 px-3 py-1.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Sign in with Google
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-4 w-4"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.5 2.59 29.92 0 24 0 14.73 0 6.98 5.69 3.44 13.95l7.97 6.19C13.22 13.66 18.2 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24c0-1.57-.14-3.07-.39-4.5H24v9h12.65c-.55 2.96-2.21 5.47-4.7 7.15l7.27 5.66C43.47 37.19 46.5 31.07 46.5 24z"
          />
          <path
            fill="#FBBC05"
            d="M11.41 28.14c-.65-1.93-1.01-3.99-1.01-6.14s.36-4.21 1.01-6.14l-7.97-6.19C1.23 13.68 0 18.65 0 24s1.23 10.32 3.44 14.33l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.91-2.14 15.88-5.81l-7.27-5.66c-2.02 1.36-4.61 2.16-8.61 2.16-5.8 0-10.78-4.16-12.59-9.86l-7.97 6.19C6.98 42.31 14.73 48 24 48z"
          />
        </svg>
      </button> */}
      <button
        onClick={googleLogin}
        type="button"
        className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-neutral-200 transition-colors"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
