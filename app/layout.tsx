import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Escape Ramp - The Fastest Way Off The Old Books',
	description:
		'Escape Ramp helps small businesses transition painlessly to the cloud with guaranteed data preservation and zero downtime.',
	keywords:
		'QuickBooks migration, cloud accounting, small business, Xero, QuickBooks Online',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
