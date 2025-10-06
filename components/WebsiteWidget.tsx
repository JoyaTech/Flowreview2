import React from 'react';
import type { Review } from '../types';
import { StarIcon } from './IconComponents';

interface WebsiteWidgetProps {
  reviews: Review[];
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
      />
    ))}
  </div>
);


export const WebsiteWidget: React.FC<WebsiteWidgetProps> = ({ reviews }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm w-full max-w-sm mx-auto">
        <h3 className="font-bold text-lg text-slate-800 mb-1">Excellent</h3>
        <div className="flex items-center mb-3">
            <StarRating rating={5} />
            <p className="text-sm text-slate-500 ml-2">Based on {reviews.length} reviews</p>
        </div>
        
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {reviews.slice(0, 3).map(review => (
                <div key={review.id} className="border-t border-slate-200 pt-3">
                    <StarRating rating={review.rating} />
                    <h4 className="font-semibold text-sm text-slate-700 mt-1">{review.authorName}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">"{review.reviewText}"</p>
                </div>
            ))}
        </div>

        <div className="mt-4 text-center text-xs text-slate-400">
            Powered by ReviewFlow
        </div>
    </div>
  );
};
