/* import { useState } from 'react';

function SortButton({ options = [], onSelectOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0] || {});
 
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectOption(option);
  };

  return (
    <div className="sort-button">
      <button className="sort-button__trigger" onClick={() => setIsOpen(!isOpen)}>
        Sort By: {selectedOption.label}
        <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <ul className="sort-button__options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`sort-button__option ${selectedOption.value === option.value ? 'active' : ''}`}
              onClick={() => handleSelectOption(option)}
            >          
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
     );
}

export default SortButton;
 */
import { useState } from 'react';

function SortButton({ options = [], onSelectOption }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0] || {}); 

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectOption(option);
  };

  return (
    <div className="sort-button">
      <button className="sort-button__trigger" onClick={() => setIsOpen(!isOpen)}>
        Sort By: {selectedOption.label}
        <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <ul className="sort-button__options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`sort-button__option ${selectedOption.value === option.value ? 'active' : ''}`}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortButton;
