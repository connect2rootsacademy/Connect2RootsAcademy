import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../components/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/profile';

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: fname,
        });

        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: '',
        });
      }
      console.log('user registered');
      navigate(from, { replace: true });
      toast.success('User registered successfully!', {
        position: 'top-center',
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
      });
    }
    e.target.reset();
  };

  return (
    <section>
      <div className="h-[100dvh] flex flex-col md:flex-row w-[100dvw]">
        <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center p-4 sm:p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm -mt-12 sm:mt-5 text-center md:text-left">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl mt-6 sm:mt-1 font-light text-black break-words mb-6">
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 border-orange-300 border-b-[8px] sm:border-b-[12px] md:border-b-[15px] lg:border-b-[15px] -z-10 rounded-md"></span>
                Create Account
              </span>{' '}
            </h1>
          </div>

          <div className="space-y-5 w-full sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleRegister}
              action="#"
              method="POST"
              className="space-y-6 animate-element animate-delay-300"
            >
              {/* FIRST NAME */}
              <div>
                <label
                  htmlFor="fname"
                  className="text-sm font-medium text-muted-foreground"
                >
                  First Name
                </label>
                <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-500/10">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                    autoComplete="name"
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              {/* LAST NAME */}
              <div>
                <label
                  htmlFor="lname"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Last Name
                </label>
                <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-500/10">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    placeholder="Enter your Last Name"
                    onChange={(e) => setLname(e.target.value)}
                    required
                    autoComplete="text"
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email address
                </label>
                <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-500/10">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Password
                  </label>
                </div>
                <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-500/10">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="w-full  text-sm p-4 rounded-2xl focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/* BUTTONS */}
              <div>
                {/* Sign in Button with Arrow */}
                <button
                  type="submit"
                  className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Sign in
                  {/* Right Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 inline-block ml-2 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <p className="mt-3 text-center text-regular text-gray-500">
              Already a member?{' '}
              <Link
                to="/login"
                className="font-regular text-green-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:block flex-1 lg:w-1/2 relative p-4">
          <img
            src="https://images.unsplash.com/photo-1720447974523-18fdc4f5a37d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGdsYXNzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            alt="Login Banner"
            className="animate-slide-right w-full h-screen object-cover object-center animate-delay-300 absolute inset-0 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
