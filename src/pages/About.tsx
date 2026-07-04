import React from 'react';
import AdUnit from '../components/AdUnit';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">About QRGen Pro</h1>
      
      <div className="prose prose-indigo max-w-none text-slate-600 space-y-6">
        <p className="text-lg">
          Welcome to QRGen Pro, the ultimate destination for creating high-quality, customizable QR codes entirely for free.
        </p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is simple: provide a fast, reliable, and privacy-focused tool that allows anyone to generate QR codes without the hassle of subscriptions, limits, or tracking. In a world where digital sharing is essential, we believe that basic utilities like QR code generation should be accessible to everyone at no cost.
        </p>

        <AdUnit slot="about-ad-1" />

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Why We Built This</h2>
        <p>
          We noticed that many QR code generators on the web advertise themselves as "free," but hide essential features behind paywalls, impose scan limits, or force users to create accounts just to download a high-resolution image. We decided to change that.
        </p>
        <p>
          QRGen Pro is built entirely client-side. This means that when you enter a URL, text, or your WiFi password, it never leaves your browser. The QR code is generated instantly on your device, ensuring complete privacy and security.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Who is Devsiy?</h2>
        <p>
          This project was designed and developed by <strong>devsiy</strong>. We are passionate about creating clean, efficient, and user-friendly web applications. You can find more of our work and get in touch with us at <a href="https://devsiy.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">devsiy.in</a>.
        </p>
      </div>
    </div>
  );
}