import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { FilterControls } from './components/FilterControls';
import { ReviewList } from './components/ReviewList';
import { WidgetPreview } from './components/WidgetPreview';
import { MOCK_REVIEWS } from './constants';
import type { Review } from './types';

export type FilterType = 'all' | 'needsReply' | 'positive' | 'negative';

const App: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');

  const handleUpdateReview = useCallback((updatedReview: Review) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === updatedReview.id ? updatedReview : review
      )
    );
  }, []);

  const filteredReviews = useMemo(() => {
    switch (currentFilter) {
      case 'needsReply':
        return reviews.filter(review => review.needsReply);
      case 'positive':
        return reviews.filter(review => review.rating >= 4);
      case 'negative':
        return reviews.filter(review => review.rating <= 2);
      case 'all':
      default:
        return reviews;
    }
  }, [reviews, currentFilter]);
  
  const positiveReviews = useMemo(() => reviews.filter(r => r.rating >= 4), [reviews]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <Dashboard reviews={reviews} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FilterControls
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
            />
            <div className="mt-6">
              <ReviewList
                reviews={filteredReviews}
                onUpdateReview={handleUpdateReview}
              />
            </div>
          </div>
          <div className="lg:col-span-1">
             <WidgetPreview reviews={positiveReviews} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
