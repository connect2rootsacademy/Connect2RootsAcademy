// import { PhoneIcon } from 'lucide-react';
// import React from 'react';

// const PhoneLogin = () => {
//   return (
//     <div>
//       <button
//         type="button"
//         className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-neutral-200 transition-colors"
//       >
//         <PhoneIcon />
//         Continue with Phone Number
//       </button>
//     </div>
//   );
// };

// export default PhoneLogin;

import React, { useState, useEffect, useRef } from 'react';
import { Smartphone } from 'lucide-react';

const PhoneLogin = () => {
  const [open, setOpen] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [country, setCountry] = useState('+91');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([...Array(6)].map(() => React.createRef()));
  const [timer, setTimer] = useState(60);

  // Timer countdown (UI only)
  useEffect(() => {
    if (!otpVisible || timer === 0) return;
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [otpVisible, timer]);

  const handleSubmit = () => {
    setOtpVisible(true);
    setTimer(60);
  };

  const handleReset = () => {
    setOtpVisible(false);
    setPhone('');
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.current?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.current?.focus();
    }
  };

  const handleResend = () => {
    if (timer > 0) return;
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
    otpRefs.current[0]?.current?.focus();
  };

  const closeModal = () => {
    setOpen(false);
    setOtpVisible(false);
    setPhone('');
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <div className="relative">
      {/* ---------- Trigger Button ---------- */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-neutral-200 transition-colors"
      >
        <Smartphone />
        Continue with Mobile
      </button>

      {/* ---------- Modal Overlay ---------- */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Box */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-neutral-900 mb-1">
              Login with Phone
            </h2>
            <p className="text-sm text-neutral-500 mb-5">
              Enter your phone number to receive a one-time password (OTP).
            </p>

            {/* ---------- Phone Input Section ---------- */}
            <div className="space-y-3">
              <label className="text-sm text-neutral-600">Phone Number</label>
              <div className="flex items-center gap-2">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-[100px] rounded-xl border border-neutral-300 px-3 py-2 text-sm text-neutral-800 focus:ring-2 focus:ring-neutral-900"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 rounded-xl border border-neutral-300 px-3 py-2 focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              {/* Buttons */}
              {!otpVisible && (
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={handleReset}
                    className="rounded-xl border border-neutral-300 px-4 py-2 hover:bg-neutral-100"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            {/* ---------- OTP Section ---------- */}
            {otpVisible && (
              <div className="mt-6 border-t border-neutral-200 pt-5">
                <label className="text-sm text-neutral-600">Enter OTP</label>
                <div className="mt-3 flex justify-between gap-2">
                  {otp.map((val, i) => (
                    <input
                      key={i}
                      ref={otpRefs.current[i]}
                      value={val}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      maxLength={1}
                      inputMode="numeric"
                      className="h-12 w-10 rounded-xl border border-neutral-300 text-center text-lg focus:ring-2 focus:ring-neutral-900"
                    />
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <p className="text-neutral-500">
                    Resend OTP in{' '}
                    <span className="font-medium text-neutral-900">
                      00:{String(timer).padStart(2, '0')}
                    </span>
                  </p>
                  <button
                    disabled={timer > 0}
                    onClick={handleResend}
                    className={`underline ${
                      timer > 0
                        ? 'cursor-not-allowed text-neutral-400'
                        : 'text-neutral-900 hover:opacity-80'
                    }`}
                  >
                    Resend
                  </button>
                </div>

                <button className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneLogin;
