import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import AdUnit from '../components/AdUnit';
import { QrCode, Zap, Shield, Smartphone, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const faqs = [
    {
      q: "Is this QR Code Generator really 100% free?",
      a: "Yes! Our QR code generator is completely free to use. There are no hidden fees, no subscriptions, and no limits on how many QR codes you can generate."
    },
    {
      q: "Do the QR codes expire?",
      a: "No, the QR codes generated here are static and will never expire. They will work forever as long as the destination URL or content remains active."
    },
    {
      q: "Can I use these QR codes for commercial purposes?",
      a: "Absolutely. You can use the QR codes you generate for both personal and commercial projects without any attribution required."
    },
    {
      q: "Why should I use error correction?",
      a: "Error correction allows a QR code to remain scannable even if part of it is covered, damaged, or modified (like adding a logo in the center). Higher error correction means more resilience but a denser QR code."
    }
  ];

  const relatedTools = [
    { name: "Barcode Generator", icon: <Code className="w-6 h-6 text-indigo-500" />, desc: "Create 1D barcodes for products." },
    { name: "URL Shortener", icon: <Globe className="w-6 h-6 text-indigo-500" />, desc: "Shorten long links easily." },
    { name: "VCard Generator", icon: <Smartphone className="w-6 h-6 text-indigo-500" />, desc: "Share contact details via QR." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free Custom <span className="text-indigo-600">QR Code Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Create unlimited, highly customizable QR codes for URLs, Text, and WiFi networks. Download in high-resolution PNG format instantly. No sign-up required.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AdUnit slot="top-ad-slot" />

        {/* Main Tool */}
        <div className="mb-16 -mt-8 relative z-10">
          <QRCodeGenerator />
        </div>

        <AdUnit slot="middle-ad-slot" />

        {/* Features / Tool Explanation */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Use Our QR Code Generator?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We built this tool to provide a fast, secure, and fully customizable experience without any of the typical restrictions found on other platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unlimited & Fast</h3>
              <p className="text-slate-600 text-sm">Generate as many QR codes as you want. There are no daily limits and generation happens instantly in your browser.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Customizable</h3>
              <p className="text-slate-600 text-sm">Change foreground and background colors, adjust the size up to 2048px, and set custom error correction levels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-slate-600 text-sm">Your data never leaves your device. Everything is generated locally in your browser ensuring maximum privacy.</p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 my-12 prose prose-indigo max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Create a Custom QR Code</h2>
          <p className="text-slate-600 mb-4">
            Creating a QR code has never been easier. Whether you're a business owner looking to share your menu, a professional sharing your portfolio, or just someone wanting to easily share your home WiFi password, our tool has you covered.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
            <li><strong>Select your data type:</strong> Choose between a standard URL, plain text, or a WiFi network configuration.</li>
            <li><strong>Enter your content:</strong> Paste your website link, type your message, or enter your WiFi SSID and password.</li>
            <li><strong>Customize the design:</strong> Pick colors that match your brand. Ensure there is high contrast between the background and foreground for optimal scanning.</li>
            <li><strong>Adjust settings:</strong> Choose the download size and error correction level. If you plan to print it on a large banner, select a larger size.</li>
            <li><strong>Download:</strong> Click the download button to instantly save your high-resolution PNG file.</li>
          </ol>
          <p className="text-slate-600">
            All generated codes are standard 2D barcodes readable by any modern smartphone camera. iOS and Android devices natively support scanning these codes without needing third-party apps.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AdUnit slot="bottom-ad-slot" />

        {/* Related Tools */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedTools.map((tool, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center">
                <div className="mb-4 bg-indigo-50 p-3 rounded-full">
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-slate-500">{tool.desc}</p>
                <span className="mt-4 text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}