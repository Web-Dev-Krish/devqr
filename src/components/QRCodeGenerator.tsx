import React, { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Link as LinkIcon, Type, Wifi, Settings, Palette } from 'lucide-react';

export default function QRCodeGenerator() {
  const [value, setValue] = useState('https://devsiy.in');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [size, setSize] = useState(256);
  const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const [margin, setMargin] = useState(true);
  
  const [activeTab, setActiveTab] = useState<'url' | 'text' | 'wifi'>('url');
  
  // Wifi state
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState('WPA');
  const [wifiHidden, setWifiHidden] = useState(false);

  const qrRef = useRef<HTMLDivElement>(null);

  // Update value based on active tab
  useEffect(() => {
    if (activeTab === 'wifi') {
      const escapeStr = (str: string) => str.replace(/([\\;,":])/g, '\\$1');
      const type = wifiEncryption;
      const ssid = escapeStr(wifiSsid);
      const pass = escapeStr(wifiPassword);
      const hidden = wifiHidden ? 'true' : 'false';
      setValue(`WIFI:T:${type};S:${ssid};P:${pass};H:${hidden};;`);
    } else if (activeTab === 'url' && !value.startsWith('http') && !value.startsWith('WIFI:')) {
      // Just keep current value if it's text, or default
    }
  }, [wifiSsid, wifiPassword, wifiEncryption, wifiHidden, activeTab]);

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      // Create a temporary canvas to draw the scaled version
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = size;
      tempCanvas.height = size;
      const ctx = tempCanvas.getContext('2d');
      if (ctx) {
        // Draw the QR code onto the temp canvas at the selected size
        ctx.drawImage(canvas, 0, 0, size, size);
        const url = tempCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `qrcode-${size}px.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
      {/* Controls */}
      <div className="flex-1 p-6 lg:p-8 lg:border-r border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Settings className="text-indigo-600" />
          Customize QR Code
        </h2>

        {/* Content Type Tabs */}
        <div className="flex p-1 bg-slate-100 rounded-lg mb-6">
          <button 
            onClick={() => { setActiveTab('url'); setValue('https://'); }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'url' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <LinkIcon className="w-4 h-4" /> URL
          </button>
          <button 
            onClick={() => { setActiveTab('text'); setValue(''); }}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'text' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Type className="w-4 h-4" /> Text
          </button>
          <button 
            onClick={() => setActiveTab('wifi')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all ${activeTab === 'wifi' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Wifi className="w-4 h-4" /> WiFi
          </button>
        </div>

        {/* Dynamic Inputs based on Tab */}
        <div className="space-y-6">
          {activeTab === 'url' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
              <input 
                type="url" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="https://example.com"
              />
            </div>
          )}

          {activeTab === 'text' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Plain Text</label>
              <textarea 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                placeholder="Enter your text here..."
              />
            </div>
          )}

          {activeTab === 'wifi' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Network Name (SSID)</label>
                <input 
                  type="text" 
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="MyWiFiNetwork"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="text" 
                  value={wifiPassword}
                  onChange={(e) => setWifiPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="SecretPassword"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Encryption</label>
                  <select 
                    value={wifiEncryption}
                    onChange={(e) => setWifiEncryption(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
                  </select>
                </div>
                <div className="flex items-end pb-2">
                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={wifiHidden}
                      onChange={(e) => setWifiHidden(e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                    />
                    Hidden Network
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-slate-100 pt-6 mt-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-indigo-600" /> Colors & Style
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Foreground</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-slate-300 rounded cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Background</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-10 h-10 p-1 border border-slate-300 rounded cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <label className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                  <span>Download Size (px)</span>
                  <span className="text-slate-500">{size}x{size}px</span>
                </label>
                <input 
                  type="range" 
                  min="128" max="2048" step="128"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Error Correction</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                >
                  <option value="L">Low (7%) - Best for simple designs</option>
                  <option value="M">Medium (15%) - Standard</option>
                  <option value="Q">Quartile (25%) - Good for adding logos</option>
                  <option value="H">High (30%) - Maximum reliability</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={margin}
                    onChange={(e) => setMargin(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                  />
                  Include white margin (Quiet Zone)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="lg:w-96 bg-slate-50 p-6 lg:p-8 flex flex-col items-center justify-center border-t lg:border-t-0 border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-6 w-full text-center">Live Preview</h3>
        
        <div 
          className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex items-center justify-center transition-all"
          style={{ minHeight: '280px', minWidth: '280px' }}
        >
          {value ? (
            <div ref={qrRef} className="flex items-center justify-center">
              {/* Always render at a fixed preview size, but use the real size for download */}
              <QRCodeCanvas
                value={value}
                size={250} // Fixed preview size
                fgColor={fgColor}
                bgColor={bgColor}
                level={level}
                includeMargin={margin}
              />
            </div>
          ) : (
            <p className="text-slate-400 text-sm text-center px-8">Enter content to generate QR code</p>
          )}
        </div>

        <button 
          onClick={handleDownload}
          disabled={!value}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-5 h-5" />
          Download {size}x{size} PNG
        </button>
        <p className="text-xs text-slate-500 mt-4 text-center">
          QR codes generated are yours forever. No expiration.
        </p>
      </div>
    </div>
  );
}