"use client";

import Image from 'next/image';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-bounce"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-bounce"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 group">
              <Image
                src="/escape_ramp_transparent.png"
                alt="Escape Ramp Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-green-200 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The Fastest Way{' '}
            <span className="text-green-600">Off The Old Books</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Escape Ramp is building a modern migration service to help small businesses move from QuickBooks Desktop to the cloud — without the chaos.
          </p>

          {/* Early Access Signup Form */}
          <div id="early-access-form" className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join Early Access
                </h3>
                <p className="text-gray-600">
                  Now accepting early access signups. Flat-fee migrations, expert support, zero downtime.
                </p>
              </div>
              
              <form 
                name="early-access"
                method="POST" 
                data-netlify="true"
                action="/success"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="early-access" />
                
                {/* Email (required) */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                {/* Company (required) */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                {/* Contact Name (required) */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                
                {/* Current accounting software */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    Current Accounting Software
                  </label>
                  <select
                    name="current-software"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  >
                    <option value="">Select your current software</option>
                    <option value="quickbooks-desktop">QuickBooks Desktop</option>
                    <option value="quickbooks-online">QuickBooks Online</option>
                    <option value="xero">Xero</option>
                    <option value="sage">Sage</option>
                    <option value="freshbooks">FreshBooks</option>
                    <option value="wave">Wave</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Budget */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    What's your budget for migration?
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                
                {/* Urgency */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    How urgent is your need to migrate?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-start p-4 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 cursor-pointer group/radio">
                      <input type="radio" name="urgency" value="asap" className="mr-3 mt-1 text-green-600 focus:ring-green-100" />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 group-hover/radio:text-green-700">ASAP</div>
                        <div className="text-sm text-gray-500">Need to migrate within 30 days</div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 cursor-pointer group/radio">
                      <input type="radio" name="urgency" value="3-months" className="mr-3 mt-1 text-green-600 focus:ring-green-100" />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 group-hover/radio:text-green-700">The next 3 months</div>
                        <div className="text-sm text-gray-500">Planning to migrate soon</div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 cursor-pointer group/radio">
                      <input type="radio" name="urgency" value="exploring" className="mr-3 mt-1 text-green-600 focus:ring-green-100" />
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 group-hover/radio:text-green-700">Just exploring</div>
                        <div className="text-sm text-gray-500">Researching options for the future</div>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* What tool do you have? */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    What tool do you have?
                  </label>
                  <input
                    name="tool"
                    placeholder="e.g., QuickBooks Desktop 2023, etc."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  />
                </div>
                
                {/* What are you migrating from? */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    What are you migrating from?
                  </label>
                  <input
                    name="migrating-from"
                    placeholder="e.g., QuickBooks Desktop to QuickBooks Online"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  />
                </div>
                
                {/* Specific struggles */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-green-600 transition-colors">
                    What's been the hardest part for you?
                  </label>
                  <textarea
                    name="struggles"
                    placeholder="Tell us about your migration challenges..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  Join Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Private beta launching Fall 2025
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-medium">Guaranteed Data Preservation</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Zap className="w-6 h-6 text-green-600" />
              <span className="font-medium">Zero Downtime Migration</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-medium">Audit Trail Preserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 