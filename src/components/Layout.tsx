import { Link } from 'react-router-dom';
import { QrCode, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <QrCode className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">QRGen Pro</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Contact</Link>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
            <Link to="/" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <QrCode className="w-6 h-6" />
              <span className="font-bold text-lg">QRGen Pro</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              The most advanced, free, and unlimited QR code generator on the web. No registration required.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col items-center justify-center gap-2">
          <p>&copy; {new Date().getFullYear()} QRGen Pro. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed by <a href="https://devsiy.in" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">devsiy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}