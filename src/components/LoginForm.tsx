import React, { useState } from 'react';
import { Eye, EyeOff, Wallet, Leaf, Shield, ArrowRight } from 'lucide-react';

export default function IkaWalletLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-12 h-12 bg-purple-300 rounded-full opacity-60 animate-bounce"></div>
        
        {/* Leaf decorations */}
        <div className="absolute top-16 left-1/4 text-green-600 opacity-40 transform rotate-12 animate-pulse">
          <Leaf size={40} />
        </div>
        <div className="absolute bottom-24 right-1/4 text-green-700 opacity-30 transform -rotate-45 animate-bounce">
          <Leaf size={32} />
        </div>
        <div className="absolute top-1/3 left-12 text-emerald-600 opacity-50 transform rotate-45 animate-pulse">
          <Leaf size={24} />
        </div>
      </div>

      {/* Monkey Character */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block">
        <div className="relative w-64 h-96">
          {/* Hat brim */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
          {/* Hat crown */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-green-500 to-green-700 rounded-t-full shadow-md"></div>
          
          {/* Ears */}
          <div className="absolute top-12 left-16 w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md"></div>
          <div className="absolute top-12 right-16 w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md"></div>
          
          {/* Head */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg"></div>
          
          {/* Face */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-14 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full"></div>
          
          {/* Eyes */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-x-4">
            <div className="w-6 h-6 bg-white rounded-full shadow-inner flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 translate-x-4">
            <div className="w-6 h-6 bg-white rounded-full shadow-inner flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Nose */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full"></div>
          
          {/* Smile */}
          <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-black rounded-b-full border-l-0 border-r-0 border-t-0"></div>
          
          {/* Body */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-28 h-36 bg-gradient-to-b from-red-500 to-red-700 rounded-2xl shadow-lg"></div>
          
          {/* Left arm */}
          <div className="absolute top-40 left-8 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md transform rotate-12"></div>
          {/* Right arm */}
          <div className="absolute top-40 right-8 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md transform -rotate-12"></div>
          
          {/* Left hand */}
          <div className="absolute top-56 left-6 w-8 h-8 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-md"></div>
          {/* Right hand with wallet */}
          <div className="absolute top-56 right-6 w-8 h-8 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-md flex items-center justify-center">
            <Wallet className="text-emerald-600" size={12} />
          </div>
          
          {/* Left leg */}
          <div className="absolute top-64 left-12 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md"></div>
          {/* Right leg */}
          <div className="absolute top-64 right-12 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md"></div>
          
          {/* Left foot */}
          <div className="absolute top-80 left-10 w-12 h-6 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-md"></div>
          {/* Right foot */}
          <div className="absolute top-80 right-10 w-12 h-6 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-md"></div>
          
          {/* Tail */}
          <div className="absolute top-48 -right-4 w-3 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-md transform rotate-45 animate-pulse origin-top"></div>
          
          {/* Speech bubble */}
          <div className="absolute -top-4 right-0 bg-white rounded-xl p-3 shadow-lg border border-gray-200 animate-bounce">
            <p className="text-xs font-semibold text-gray-700 whitespace-nowrap">Secure your wallet!</p>
            <div className="absolute bottom-0 left-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20 lg:ml-80">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full shadow-lg">
                <Wallet className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-600 text-sm">
              Sign in to access your IKA Wallet and manage your digital assets securely
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 bg-gray-50"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 bg-gray-50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center group"
            >
              Sign In
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Create Account
              </a>
            </p>
            <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
              <Shield size={16} className="mr-1" />
              <span>Secured by 256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}