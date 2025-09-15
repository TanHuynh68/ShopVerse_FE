import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const SEARCH_SUGGESTIONS_KEY = "searchSuggestions";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedSuggestions = localStorage.getItem(SEARCH_SUGGESTIONS_KEY);
    if (savedSuggestions) {
      try {
        const parsed = JSON.parse(savedSuggestions);
        setSearchSuggestions(parsed);
        setFilteredSuggestions(parsed);
      } catch (error) {
        console.error("Error parsing saved suggestions:", error);
        setSearchSuggestions([]);
        setFilteredSuggestions([]);
      }
    } else {
      setSearchSuggestions([]);
      setFilteredSuggestions([]);
    }
  }, []);

  const saveSearchTerm = (term: string) => {
    if (!term.trim()) return;

    const trimmedTerm = term.trim().toLowerCase();
    const currentSuggestions = [...searchSuggestions];

    // Check if term already exists (case insensitive)
    const exists = currentSuggestions.some(
      (suggestion) => suggestion.toLowerCase() === trimmedTerm
    );

    if (!exists) {
      // Add new term to the beginning of the array
      const updatedSuggestions = [term.trim(), ...currentSuggestions];
      setSearchSuggestions(updatedSuggestions);
      localStorage.setItem(
        SEARCH_SUGGESTIONS_KEY,
        JSON.stringify(updatedSuggestions)
      );
    }
  };

  const deleteSuggestion = (
    suggestionToDelete: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation(); // Prevent triggering suggestion click
    const updatedSuggestions = searchSuggestions.filter(
      (suggestion) => suggestion !== suggestionToDelete
    );
    setSearchSuggestions(updatedSuggestions);
    localStorage.setItem(
      SEARCH_SUGGESTIONS_KEY,
      JSON.stringify(updatedSuggestions)
    );
  };

  const clearAllSuggestions = () => {
    setSearchSuggestions([]);
    setFilteredSuggestions([]);
    localStorage.removeItem(SEARCH_SUGGESTIONS_KEY);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredSuggestions(searchSuggestions);
    } else {
      const filtered = searchSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  }, [searchValue, searchSuggestions]);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (searchValue.trim()) {
      saveSearchTerm(searchValue);
      console.log("Searching for:", searchValue);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex">
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-r-md transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Dropdown overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-b-md shadow-lg max-h-80 overflow-y-auto">
          {searchSuggestions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500 text-center">
              Chưa có lịch sử tìm kiếm
            </div>
          ) : filteredSuggestions.length > 0 ? (
            <>
              <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500">Lịch sử tìm kiếm</span>
                <button
                  onClick={clearAllSuggestions}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  Xóa tất cả
                </button>
              </div>
              <ul className="py-1">
                {filteredSuggestions.map((suggestion, index) => (
                  <li key={index}>
                    <div className="flex items-center group">
                      <button
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="flex-1 px-4 py-2 text-left text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center gap-3"
                      >
                        <Search className="h-4 w-4 text-gray-400" />
                        <span>{suggestion}</span>
                      </button>
                      <button
                        onClick={(e) => deleteSuggestion(suggestion, e)}
                        className="px-2 py-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        title="Xóa"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              Không tìm thấy kết quả cho "{searchValue}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
