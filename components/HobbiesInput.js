import React, { useState, useRef } from 'react';
import styles from './HobbiesInput.module.css';

const HOBBIES_LIST = ['Reading', 'Gaming', 'Traveling', 'Cooking', 'Sports'];

const HobbiesInput = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState(value || []);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    const filteredSuggestions = HOBBIES_LIST.filter(
      (hobby) =>
        hobby.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addHobby(inputValue);
    } else if (e.key === 'Backspace' && inputValue === '') {
      setSelectedHobbies((prev) => prev.slice(0, -1));
      onChange(selectedHobbies.slice(0, -1));
    } else if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex < suggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    }
  };

  const handleSuggestionClick = (hobby) => {
    addHobby(hobby);
  };

  const addHobby = (hobby) => {
    if (!selectedHobbies.includes(hobby) && hobby.trim() !== '') {
      const newHobbies = [...selectedHobbies, hobby];
      setSelectedHobbies(newHobbies);
      onChange(newHobbies);
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const renderSuggestions = () => {
    if (showSuggestions && inputValue) {
      if (suggestions.length) {
        return (
          <ul className={styles.suggestions}>
            {suggestions.map((suggestion, index) => {
              return (
                <li
                  key={suggestion}
                  className={
                    index === activeSuggestionIndex ? styles.active : ''
                  }
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className={styles.noSuggestions}>
            <em>No suggestions!</em>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className={styles.hobbiesInput}>
      <div className={styles.selectedHobbies}>
        {selectedHobbies.map((hobby, index) => (
          <span key={index} className={styles.hobby}>
            {hobby}
          </span>
        ))}
      </div>
      <input
        type="text"
        ref={inputRef}
        className={styles.input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={inputValue}
        placeholder="Add a hobby"
      />
      {renderSuggestions()}
    </div>
  );
};

export default HobbiesInput;
