import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/fetchProducts';
import { debounce } from '../helpers/debounce';
import { addToCart } from '../app/cartSlice';
import './Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  

  
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  useEffect(() => {
    const debouncedHandler = debounce(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Adjust the delay as needed
    debouncedHandler();
  }, [searchQuery]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleAddToCart = (id) => {
    dispatch(addToCart({ id, qty: 1 }));
  };

  return (
    <div className='homepage-wrap'>
      <input
        className='search-bar'
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="items-wrap">
        {filteredItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img className="item-img" src={item.thumbnail} alt="item" />
            <h3 className="">{item.title}</h3>
            <p className="item-details">{item.description}</p>
            <p className="price-tag">${item.price}</p>
            <button
              className="add-btn"
              onClick={() => handleAddToCart(item.id)}
            >
              {item.qty > 0 ? 'Added' : '+ Add to cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

