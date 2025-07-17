'use client';

import {
	Users,
	Cloud,
	CheckCircle2,
	Headphones,
	DollarSign,
	Bot,
	ArrowRight,
	Shield,
	Zap,
	BookOpen,
	Target,
	Star,
} from 'lucide-react';

export default function Body() {
	return (
		<div className="bg-white">
			{/* Why We're Building This Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Why We're <span className="gradient-text">Building This</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We've seen too many small businesses struggle to escape QuickBooks Desktop — so we're fixing it. Escape Ramp is your exit plan: smooth, affordable, and powered by smart automation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Shield className="w-10 h-10 text-red-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								No More Botched Imports
							</h3>
							<p className="text-gray-600">
								Our validation process catches errors before they become problems, ensuring your data integrity.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Users className="w-10 h-10 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								We Handle Everything
							</h3>
							<p className="text-gray-600">
								Files, balances, mapping, training - we take care of it all so you can focus on your business.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Bot className="w-10 h-10 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Built-in AI Assistant
							</h3>
							<p className="text-gray-600">
								Our AI simplifies the process and provides instant answers to your questions throughout the migration.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Who It's For Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Who Needs <span className="gradient-text">Escape Ramp?</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We help businesses and professionals who are ready to move forward but need a safe, reliable path to the cloud.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Small Business Owners
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Stuck on outdated QuickBooks Desktop? Well get you to the cloud without the headache of lost data or botched imports.
							</p>
						</div>

						<div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<BookOpen className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Bookkeepers & Accountants
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Streamline your migration process with our proven methodology and white-glove service for your clients.
							</p>
						</div>

						<div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							<div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Target className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Frustrated Owners
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Tired of rising QuickBooks costs or lost support? We provide a clear path to better, more affordable solutions.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What We Do Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							What <span className="gradient-text">Escape Ramp</span> Will Do
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We'll handle every aspect of your migration, from initial planning to post-migration support.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
									<Cloud className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Full-Service Migrations
									</h3>
									<p className="text-gray-600">
										Complete migrations to QuickBooks Online or Xero with validated, error-checked data and preserved audit trails.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
									<Headphones className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Human + AI Support
									</h3>
									<p className="text-gray-600">
										Expert guidance combined with AI-powered assistance for training and white-glove onboarding.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
									<DollarSign className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										Flat-Fee Pricing
									</h3>
									<p className="text-gray-600">
										No subscriptions, no hidden fees, no stress. Just one transparent price for complete peace of mind.
									</p>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 rounded-2xl card-shadow">
								<div className="space-y-6">
									<div className="flex items-center gap-3">
										<CheckCircle2 className="w-6 h-6 text-primary-600" />
										<span className="font-semibold text-gray-900">
											Data Validation & Error Checking
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Shield className="w-6 h-6 text-primary-600" />
										<span className="font-semibold text-gray-900">
											Audit Trail Preservation
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Zap className="w-6 h-6 text-primary-600" />
										<span className="font-semibold text-gray-900">
											Zero Downtime Migration
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Bot className="w-6 h-6 text-primary-600" />
										<span className="font-semibold text-gray-900">
											Built-in AI Assistant
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Trust Builders Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Built for <span className="gradient-text">Real Results</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We solve the problems that other migration services create, not just the ones they claim to fix.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-6">
							<div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Star className="w-8 h-8 text-primary-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Private Beta Launching Fall 2025
							</h3>
							<p className="text-gray-600">
								Join our exclusive early access program and be among the first to experience seamless migrations.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Users className="w-8 h-8 text-primary-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Built by Migration Experts
							</h3>
							<p className="text-gray-600">
								Our team has managed painful migrations firsthand and knows exactly what you're going through.
							</p>
						</div>

						<div className="text-center p-6">
							<div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<Shield className="w-8 h-8 text-primary-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Backed by Real Experts
							</h3>
							<p className="text-gray-600">
								Financial experts and engineers working together to solve your migration challenges.
							</p>
						</div>
					</div>

					{/* CTA Section */}
					<div className="mt-16 text-center">
						<div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
							<h3 className="text-2xl font-bold mb-4">
								Ready to Escape QuickBooks Desktop?
							</h3>
							<p className="text-lg mb-6 opacity-90">
								Join our early access program and be notified when we open private beta.
							</p>
							<button className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
								Join Early Access
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
