import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api.jsx'
import ImageList from './components/ImageList.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
    const result = await searchImages(term)
    setImages(result);
  };

  return (
    
      <div className='App'>
        <SearchHeader search={handleSubmit}/>
        <ImageList imagesPlaceholder={images}/>

      </div>      
    
  )
}

export default App
