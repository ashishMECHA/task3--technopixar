import React, { useState, useMemo, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useNavigate, 
  useSearchParams, 
  useParams,
  useLocation
} from 'react-router-dom';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import FilterSidebar from './components/FilterSidebar';
import TruckGrid from './components/TruckGrid';
import TruckDetail from './components/TruckDetail';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { mockTrucks } from './data/mockData';

// Main Router Wrapper
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// App Page Content with Routing hooks
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [urlParams, setUrlParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // Trigger loading shimmer effect on search page query or page change
  useEffect(() => {
    if (location.pathname === '/search') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 650); // 650ms loading simulation
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.search]);

  // 1. URL-synced Search parameters (for search view)
  const searchParams = useMemo(() => {
    return {
      category: urlParams.get('category') || 'all',
      make: urlParams.get('make') || 'all',
      keyword: urlParams.get('keyword') || '',
      location: urlParams.get('location') || 'all',
      priceMin: urlParams.get('priceMin') || '',
      priceMax: urlParams.get('priceMax') || '',
      sort: urlParams.get('sort') || 'price-asc'
    };
  }, [urlParams]);

  // Update URL parameters helper
  const handleUpdateSearchParams = (newParams) => {
    // Resolve functional state updates if passed (e.g., prev => ({...}))
    const resolvedParams = typeof newParams === 'function' ? newParams(searchParams) : newParams;

    const updated = {
      category: resolvedParams.category !== undefined ? resolvedParams.category : searchParams.category,
      make: resolvedParams.make !== undefined ? resolvedParams.make : searchParams.make,
      keyword: resolvedParams.keyword !== undefined ? resolvedParams.keyword : searchParams.keyword,
      location: resolvedParams.location !== undefined ? resolvedParams.location : searchParams.location,
      priceMin: resolvedParams.priceMin !== undefined ? resolvedParams.priceMin : searchParams.priceMin,
      priceMax: resolvedParams.priceMax !== undefined ? resolvedParams.priceMax : searchParams.priceMax,
      sort: resolvedParams.sort !== undefined ? resolvedParams.sort : searchParams.sort
    };

    // Clean empty values out of the URL
    const cleanParams = {};
    Object.keys(updated).forEach(key => {
      if (updated[key] && updated[key] !== 'all' && updated[key] !== '') {
        cleanParams[key] = updated[key];
      }
    });

    setUrlParams(cleanParams);
  };

  // 2. Separate local parameters for Homepage Hero (before navigating to search page)
  const [homeParams, setHomeParams] = useState({
    category: 'all',
    make: 'all',
    keyword: '',
    location: 'all',
    priceMin: '',
    priceMax: ''
  });

  // Calculate matching items based on Home inputs
  const homeFilteredCount = useMemo(() => {
    let result = [...mockTrucks];
    if (homeParams.category !== 'all') {
      result = result.filter(t => t.category === homeParams.category);
    }
    if (homeParams.make !== 'all') {
      result = result.filter(t => t.make.toLowerCase() === homeParams.make.toLowerCase());
    }
    if (homeParams.location !== 'all') {
      result = result.filter(t => t.state.toLowerCase() === homeParams.location.toLowerCase());
    }
    if (homeParams.priceMin) {
      result = result.filter(t => t.price >= Number(homeParams.priceMin));
    }
    if (homeParams.priceMax) {
      result = result.filter(t => t.price <= Number(homeParams.priceMax));
    }
    if (homeParams.keyword.trim()) {
      const q = homeParams.keyword.toLowerCase();
      result = result.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
    }
    return result.length;
  }, [homeParams]);

  // Filter and Sort catalog list based on active search params in URL
  const filteredTrucks = useMemo(() => {
    let result = [...mockTrucks];

    // Category
    if (searchParams.category && searchParams.category !== 'all') {
      result = result.filter(t => t.category === searchParams.category);
    }

    // Make
    if (searchParams.make && searchParams.make !== 'all') {
      result = result.filter(t => t.make.toLowerCase() === searchParams.make.toLowerCase());
    }

    // Location (State)
    if (searchParams.location && searchParams.location !== 'all') {
      result = result.filter(t => t.state.toLowerCase() === searchParams.location.toLowerCase());
    }

    // Min Price
    if (searchParams.priceMin) {
      result = result.filter(t => t.price >= Number(searchParams.priceMin));
    }

    // Max Price
    if (searchParams.priceMax) {
      result = result.filter(t => t.price <= Number(searchParams.priceMax));
    }

    // Keyword
    if (searchParams.keyword && searchParams.keyword.trim() !== '') {
      const query = searchParams.keyword.toLowerCase();
      result = result.filter(t => 
        t.title.toLowerCase().includes(query) ||
        t.model.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
      );
    }

    // Apply Sorting
    if (searchParams.sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (searchParams.sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (searchParams.sort === 'year-desc') {
      result.sort((a, b) => b.year - a.year);
    } else if (searchParams.sort === 'odometer-asc') {
      result.sort((a, b) => a.odometer - b.odometer);
    }

    return result;
  }, [searchParams]);

  // Submit search from home to search page
  const handleHomeSearchSubmit = () => {
    const query = {};
    Object.keys(homeParams).forEach(key => {
      if (homeParams[key] && homeParams[key] !== 'all' && homeParams[key] !== '') {
        query[key] = homeParams[key];
      }
    });
    
    // Build query string and route to /search
    const queryString = new URLSearchParams(query).toString();
    navigate(`/search?${queryString}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTruck = (truck) => {
    navigate(`/truck/${truck.id}`);
  };

  const handleContactClick = (truck) => {
    navigate(`/truck/${truck.id}`);
    setTimeout(() => {
      document.getElementById('enq-name')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    // Reset inputs
    setHomeParams({
      category: 'all',
      make: 'all',
      keyword: '',
      location: 'all',
      priceMin: '',
      priceMax: ''
    });
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuyClick = (e) => {
    if (e) e.preventDefault();
    navigate('/search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Brand Header */}
      <Header onLogoClick={handleLogoClick} onBuyClick={handleBuyClick} />

      {/* Main Routing Views */}
      <main className="flex-grow">
        <Routes>
          
          {/* Route 1: Home Page */}
          <Route path="/" element={
            <div>
              <HeroSearch
                searchParams={homeParams}
                setSearchParams={setHomeParams}
                filteredCount={homeFilteredCount}
                onSearchSubmit={handleHomeSearchSubmit}
              />
              <ReviewsSection />
            </div>
          } />

          {/* Route 2: Search Results Page */}
          <Route path="/search" element={
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
              
              {/* Breadcrumbs */}
              <div className="mb-6">
                <button 
                  onClick={() => navigate('/')}
                  className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-brand-blue transition-colors"
                >
                  Home
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-700">Trucks for sale</span>
                </button>
              </div>

              {/* 2-Column Search Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Side Accordion Filters */}
                <div className="lg:col-span-1">
                  <FilterSidebar
                    searchParams={searchParams}
                    setSearchParams={handleUpdateSearchParams}
                    onSearchSubmit={() => {}}
                    listingsCount={filteredTrucks.length}
                  />
                </div>

                {/* Right Side Search Results */}
                <div className="lg:col-span-3">
                  <TruckGrid
                    trucks={filteredTrucks}
                    onSelectTruck={handleSelectTruck}
                    onContactClick={handleContactClick}
                    sortOrder={searchParams.sort}
                    setSortOrder={(sortVal) => handleUpdateSearchParams({ sort: sortVal })}
                    isLoading={isLoading}
                  />
                </div>
              </div>

            </div>
          } />

          {/* Route 3: Detail Page */}
          <Route path="/truck/:id" element={<DetailRouteWrapper navigate={navigate} />} />

        </Routes>
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

// Sub-wrapper for detail route to pull ID from router state
function DetailRouteWrapper({ navigate }) {
  const { id } = useParams();
  const truck = useMemo(() => {
    return mockTrucks.find(t => t.id === Number(id));
  }, [id]);

  if (!truck) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h2>
        <p className="text-gray-600 mb-6">The truck you are looking for does not exist or has been sold.</p>
        <button 
          onClick={() => navigate('/search')}
          className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-bold"
        >
          Go to Search
        </button>
      </div>
    );
  }

  return (
    <TruckDetail 
      truck={truck} 
      onBack={() => navigate(-1)} // Preserves previous search queries and search history
    />
  );
}
