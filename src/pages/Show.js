import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  console.log(props)
  const navigate = useNavigate()
  const { id } = useParams()
  const dogs = props.dogs
  const dog = dogs.find(dog => dog._id === id)
  

  const [editForm, setEditForm] = useState(dog)

  // handleChange function for form
  const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  console.log(editForm)

  // handlesubmit for form
  const handleSubmit = event => {
      event.preventDefault()
      props.updateDogs(editForm, id)
      navigate('/')
  }

  const removeDogs = () => {
    props.deleteDogs(id)
    navigate("/")
  }


  return (
      <div className="dogs">
          <button id="delete" onClick={removeDogs}>
            DELETE
          </button>
          <h1>{dog.breedName}</h1>
          <h2>{dog.maintenance}</h2>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={editForm.breedName}
                  name="breedName"
                  placeholder="breed"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.maintenance}
                  name="maintenance"
                  placeholder="maintenance level"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.size}
                  name="size"
                  placeholder="Size"
                  onChange={handleChange}
              />
              <input type="submit" value="Update dog" />
          </form>
      </div>
  ) 
}

export default Show