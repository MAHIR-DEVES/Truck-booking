'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import type React from 'react'; // Added import for React

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(28);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5 mr-2" />
          পেছনে যান
        </button>

        <div className="space-y-6">
          <h1 className="text-2xl font-medium">মোবাইল নাম্বার ভেরিফাই করুন</h1>

          <p className="text-gray-600">
            ০১২৭৭০০২১০১ নম্বরে ভেরিফিকেশন কোড পাঠানো হয়েছে
          </p>

          <div className="flex gap-3 justify-between">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="w-16 h-16 text-center text-2xl p-0"
              />
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full text-gray-500 hover:text-gray-700"
            disabled={timer > 0}
          >
            পুনরায় কোড {timer > 0 ? `${timer} সেকেন্ড` : ''}
          </Button>

          <Button className="w-full py-6 bg-gray-100 hover:bg-gray-200 text-gray-600">
            ভেরিফাই করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
