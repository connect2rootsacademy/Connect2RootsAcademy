// import React, { useState, useEffect } from 'react';
// import loginlogo from '../../assets/c2r-course-thumbnail.png';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../components/firebase';
// import { toast } from 'react-toastify';
// import SignInWithGoogle from '../../components/signInWithGoogle';
// import AuthProvider from '../../context/AuthContext';
// // import logintree from '../../assets/logintree.jpg';

// export default function Example() {
//   const { useAuth } = AuthProvider;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { currentUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || '/profile';

//   useEffect(() => {
//     if (currentUser) {
//       navigate(from, { replace: true });
//     }
//   }, [currentUser, navigate, from]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log('user logged in');
//       navigate(from, { replace: true });
//       toast.success('User logged in successfully!', {
//         position: 'top-center',
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: 'bottom-center',
//       });
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Left side - Image */}
//         <div className="hidden lg:block lg:w-1/2 relative">
//           <img
//             //src="https://plus.unsplash.com/premium_vector-1682303200010-54e5448c3269?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHRyZWUlMjBhbmQlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
//             src="https://plus.unsplash.com/premium_vector-1727274000289-99ec6fa1f744?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900"
//             alt="Login Banner"
//             className="absolute inset-0 w-full h-screen object-cover"
//           />
//         </div>

//         {/* Right side - Login Form */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
//           <div className="absolute inset-0 -z-10 overflow-hidden">
//             <svg
//               aria-hidden="true"
//               className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
//             >
//               <defs>
//                 <pattern
//                   x="50%"
//                   y={-1}
//                   id="e813992c-7d03-4cc4-a2bd-151760b470a0"
//                   width={200}
//                   height={200}
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <path d="M100 200V.5M.5 .5H200" fill="none" />
//                 </pattern>
//               </defs>
//               <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
//                 <path
//                   d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
//                   strokeWidth={0}
//                 />
//               </svg>

//               <rect
//                 fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
//                 width="100%"
//                 height="100%"
//                 strokeWidth={0}
//               />
//             </svg>
//           </div>
//           <div className="-mt-20 w-full max-w-md px-6 py-12 lg:px-8">
//             <div className="text-center">
//               <img
//                 alt="Your Company"
//                 src={loginlogo}
//                 className="mx-auto h-35 bg-white shadow-xl mb-5 w-auto rounded-full"
//               />
//               <h1 className="text-6xl text-center font-semibold tracking-tight mb-10 text-black">
//                 <span className="relative inline-block">
//                   <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 bg-[#4ADE80] -z-10 rounded-md"></span>
//                   Sign in
//                 </span>{' '}
//                 to your account
//               </h1>
//             </div>

//             <div className="mt-10">
//               <form onSubmit={handleSubmit} method="POST" className="space-y-6">
//                 {/* EMAIL */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-900"
//                   >
//                     Email address
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="email@gmail.com"
//                       required
//                       autoComplete="email"
//                       className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* PASSWORD */}
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-900"
//                   >
//                     Password
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="********"
//                       required
//                       autoComplete="current-password"
//                       className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Sign in Button with Arrow */}
//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700  focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors"
//                 >
//                   Sign in
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="h-4 w-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>

//                 {/* Google Sign In */}
//                 <SignInWithGoogle />
//               </form>

//               {/* REGISTER BUTTON */}
//               <p className="mt-10 text-center text-sm text-gray-500">
//                 Not a member?{' '}
//                 <Link
//                   to="/register"
//                   className="font-semibold text-green-600 hover:text-green-700 transition-colors"
//                 >
//                   Register
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

//import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase';
import { toast } from 'react-toastify';
import LoginPage from './LoginPage';

const sampleTestimonials = [
  {
    avatarSrc: 'https://randomuser.me/api/portraits/women/57.jpg',
    name: 'Sarah Chen',
    handle: '@sarahdigital',
    text: 'Amazing platform! The user experience is seamless and the features are exactly what I needed.',
  },
  {
    avatarSrc: 'https://randomuser.me/api/portraits/men/64.jpg',
    name: 'Marcus Johnson',
    handle: '@marcustech',
    text: 'This service has transformed how I work. Clean design, powerful features, and excellent support.',
  },
  {
    avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'David Martinez',
    handle: '@davidcreates',
    text: "I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity.",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';

  const handleSignIn = async (formData) => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('user logged in');
      navigate(from, { replace: true });
      toast.success('User logged in successfully!', {
        position: 'top-center',
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
      });
    }
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div>
      <LoginPage
        title={
          <h1 className="text-4xl font-light text-black sm:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
              Welcome Back
            </span>{' '}
          </h1>
        }
        description="Sign in to continue your learning journey"
        heroImageSrc="https://plus.unsplash.com/premium_photo-1674478156466-2d7fda374d9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xhc3MlMjB0ZXh0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900"
        testimonials={sampleTestimonials}
        onSignIn={handleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
};

export default Login;
