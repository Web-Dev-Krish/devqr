import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-indigo max-w-none text-slate-600 space-y-6">
        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          At QRGen Pro, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by QRGen Pro and how we use it.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Information Collection</h2>
        <p>
          Our QR Code generator is built to operate entirely client-side. This means that the data you enter (URLs, text, WiFi credentials) is processed locally in your browser. <strong>We do not collect, store, or transmit your QR code data to any servers.</strong>
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Log Files</h2>
        <p>
          QRGen Pro follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Third-Party Privacy Policies</h2>
        <p>
          QRGen Pro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">5. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}