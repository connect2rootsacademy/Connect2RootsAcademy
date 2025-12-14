import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase';
import { toast } from 'react-toastify';
import LoginPage from './LoginPage';

const sampleTestimonials = [
  {
    avatarSrc:
      'https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D',
    name: 'Suraj Singh',
    handle: '@surajsingh',
    text: 'Amazing platform! The user experience is seamless and the features are exactly what I needed.',
  },
  {
    avatarSrc:
      'https://plus.unsplash.com/premium_photo-1661964108348-b62e91c62ac7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFucyUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
    name: 'Neelam Patel',
    handle: '@neelampatel',
    text: 'This service has transformed how I work. Clean design, powerful features, and excellent support.',
  },
  {
    avatarSrc:
      'https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFucyUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
    name: 'Bhavya Desai',
    handle: '@bhavyadesai',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-10 sm:mt-1 font-light text-black text-left break-words">
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-3 sm:h-4 border-b-[12px] border-orange-300 sm:border-b-[16px] md:border-b-[20px] lg:border-b-[24px] -z-10 rounded-md"></span>
              Welcome Back
            </span>{' '}
          </h1>
        }
        description="Sign in to continue your learning journey"
        heroImageSrc="https://images.unsplash.com/photo-1561202450-21ccc6fbd210?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGluZGlhfGVufDB8fDB8fHww"
        testimonials={sampleTestimonials}
        onSignIn={handleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
};

export default Login;
