import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import AdUnit from '../components/AdUnit';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">Have a question, feedback, or need support? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Email</h3>
                <p className="text-slate-600">contact@devsiy.in</p>
                <p className="text-sm text-slate-500 mt-1">We aim to reply within 24 hours.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Location</h3>
                <p className="text-slate-600">Designed and maintained globally,</p>
                <p className="text-slate-600">accessible everywhere.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <AdUnit slot="contact-ad" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Send Message
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">
              This form is for demonstration purposes. Please use the email provided above.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}