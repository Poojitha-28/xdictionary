import React, { useState } from 'react';

const DictionaryApp = () => {
  // State to store the input value
  const [word, setWord] = useState('');
  // State to store the search result or definition
  const [value, setValue] = useState('');

  // Sample dictionary (assuming dicWords is an array of objects with 'word' and 'definition' properties)
  const dicWords = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ];
  

  const SearchFunction = () => {
    let result = dicWords.find(x => x.word === word);
    if (result) {
      setValue(result.meaning); // Set the definition if found
    } else {
      setValue("Word not found in the dictionary."); // Set not found message
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input 
      type='text'
        placeholder="Search for a word" 
        value={word} // Bind the input value to the state 'word'
        onChange={(e) => setWord(e.target.value)} // Update the state when the input changes
      />
      <button onClick={SearchFunction}>Search</button>
      <h6>Definition:</h6>
      <p>{value}</p> {/* Display the definition or not found message */}
    </>
  );
};

export default DictionaryApp;
