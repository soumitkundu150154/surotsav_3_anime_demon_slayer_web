import React, { createContext, useContext, useState } from 'react';

const ArcFilterContext = createContext();

export function ArcFilterProvider({ children }) {
  const [selectedArcFilter, setSelectedArcFilter] = useState(null);

  const filterByArc = (arcTitle) => {
    setSelectedArcFilter(arcTitle);
    // Scroll to missions section
    const element = document.getElementById('missions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearFilter = () => {
    setSelectedArcFilter(null);
  };

  return (
    <ArcFilterContext.Provider value={{ selectedArcFilter, filterByArc, clearFilter }}>
      {children}
    </ArcFilterContext.Provider>
  );
}

export function useArcFilter() {
  const context = useContext(ArcFilterContext);
  if (!context) {
    throw new Error('useArcFilter must be used within an ArcFilterProvider');
  }
  return context;
}
