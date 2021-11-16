import debounce from 'lodash.debounce';
import { useState,useEffect } from 'react';
import ListItem from './components/ListItem';
import SearchInput from './components/SearchInput';
import { fetchSearchResults } from './utils';
const fetchData = async (query, cb) => {
 const res = await fetchSearchResults(query);
 cb(res);
};
const debouncedFetchData = debounce((query, cb) => {
 fetchData(query, cb);
}, 500);
export default function App() {
const [query, setQuery] = useState('');
const [results, setResults] =useState([]);
useEffect(() => {
 debouncedFetchData(query, res => {
  setResults(res);
 });
}, [query]);
return (
  <div>
 <SearchInput
  value={query}
  onChangeText={e => {
  setQuery(e.target.value);
  }}
 />
 {results.map((result, index) => (
  <div key={index}>
   <ListItem
    title={result.name}
    imageUrl={result.image_url}
    caption={result.tagline}
   // title={result.LocalizedName}
    // nation={result.CountryID}
   />
  </div>
 ))}
</div>
)
}
