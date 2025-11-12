'use client';

import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { MailIcon, CircleUserIcon, LogOutIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const avatars = [
  {
    id: 1,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        aria-label="Avatar 1"
      >
        <mask
          id=":r111:"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="36"
          height="36"
        >
          <rect width="36" height="36" rx="72" fill="#FFFFFF" />
        </mask>
        <g mask="url(#:r111:)">
          <rect width="36" height="36" fill="#ff005b" />
          <rect
            x="0"
            y="0"
            width="36"
            height="36"
            transform="translate(9 -5) rotate(219 18 18) scale(1)"
            fill="#ffb238"
            rx="6"
          />
          <g transform="translate(4.5 -4) rotate(9 18 18)">
            <path
              d="M15 19c2 1 4 1 6 0"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="10"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#000000"
            />
            <rect
              x="24"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#000000"
            />
          </g>
        </g>
      </svg>
    ),
    alt: 'Avatar 1',
  },
  {
    id: 2,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <mask
          id=":R4mrttb:"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="36"
          height="36"
        >
          <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
        </mask>
        <g mask="url(#:R4mrttb:)">
          <rect width="36" height="36" fill="#ff7d10"></rect>
          <rect
            x="0"
            y="0"
            width="36"
            height="36"
            transform="translate(5 -1) rotate(55 18 18) scale(1.1)"
            fill="#0a0310"
            rx="6"
          />
          <g transform="translate(7 -6) rotate(-5 18 18)">
            <path
              d="M15 20c2 1 4 1 6 0"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="14"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#FFFFFF"
            />
            <rect
              x="20"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    ),
    alt: 'Avatar 4',
  },
  {
    id: 3,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <mask
          id=":r11c:"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="36"
          height="36"
        >
          <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
        </mask>
        <g mask="url(#:r11c:)">
          <rect width="36" height="36" fill="#0a0310" />
          <rect
            x="0"
            y="0"
            width="36"
            height="36"
            transform="translate(-3 7) rotate(227 18 18) scale(1.2)"
            fill="#ff005b"
            rx="36"
          />
          <g transform="translate(-3 3.5) rotate(7 18 18)">
            <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF" />
            <rect
              x="12"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#FFFFFF"
            />
            <rect
              x="22"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    ),
    alt: 'Avatar 2',
  },
  {
    id: 4,
    svg: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <mask
          id=":r1gg:"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="36"
          height="36"
        >
          <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
        </mask>
        <g mask="url(#:r1gg:)">
          <rect width="36" height="36" fill="#d8fcb3"></rect>
          <rect
            x="0"
            y="0"
            width="36"
            height="36"
            transform="translate(9 -5) rotate(219 18 18) scale(1)"
            fill="#89fcb3"
            rx="6"
          ></rect>
          <g transform="translate(4.5 -4) rotate(9 18 18)">
            <path
              d="M15 19c2 1 4 1 6 0"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
            ></path>
            <rect
              x="10"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#000000"
            ></rect>
            <rect
              x="24"
              y="14"
              width="1.5"
              height="2"
              rx="1"
              stroke="none"
              fill="#000000"
            ></rect>
          </g>
        </g>
      </svg>
    ),
    alt: 'Avatar 3',
  },
];

const mainAvatarVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const pickerVariants = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
};

const selectedVariants = {
  initial: {
    opacity: 0,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    rotate: 180,
    transition: {
      duration: 0.2,
    },
  },
};

// Custom Card components
const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className || ''}`}>{children}</div>;
};

// Utility function to merge class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function Profile() {
  const [userDetails, setUserDetails] = useState(null); //store our user data
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('User found:', user);
        const docRef = doc(db, 'Users', user.uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserDetails(userData);
            console.log('User data:', userData);
          } else {
            console.log('No user document found');
            setUserDetails(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserDetails(null);
        }
      } else {
        console.log('No user signed in');
        setUserDetails(null);
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/login';
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  }

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [rotationCount, setRotationCount] = useState(0);

  const handleAvatarSelect = (avatar) => {
    setRotationCount((prev) => prev + 1080);
    setSelectedAvatar(avatar);
  };

  return (
    <section>
      {userDetails ? (
        <>
          <motion.div initial="initial" animate="animate" className="w-full">
            <div className="w-full max-w-md border border-gray-300 rounded-xl mt-20 mx-auto overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/30">
              <div className="fixed inset-0 -z-10 bg-white">
                {/* Dots layer */}
                <div
                  className={[
                    'pointer-events-none absolute inset-0',
                    'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]',
                    '[background-size:16px_16px]',
                    '[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
                    '[-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
                    '[mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]',
                  ].join(' ')}
                />
              </div>
              <div className="p-5">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: '8rem',
                    transition: {
                      height: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                  className="w-full rounded-xl relative bg-[url('https://images.unsplash.com/photo-1504548840739-580b10ae7715?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbmltYWxpc3QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500')] bg-cover bg-center bg-no-repeat"
                />

                <div className="px-8 pb-8 -mt-16">
                  <motion.div
                    className="relative w-40 h-40 mx-auto rounded-full border-5 border-neutral-500 bg-white flex items-center justify-center"
                    variants={mainAvatarVariants}
                    layoutId="selectedAvatar"
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center scale-[3]"
                      animate={{
                        rotate: rotationCount,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {selectedAvatar.svg}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-center mt-4"
                    variants={pickerVariants.item}
                  >
                    <motion.h2
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className=" text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent ">
                        Welcome, <span>{userDetails.firstName}</span>
                        <span>!</span>
                      </h3>
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 text-sm mt-2 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="p-4 sm:p-6 w-full max-w-md -mt-5 -mb-5">
                        <p className="text-gray-700 text-md sm:text-base mb-3">
                          <MailIcon className="inline size-5 mr-2 text-neutral-600" />
                          <span className="font-extrabold tracking-wide">
                            :
                          </span>{' '}
                          {userDetails.email}
                        </p>
                      </div>
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="mt-6"
                    variants={pickerVariants.container}
                  >
                    <motion.div
                      className="flex justify-center gap-4"
                      variants={pickerVariants.container}
                    >
                      {avatars.map((avatar) => (
                        <motion.button
                          key={avatar.id}
                          onClick={() => handleAvatarSelect(avatar)}
                          className={cn(
                            'relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300',
                            'transition-all duration-300',
                            selectedAvatar.id === avatar.id
                              ? 'border-blue-500'
                              : ''
                          )}
                          variants={pickerVariants.item}
                          whileHover={{
                            y: -2,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            y: 0,
                            transition: { duration: 0.2 },
                          }}
                          aria-label={`Select ${avatar.alt}`}
                          aria-pressed={selectedAvatar.id === avatar.id}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            {avatar.svg}
                          </div>
                          {selectedAvatar.id === avatar.id && (
                            <motion.div
                              className="absolute inset-0 bg-green-500/20 ring-2 ring-green-500 ring-offset-2 ring-offset-white rounded-full"
                              variants={selectedVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              layoutId="selectedIndicator"
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* LOGOUT SECTION */}
                  <div className="relative flex flex-col mt-5">
                    <button
                      onClick={() => setShowLogoutConfirm(true)}
                      className="bg-red-500 hover:bg-red-700 text-white font-medium mt-5 py-2 px-6 rounded-lg shadow-lg shadow-red-500/60 transition duration-300"
                    >
                      Logout
                      <LogOutIcon className="inline size-4 ml-2" />
                    </button>

                    {/* Logout Confirmation Popover */}
                    {showLogoutConfirm && (
                      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl max-w-sm w-full mx-4 transform transition-all duration-300 hover:scale-[1.02]">
                          <h3 className="text-2xl font-semibold text-gray-600 mb-3 text-center">
                            Ready to Sign Off?
                          </h3>
                          <p className="text-gray-500 mb-6 text-center leading-relaxed">
                            You can always come back anytime. Want to log out
                            now?
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={() => setShowLogoutConfirm(false)}
                              className="px-5 py-2.5 text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-600  rounded-lg transition-all duration-200"
                            >
                              Stay Logged In
                            </button>
                            <button
                              onClick={handleLogout}
                              className="px-5 py-2.5 text-sm font-medium text-white bg-red-500 hover:bg-red-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            >
                              Log Out
                              <LogOutIcon className="inline size-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-green-400 text-4xl text-green-400">
            <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-amber-400 text-2xl text-amber-400"></div>
          </div>
        </div>
      )}
    </section>
  );
}
