import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import Cards from './components/characters/Cards';
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  const [chars, setChars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setChars(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return <div className="container">
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <Cards isLoading={isLoading} chars={chars} />
  </div>
}

export default App;
