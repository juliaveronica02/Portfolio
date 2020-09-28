// rafce: shortcut create functional.
import React, {useState} from 'react'
import "./App.css"
import Axios from "axios"

const App = () => {
  const [query, setQuery] = useState("")
  const APP_ID= "5a2e06e2"
  const APP_KEY= "cdac9e92f552c2da251958ab2707aff6"
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () =>{
    const result = await Axios.get(URL);
    console.log("result", result);
    setQuery("");
  }

  const onChange = e => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData();
  }

  return (
    <div className="App">
      <h1 onClick={getData}>Food API</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query} />
        <input type="submit" value="search"/>
      </form>
    </div>
  )
}

export default App
