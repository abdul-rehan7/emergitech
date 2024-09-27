// components/Dropdown.tsx
"use client"
import { useState } from 'react';
import { BsLaptop } from "react-icons/bs";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ label: 'Desktop', width: '1280px' });

  const options = [
    { label: 'Desktop', width: '1280px',icon:'<BsLaptop/>' },
    { label: 'Tablet', width: '1000px',icon:'<name/>' },
    { label: 'Mobile', width: '750px',icon:'<name/>' },
  ];

  const handleOptionClick = (option: { label: string; width: string }) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative h-full w-[12rem] flex items-center text-left m-0">
      <div>
        <button
          type="button"
          className="inline-flex m-0 justify-between  shadow-sm px-4  h-full text-sm font-medium hover:bg-[#7585a92c]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='flex space-x-3'>
            <span className="text-white">{selected.label}</span>{' '}
            <span className="text-gray-500">W {selected.width}</span>
          </span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-[10rem] w-full  shadow-lg [#131720] ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a
                key={option.label}
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                <span>{option.icon}</span>
                <span className="text-white">{option.label}</span>{' '}
                <span className="text-gray-500">W {option.width}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
