import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dogs(props) {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        coat: '',
        maintenance: '',
        size: ''
    })

    // handle change function for form
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewForm({...newForm, [event.target.name]: event.target.value})
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
                        <h1>Dog Breed{dog.name}</h1>
                        <h2> The size of this dog is typically a {dog.size} size.</h2> 
                    </Link>
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading Results: Please Wait</h1>
    }

    return (
        <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={newForm.name}
                        name='name'
                        placeholder='Breed Name'
                        onChange={handleChange}
                    />
                    <input type='submit' value='Search' />
                    <input
                        type='text'
                        value={newForm.size}
                        name='size'
                        placeholder='Ideal Size (small/medium/large)'
                        onChange={handleChange}
                    />
                    <input type='submit' value='Search' />
                </form>
                {props.dogs ? loaded() : loading()}
            </section>
        )
}

export default Dogs