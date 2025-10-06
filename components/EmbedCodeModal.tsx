import React, { useState } from 'react';

interface EmbedCodeModalProps {
  onClose: () => void;
}

const WIDGET_CODE = `<div id="review-flow-widget"></div>
<script src="https://your-app.com/widget.js" async defer></script>`;

export const EmbedCodeModal: React.FC<EmbedCodeModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WIDGET_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-lg font-bold text-slate-900">Embed Website Widget</h3>
        <p className="text-sm text-slate-500 mt-1">Copy and paste this code into your website's HTML where you want the widget to appear.</p>
        
        <div className="mt-4 bg-slate-100 rounded-md p-4 relative">
          <pre className="text-sm text-slate-800 overflow-x-auto">
            <code>{WIDGET_CODE}</code>
          </pre>
          <button 
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 hover:bg-slate-50"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};
