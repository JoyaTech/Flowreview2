import React, { useMemo } from 'react';
import type { Review } from '../types';
import { StarIcon } from './IconComponents';

interface DashboardProps {
  reviews: Review[];
}

// FIX: Create a reusable StatCard component for the dashboard.
const StatCard: React.FC<{ title: string; value: string | number; icon?: React.ReactNode }> = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
    <div className="flex items-center">
      {icon && <div className="mr-4 text-indigo-500">{icon}</div>}
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  </div>
);

// FIX: Provide implementation for Dashboard component to resolve module errors.
export const Dashboard: React.FC<DashboardProps> = ({ reviews }) => {
  const stats = useMemo(() => {
    const totalReviews = reviews.length;
    if (totalReviews === 0) {
      return {
        totalReviews: 0,
        averageRating: 0,
        needsReply: 0,
      };
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = (totalRating / totalReviews).toFixed(1);
    const needsReply = reviews.filter(review => review.needsReply).length;
    return {
      totalReviews,
      averageRating,
      needsReply,
    };
  }, [reviews]);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Reviews" 
          value={stats.totalReviews} 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
        />
        <StatCard 
          title="Average Rating" 
          value={stats.averageRating}
          icon={<StarIcon className="h-8 w-8" />}
         />
        <StatCard 
          title="Needs Reply" 
          value={stats.needsReply}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
        />
      </div>
    </div>
  );
};
