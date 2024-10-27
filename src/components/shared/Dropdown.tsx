import React, { useState } from "react";

type DropdownProps = {
  options: string[];
  value: string;
  onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="relative">
      <button
        className="btn btn-outline w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select an option"}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
