import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
      
      <div className="prose prose-indigo max-w-none text-slate-600 space-y-6">
        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          Welcome to QRGen Pro! By accessing this website, we assume you accept these terms and conditions. Do not continue to use QRGen Pro if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. License</h2>
        <p>
          Unless otherwise stated, QRGen Pro and/or its licensors own the intellectual property rights for all material on QRGen Pro. All intellectual property rights are reserved. You may access this from QRGen Pro for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Generated QR Codes</h2>
        <p>
          The QR codes generated using our tool are free to use for both personal and commercial purposes. We do not claim ownership over the QR codes you generate, nor do we restrict their usage. 
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Acceptable Use</h2>
        <p>
          You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Modifications</h2>
        <p>
          We reserve the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </div>
    </div>
  );
}