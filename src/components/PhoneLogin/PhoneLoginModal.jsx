import React, { useEffect, useRef, useState } from 'react';

export default function PhoneLoginModal() {
  const [open, setOpen] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);

  const [country, setCountry] = useState('+91');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([...Array(6)].map(() => React.createRef()));

  // Timer UI (60s) for resend
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (!otpVisible) return; // run only when OTP UI is visible
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [otpVisible, timer]);

  const closeAll = () => {
    setOpen(false);
    setOtpVisible(false);
    setPhone('');
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
  };

  const handleReset = () => {
    setCountry('+91');
    setPhone('');
    setOtpVisible(false);
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
  };

  const handleSubmit = () => {
    // UI-only: reveal OTP section
    setOtpVisible(true);
    setTimer(60);
    setTimeout(() => otpRefs.current[0]?.current?.focus(), 0);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // only single digit
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.current?.focus();
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.current?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      otpRefs.current[index - 1]?.current?.focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      otpRefs.current[index + 1]?.current?.focus();
    }
  };

  const handleResend = () => {
    if (timer > 0) return;
    // UI-only: simulate resend -> restart timer
    setTimer(60);
    setOtp(['', '', '', '', '', '']);
    otpRefs.current[0]?.current?.focus();
  };

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition"
      >
        Continue with Phone
      </button>

      {/* Modal (portal-like simple overlay) */}
      {open && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={closeAll} />

          {/* Dialog */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-neutral-900">
                Login with Phone
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Enter your phone number to receive a one-time password (OTP).
              </p>
            </div>

            {/* Phone Section */}
            <div className="space-y-3">
              <label className="text-sm text-neutral-600">Phone Number</label>
              <div className="flex items-center gap-2">
                {/* Country dropdown (UI only) */}
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-[110px] appearance-none rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                    ▾
                  </span>
                </div>

                {/* Phone input */}
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 rounded-xl border border-neutral-300 px-3 py-2 text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              {/* Action buttons (only before OTP) */}
              {!otpVisible && (
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={handleReset}
                    className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-neutral-800 hover:bg-neutral-50"
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

            {/* OTP Section (inline, below) */}
            {otpVisible && (
              <>
                <div className="my-5 h-px w-full bg-neutral-200" />
                <div>
                  <label className="text-sm text-neutral-600">Enter OTP</label>

                  {/* OTP boxes */}
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
                        className="h-12 w-10 rounded-xl border border-neutral-300 text-center text-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    ))}
                  </div>

                  {/* Timer + Resend */}
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
                      Resend OTP
                    </button>
                  </div>

                  {/* Verify */}
                  <button className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">
                    Verify OTP
                  </button>
                </div>
              </>
            )}

            {/* Close (X) */}
            <button
              onClick={closeAll}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
