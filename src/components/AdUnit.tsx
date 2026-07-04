import React, { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && window.adsbygoogle.length === 0) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={`w-full flex justify-center items-center my-8 bg-slate-100 border border-slate-200 rounded-lg overflow-hidden relative min-h-[100px] ${className}`}>
      <span className="text-slate-400 text-xs absolute top-2 left-2 uppercase tracking-wider">Advertisement</span>
      <div className="p-8 text-slate-400 text-sm text-center">
        [ Google AdSense Unit: {slot} ]
      </div>
      {/* Real AdSense code would go here:
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
      */}
    </div>
  );
}