import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dogs(props) {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        breedName: '',
        maintenance: '',
        size: ''
    })

    // handle change function for form
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewForm({...newForm, [event.target.breedName]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createDogs(newForm);
        setNewForm({
            breedName: '',
            maintenance: '',
            size: ''
        })
    }

    const loaded = () => {
        return props.dogs.map((dog) => (
                <div key={dog._id} className='dog'>
                    <Link to={`/${dog._id}`}>
                        <h1>Dog Breed{dog.breedName}</h1>
                        <h2> The size of this dog is typically a {dog.size} size.</h2> 
                        <h2>This dog requires a {dog.maintenance} level of maintenance.</h2>
                    </Link>
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }

    return (
        <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={newForm.breedName}
                        name='breed'
                        placeholder='breed'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newForm.maintenance}
                        name='maintenance level'
                        placeholder='new maintenance level'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newForm.size}
                        name='size'
                        placeholder='size'
                        onChange={handleChange}
                    />
                    <input type='submit' value='Find Your Next Dog!' />
                </form>
                {props.dogs ? loaded() : loading()}
            </section>
        )
}

export default Dogs