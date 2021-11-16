export const BASE_URL = 'https://api.punkapi.com/v2/beers?beer_name';
//export const BASE_URL = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=uiSqRwBRs9cF85ppQ9vo4fInGqusqEAK&q';
export const fetchSearchResults = async query => {
if (query && query.length > 0) {
const parsedQuery = query.replaceAll(' ', '+');
const url= `${BASE_URL}=${parsedQuery}`;
 const res = await fetch(url);
//.search-container {
// display: flex;
// justify-content: center;
// margin-bottom: 24px;
// }
// .search-container input {
// height: 32px;
// width: 300px;
// padding: 0px 12px 0px 12px;
// }
const resJson = res.json();
return resJson;
} else {
return [];
}
};