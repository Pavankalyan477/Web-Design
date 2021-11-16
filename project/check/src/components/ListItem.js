import React from 'react';
import './ListItem.css';
const ListItem = ({name,caption,imageUrl }) => {
return (
<div class="list-item-container">
 {/* <div className="left">
  <img src={imageUrl} className="thumbnail" />
 </div> */}
 <div className="center">
  <h4>{name}</h4>
  <p>{caption}</p>
 </div>
 <div className="right">
  <p>&#8250;</p>
 </div>
</div>
);
};
export default ListItem;