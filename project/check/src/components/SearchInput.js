import React from 'react';
import './SearchInput.css';
const SearchInput = ({ value, onChangeText }) => {
React.useEffect(() => {
  /* Adds an event listener which fires whenever the value of our
  input field changes and call the onChangeText function passed
  in as a prop to our component */
  let input = document.querySelector('input');
  input.addEventListener('input', onChangeText);
  /* Don't forget to return a cleanup function */ 
  return input.removeEventListener('input', onChangeText);
 }, []);
return (
 <div class="search-container">
  <input
   type="text"
   value={value}
   onChange={onChangeText}
   placeholder="Search beer by name"
  />
 </div>
);
};
export default SearchInput;