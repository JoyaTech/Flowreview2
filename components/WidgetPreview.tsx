import React, { useState } from 'react';
import type { Review } from '../types';
import { WebsiteWidget } from './WebsiteWidget';
import { EmbedCodeModal } from './EmbedCodeModal';

interface WidgetPreviewProps {
  reviews: Review[];
}

export const WidgetPreview: React.FC<WidgetPreviewProps> = ({ reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6 sticky top-28">
      <h3 className="text-lg font-bold text-slate-800">Website Widget Preview</h3>
      <p className="text-sm text-slate-500 mt-1 mb-6">Here's how your positive reviews will look on your website. Use the embed code to add it to your site.</p>
      
      <div className="bg-slate-100 p-4 rounded-md">
        <WebsiteWidget reviews={reviews} />
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 w-full px-4 py-2 bg-slate-800 text-white font-semibold rounded-md shadow-sm hover:bg-slate-900"
      >
        Get Embed Code
      </button>

      {isModalOpen && <EmbedCodeModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
