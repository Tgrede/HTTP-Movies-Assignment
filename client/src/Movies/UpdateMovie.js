import axios from 'axios'
import React, {useState} from 'react'

function UpdateMovie(props) {
  const [formData, setFormData] = useState({
    

  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitChange = () => {
    axios.put('http://localhost:5000/api/')
  }

  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input 
      type='text'
      name='title'
      value={formData.title}
      onChange={handleChange}
      />
      <label htmlFor='director'>Director</label>
      <input 
      type='text'
      name='director'
      value={formData.director}
      onChange={handleChange}/>
      <label htmlFor='metascore'>Metascore</label>
      <input 
      type='text'
      name='metascore'
      value={formData.metascore}
      onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

export default UpdateMovie
