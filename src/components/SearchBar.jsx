import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const SearchBar = () => {
  const [path, setPath] = useState('');
  const { jsonData } = useStore();

  const handleSearch = () => {
    try {
      const value = path.split('.').reduce((obj, key) => obj[key], jsonData);
      alert(`Value: ${JSON.stringify(value, null, 2)}`);
    } catch {
      alert('Path not found!');
    }
  };

  return (
    <div className="search-bar p-4 bg-white rounded-lg shadow-md max-w-md mx-auto flex items-center space-x-4">
  <input
    type="text"
    placeholder="S.user.address.city"
    value={path}
    onChange={(e) => setPath(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400"
  />
  <button
    onClick={handleSearch}
    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
  >
    Search
  </button>
</div>

  );
};

export default SearchBar;
