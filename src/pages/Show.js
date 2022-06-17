import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  console.log(props)
  const navigate = useNavigate()
  const { id } = useParams()
  const dogs = props.dogs
  const dog = dogs.find(dog => dogs._id === id)
  

  const [searchForm, setsearchForm] = useState(dog)

  // handleSearch function for form
  const handleSearch = event => {
      setsearchForm({ ...searchForm, [event.target.name]: event.target.value })
  }

  console.log(searchForm)

  // handlesubmit for form
  const handleSubmit = event => {
      event.preventDefault()
      props.updateDogs(searchForm, id)
      navigate('/dogs')
  }

  const removeDogs = () => {
    props.deleteDogs(id)
    navigate("/dogs")
  }


  return (
      <div className="dogs">
          <button id="delete" onClick={removeDogs}>
            DELETE
          </button>
          <h1>{dog.name}</h1>
          <h2>{dog.size}</h2>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={searchForm.name}
                  name="breedName"
                  placeholder="Breed Name"
                  onChange={handleSearch}
              />
              <input
                  type="text"
                  value={searchForm.size}
                  name="maintenance"
                  placeholder="Dog Size"
                  onChange={handleSearch}
              /> 
              <input type="submit" value="Update dog" />
          </form>
      </div>
  ) 
}

export default Show