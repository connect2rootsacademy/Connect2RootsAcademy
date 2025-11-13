import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import SignInWithGoogle from '../../components/signInWithGoogle';
import PhoneLogin from '../../components/PhoneLogin/PhoneLogin';

// --- SUB-COMPONENTS ---
const GlassInputWrapper = ({ children }) => (
  <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-green-400/70 focus-within:bg-green-500/10">
    {children}
  </div>
);

const TestimonialCard = ({ testimonial, delay }) => (
  <div
    className={`animate-testimonial ${delay} flex items-start gap-3 rounded-3xl bg-card/40  backdrop-blur-xl border border-white/10 p-5 w-64`}
  >
    <img
      src={testimonial.avatarSrc}
      className="h-10 w-10 object-cover rounded-2xl"
      alt="avatar"
    />
    <div className="text-sm leading-snug">
      <p className="flex items-center gap-1 font-medium">{testimonial.name}</p>
      <p className="text-muted-foreground">{testimonial.handle}</p>
      <p className="mt-1 text-foreground/80">{testimonial.text}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const LoginPage = ({
  title = 'Welcome Back!',
  description = 'Access your account and continue your journey with us',
  heroImageSrc,
  testimonials = [],
  onSignIn,
  onResetPassword,
  onCreateAccount,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignIn) {
      onSignIn(formData);
    }
  };
  return (
    <section className="h-[100dvh] flex flex-col md:flex-row font-geist w-[100dvw]">
      {/* Left column: sign-in form */}
      <div className="flex-1 flex items-center justify-center -mt-30 sm:mt-10 p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h1>
            <p className="animate-element animate-delay-200 text-muted-foreground -mt-2">
              {description}
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="animate-element animate-delay-300">
                <label className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <GlassInputWrapper>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </GlassInputWrapper>
              </div>
              <div className="animate-element animate-delay-400">
                <label className="text-sm font-medium text-muted-foreground">
                  Password
                </label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                      value={formData.password}
                      onChange={handleInputChange}
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
                </GlassInputWrapper>
              </div>
              <div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="custom-checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="text-foreground/90">Keep me signed in</span>
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onResetPassword?.();
                  }}
                  className="hover:underline text-neutral-400 transition-colors"
                >
                  Reset password
                </a>
              </div>
              <button
                type="submit"
                className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Sign In
              </button>
            </form>
            <div className="animate-element animate-delay-700 relative flex items-center justify-center">
              <span className="w-full border-t border-border"></span>
              <span className="px-4 text-sm text-muted-foreground bg-background absolute">
                Or continue with
              </span>
            </div>
            {/* Google Sign In */}
            <SignInWithGoogle />
            {/* Phone Sign In */}
            <PhoneLogin />
            <p className="animate-element animate-delay-900 text-center text-sm text-muted-foreground">
              New to our platform?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onCreateAccount?.();
                }}
                className="text-green-600 hover:underline transition-colors"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Right column: hero image + testimonials */}
      {heroImageSrc && (
        <section className="hidden md:block flex-1 relative p-4">
          <div
            className="animate-slide-right animate-delay-300 absolute inset-0 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          ></div>
          {testimonials.length > 0 && (
            <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex gap-4 px-8 w-full justify-center">
              <TestimonialCard
                testimonial={testimonials[0]}
                delay="animate-delay-1000"
              />
              {testimonials[1] && (
                <div className="hidden xl:flex">
                  <TestimonialCard
                    testimonial={testimonials[1]}
                    delay="animate-delay-1200"
                  />
                </div>
              )}
              {testimonials[2] && (
                <div className="hidden 2xl:flex">
                  <TestimonialCard
                    testimonial={testimonials[2]}
                    delay="animate-delay-1400"
                  />
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </section>
  );
};

export default LoginPage;
