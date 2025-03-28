import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';

import RootProvider from '@/shared-ui/component/root-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pokemon Cool',
  description: 'Pokemon team builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon?icon.png" type="image/png" sizes="32x32" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <RootProvider>{children}</RootProvider>
        <div id="portal-root" />
      </body>
    </html>
  );
}
