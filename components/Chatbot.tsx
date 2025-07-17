'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
	id: number;
	text: string;
	sender: 'bot' | 'user';
	timestamp: Date;
}

interface FormData {
	email: string;
	currentSoftware: string;
	budget: string;
	urgency: string;
	tool: string;
	migratingFrom: string;
	struggles: string;
}

const questions = [
	{
		id: 'email',
		text: "Hey there! I'm here to help you join Escape Ramp's early access. What's your email address?",
		type: 'email',
		required: true
	},
	{
		id: 'currentSoftware',
		text: "What accounting software are you currently using?",
		type: 'select',
		options: [
			'QuickBooks Desktop',
			'QuickBooks Online',
			'Xero',
			'Sage',
			'FreshBooks',
			'Wave',
			'Other'
		]
	},
	{
		id: 'budget',
		text: "Whats your budget for the migration?",
		type: 'select',
		options: [
			'Under $100',
			'$1,000 - $2500',
			'$2,500 - $5000',
			'$5000+',
			'Over $10,000',
			'Not sure yet'
		]
	},
	{
		id: 'urgency',
		text: "How urgent is your need to migrate?",
		type: 'select',
		options: [
			'ASAP (within 30 days)',
			'The next 3 months',
			'Just exploring options'
		]
	},
	{
		id: 'tool',
		text: "What specific tool/version do you have? (e.g., QuickBooks Desktop2023, QuickBooks Online 2024)",
		type: 'text'
	},
	{
		id: 'migratingFrom',
		text: "What are you planning to migrate to? (e.g., QuickBooks Desktop to QuickBooks Online)",
		type: 'text'
	},
	{
		id: 'struggles',
		text: "What's been the hardest part of your migration journey so far?",
		type: 'text'
	}
];

export default function Chatbot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			id: 1,
			text: "Hey there! I'm here to help you join Escape Ramp's early access. What's your email address?",
			sender: 'bot',
			timestamp: new Date()
		}
	]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [formData, setFormData] = useState<FormData>({
		email: '',
		currentSoftware: '',
		budget: '',
		urgency: '',
		tool: '',
		migratingFrom: '',
		struggles: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleUserInput = (input: string) => {
		const currentQuestion = questions[currentQuestionIndex];
		
		// Add user message
		const userMessage: Message = {
			id: messages.length + 1,
			text: input,
			sender: 'user',
			timestamp: new Date()
		};
		
		setMessages(prev => [...prev, userMessage]);
		
		// Update form data
		setFormData(prev => ({
			...prev,
			[currentQuestion.id]: input
		}));
		
		// Move to next question or submit
		if (currentQuestionIndex < questions.length - 1) {
			setTimeout(() => {
				const nextQuestion = questions[currentQuestionIndex + 1];
				const botMessage: Message = {
					id: messages.length + 2,
					text: nextQuestion.text,
					sender: 'bot',
					timestamp: new Date()
				};
				setMessages(prev => [...prev, botMessage]);
				setCurrentQuestionIndex(prev => prev + 1);
			}, 500);
		} else {
			// Submit form
			handleSubmit();
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);
		
		// Add final bot message
		const finalMessage: Message = {
			id: messages.length + 1,
			text: "Perfect! Thanks for sharing that with me. You're now on our early access list! 🎉 We'll notify you when we open private beta.",
			sender: 'bot',
			timestamp: new Date()
		};
		
		setMessages(prev => [...prev, finalMessage]);
		
		// Here you would typically submit to Netlify Forms
		// For now, we'll just show the success message
		setTimeout(() => {
			setIsSubmitting(false);
		}, 2000);
	};

	const resetChat = () => {
		setMessages([{
			id: 1,
			text: "Hey there! I'm here to help you join Escape Ramp's early access. What's your email address?",
			sender: 'bot',
			timestamp: new Date()
		}]);
		setCurrentQuestionIndex(0);
		setFormData({
			email: '',
			currentSoftware: '',
			budget: '',
			urgency: '',
			tool: '',
			migratingFrom: '',
			struggles: ''
		});
	};

	return (
		<>
			{/* Chat Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 flex items-center justify-center"
			>
				<MessageCircle className="w-6 h-6" />
			</button>

			{/* Chat Modal */}
			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4">
					<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[90vh] flex flex-col">
						{/* Header */}
						<div className="flex items-center justify-between p-4 border-b border-gray-200">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
									<Bot className="w-4 h-4 text-white" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Escape Ramp Assistant</h3>
									<p className="text-xs text-gray-500">Early Access Signup</p>
								</div>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="text-gray-400 hover:text-gray-600 transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4">
							{messages.map((message) => (
								<div
									key={message.id}
									className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
								>
									<div
										className={`max-w-xs px-4 py-2 rounded-2xl ${
											message.sender === 'user'
												? 'bg-primary-600 text-white'
												: 'bg-gray-100 text-gray-900'
										}`}
									>
										<p className="text-sm">{message.text}</p>
									</div>
								</div>
							))}
							
							{isSubmitting && (
								<div className="flex justify-start">
									<div className="bg-gray-100 text-gray-900 max-w-xs px-4 py-2 rounded-2xl">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
											<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
											<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Input */}
						{currentQuestionIndex < questions.length && !isSubmitting && (
							<div className="p-4 border-t border-gray-200">
								<div className="flex gap-2">
									<input
										type="text"
										placeholder="Type your answer..."
										className="flex-1 py-2 border border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
										onKeyPress={(e) => {
											if (e.key === 'Enter' && e.currentTarget.value.trim()) {
												handleUserInput(e.currentTarget.value.trim());
												e.currentTarget.value = '';
											}
										}}
									/>
									<button
										onClick={() => {
											const input = document.querySelector('input[type="text"]') as HTMLInputElement;
											if (input && input.value.trim()) {
												handleUserInput(input.value.trim());
												input.value = '';
											}
										}}
										className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
									>
										<Send className="w-4 h-4" />
									</button>
								</div>
							</div>
						)}

						{/* Restart Button */}
						{currentQuestionIndex >= questions.length && !isSubmitting && (
							<div className="p-4 border-t border-gray-200">
								<button
									onClick={resetChat}
									className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
								>
									Start Over
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
} 