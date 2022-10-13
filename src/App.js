import { useState } from 'react'
import weatherService from './services/weather'

import Weather from './components/getweather'

const App = () => {
  const [data,setData]= useState(null)
  const [search,setSearch] = useState('')

  const handleCity = (e) => {
    setSearch(e.target.value)
  }
  const searchCity = (e) => {
    e.preventDefault()
    weatherService.getCity(search).then(result => {
      console.log(result)
      setData(result)
    })
    setSearch('')
  }
  if(data) {
    return(
      <div className='app'>
        <h1 className='header'>Weather app</h1>
        <form className="search" onSubmit={searchCity}>
          <input className='searchbox' type="text" placeholder='Search city..' value={search} onChange={handleCity}/>
          <button className='searchbox search-btn'>Search</button>
        </form>
        <div>
          <Weather data={data}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='app'>
        <h1 className='header'>Weather app</h1>
        <form className="search" onSubmit={searchCity}>
          <input className='searchbox' type="text" placeholder='Search city..' value={search} onChange={handleCity}/>
          <button className='searchbox search-btn'>Search</button>
        </form>
      </div>
    )
  }
}

export default App