import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, CommandIcon } from 'lucide-react';
import { videos } from '../../data/videoData'; // Adjust path if needed

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowDropdown(false);
      setHighlightedIndex(-1);
      return;
    }
    const results = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setShowDropdown(results.length > 0);
    setHighlightedIndex(-1);
  }, [searchTerm]);

  useEffect(() => {
    const handleShortcut = (e) => {
      // For Mac: metaKey is Command, for Windows: ctrlKey is Ctrl
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (video) => {
    setSearchTerm('');
    setShowDropdown(false);
    setHighlightedIndex(-1);

    // Map category to route
    const categoryToRoute = {
      'Banking & Financial Services': '/bankingandfinance',
      'AI & Data Science': '/aianddatascience',
      'Cloud Computing & IT': '/cloudcomputing',
      'Web Development': '/webdev',
      'Career Development': '/careerdevelopment',
      'BPO & Communication': '/bpo',
      'Sales & Marketing Strategy': '/salesandmarketing',
      'Accounting & Financial Management': '/accountingandfinance',
      'Design & Creative Arts': '/design',
      'Rural Development & Entrepreneurship': '/ruraldevelopment',
    };

    const route = categoryToRoute[video.category];
    if (route) {
      navigate(route);
    }
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || searchResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : searchResults.length - 1
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleResultClick(searchResults[highlightedIndex]);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100); // Delay to allow click
  };

  return (
    <div className="relative w-45 lg:w-70">
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
        <SearchIcon className="size-5 text-gray-400 mr-2 " />
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent outline-none w-full text-gray-700"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(searchResults.length > 0)}
          onBlur={handleBlur}
          aria-label="Search courses"
        />
        <div className="hidden lg:flex items-center ml-2 border-l border-gray-300 pl-2">
          <CommandIcon className=" lg:size-4 text-gray-400 mr-2 " />
          <div className=" text-gray-400 font-light">
            <span>K</span>
          </div>
        </div>
      </div>
      {showDropdown && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-auto">
          {searchResults.map((video, idx) => (
            <li
              key={video.id}
              className={`px-4 py-2 cursor-pointer hover:bg-green-100 ${highlightedIndex === idx ? 'bg-green-100' : ''
                }`}
              onMouseDown={() => handleResultClick(video)}
            >
              <span className="font-semibold">{video.title}</span>
              <span className="ml-2 text-xs text-gray-500">
                ({video.category})
              </span>
            </li>
          ))}
          {searchResults.length === 0 && (
            <li className="px-4 py-2 text-gray-500">No courses found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
