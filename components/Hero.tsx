'use client';

import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 hero-gradient"></div>

			{/* Floating elements */}
			<div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
			<div
				className="absolute top-40 right-20 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-float"
				style={{ animationDelay: '2s' }}
			></div>
			<div
				className="absolute bottom-40 left-20 w-12 h-12 bg-primary-400 rounded-full opacity-25 animate-float"
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
							<div className="absolute inset-0 bg-primary-200 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
						</div>
					</div>

					{/* Main headline */}
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						The Fastest Way{' '}
						<span className="gradient-text">Off The Old Books</span>
					</h1>

					{/* Subheadline */}
					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
						Escape Ramp helps small businesses transition painlessly to the
						cloud with{' '}
						<span className="font-semibold text-primary-600">
							guaranteed data preservation
						</span>{' '}
						and{' '}
						<span className="font-semibold text-primary-600">
							zero downtime
						</span>
						.
					</p>

					{/* Email Signup Form */}
					<div className="max-w-lg mx-auto mb-12">
						<h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
							Sign up for updates
						</h3>
						<p className="text-gray-600 mb-6 text-center">
							Be the first to know when we launch. No spam, just updates.
						</p>
						<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white/80 backdrop-blur-sm"
								required
							/>
							<button
								type="submit"
								className="group bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
							>
								Sign Up
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</button>
						</form>
						<div className="mt-4 text-center">
							<div className="text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
								Flat-fee migrations from{' '}
								<span className="font-bold text-primary-600">$1,500</span>
							</div>
						</div>
					</div>

					{/* Trust indicators */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="flex items-center justify-center gap-3 text-gray-700">
							<CheckCircle className="w-6 h-6 text-primary-600" />
							<span className="font-medium">Guaranteed Data Preservation</span>
						</div>
						<div className="flex items-center justify-center gap-3 text-gray-700">
							<Zap className="w-6 h-6 text-primary-600" />
							<span className="font-medium">Zero Downtime Migration</span>
						</div>
						<div className="flex items-center justify-center gap-3 text-gray-700">
							<Shield className="w-6 h-6 text-primary-600" />
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
