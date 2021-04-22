import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Scrollcmp from './components/Scrollcmp';

function App() {

  // UseState Hooks
  const [selected, setSelected] = useState(null)
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('office');



  // UseEffect Hooks
  useEffect(() => {
    fetchData();
  }, [])


  // Axios Api
  const fetchData = () => {
    const root = 'https://api.unsplash.com'
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios.get(`${root}/search/photos?query=${query}&client_id=${accessKey}`)
      .then(response => (setImages([...response.data.results, ...images])))
  }


  // Event Handlers
  const onSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setInput('');
  };

  const clickHandler = () => {
    setQuery(input);
  }

  const auto = (e) => {
    setInput(e.target.value)
  }


  return (

    // Nav-> Head
    <div className="App" >
      <header className='navbar'>
        <div>
          <div className="logo">
            <box-icon name='tag-alt' type='solid' color='111' ></box-icon>
            <h1>Classplus</h1>
          </div>
          <form className="app__searchForm" onSubmit={onSubmit}>
            <div className='search-wrapper'>
              <input
                className=" search-input"
                type="text"
                placeholder="Search here..."
                value={input}
                onChange={auto}
              />
              <button className="app__submit" type="submit" value="Search" onClick={clickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
                  <defs />
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </header>


      {/* Main -> Section */}
      {
        <InfiniteScroll
          dataLength={images.length}
          next={fetchData}
          hasMore={true}
          loader={<Loader />}>
          <Scrollcmp images={images} setSelected={setSelected} />
        </InfiniteScroll>
      }


      {/* Modal-> Logic */}
      {selected && <Modal selected={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
