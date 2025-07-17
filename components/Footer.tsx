'use client';

import {
	Mail,
	Phone,
	MapPin,
	ArrowUpRight,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<div className="flex items-center mb-6">
							<div className="relative w-12 h-12 mr-4">
								<Image
									src="/PNG image.png"
									alt="Escape Ramp Logo"
									fill
									className="object-contain"
								/>
							</div>
							<div>
								<h3 className="text-2xl font-bold">Escape Ramp</h3>
								<p className="text-gray-400">
									The Fastest Way Off The Old Books
								</p>
							</div>
						</div>
						<p className="text-gray-400 mb-6 max-w-md">
							We help small businesses transition painlessly to the cloud with
							guaranteed data preservation and zero downtime.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Services</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors flex items-center group"
								>
									QuickBooks Migration
									<ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors flex items-center group"
								>
									Xero Migration
									<ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors flex items-center group"
								>
									Data Validation
									<ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors flex items-center group"
								>
									Training & Support
									<ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Contact</h4>
						<ul className="space-y-3">
							<li className="flex items-center text-gray-400">
								<Mail className="w-4 h-4 mr-3 text-primary-400" />
								<a
									href="mailto:hello@escaperamp.com"
									className="hover:text-white transition-colors"
								>
									hello@escaperamp.com
								</a>
							</li>
							<li className="flex items-center text-gray-400">
								<Phone className="w-4 h-4 mr-3 text-primary-400" />
								<a
									href="tel:+1-800-ESCAPE"
									className="hover:text-white transition-colors"
								>
									(800) ESCAPE
								</a>
							</li>
							<li className="flex items-center text-gray-400">
								<MapPin className="w-4 h-4 mr-3 text-primary-400" />
								<span>Cloud-based, serving nationwide</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© {currentYear} Escape Ramp. All rights reserved.
						</div>
						<div className="flex space-x-6 text-sm">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll to top button */}
			<button
				onClick={scrollToTop}
				className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
				aria-label="Scroll to top"
			>
				<ArrowUpRight className="w-6 h-6 transform rotate-[-45deg] mx-auto" />
			</button>
		</footer>
	);
}
