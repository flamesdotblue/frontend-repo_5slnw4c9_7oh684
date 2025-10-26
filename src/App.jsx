import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import StudyCafePage from './components/StudyCafePage';
import Footer from './components/Footer';

const App = () => {
  const getHash = () => (typeof window !== 'undefined' ? window.location.hash || '#/' : '#/');
  const [route, setRoute] = useState(getHash());

  useEffect(() => {
    const onHashChange = () => setRoute(getHash());
    window.addEventListener('hashchange', onHashChange);
    // Ensure hash exists on first load
    if (!window.location.hash) {
      window.location.hash = '#/'
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (hash) => {
    if (hash === '#/study-cafe') {
      // open in a new tab to feel like a separate page
      const url = `${window.location.origin}${window.location.pathname}#/study-cafe`;
      window.open(url, '_blank');
    } else {
      window.location.hash = hash;
    }
  };

  const page = useMemo(() => {
    switch (route) {
      case '#/study-cafe':
        return <StudyCafePage />;
      case '#/':
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar navigateTo={navigateTo} current={route} />
      <div className="pt-16">{page}</div>
      <Footer />
    </div>
  );
};

export default App;
