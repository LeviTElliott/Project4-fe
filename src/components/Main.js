import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dogs from '../pages/Dogs'
import Show from '../pages/Show';

function Main(props) {
    const [dogs, setDogs] = useState(null)

    const URL = 'https://backend5-321.herokuapp.com/dog';

    const getDogs = () => {
        fetch(URL)
        .then(response => response.json())
        .then(result => setDogs(result))
    }

    const createDogs = async (dog) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dog)
        })
        getDogs();
    }

    const updateDogs = async (dog, id) => {
        await fetch(URL + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dog)
        })
        getDogs();
    }

    const deleteDogs = async id => {
        await fetch(URL + id, {
            method: 'delete',
        })
        getDogs();
    }

    useEffect(() => getDogs(), [])
    console.log(`Dogs are ${dogs}`)

  return (
    <main>
        <Routes>
            <Route path='/' 
                element={<Dogs 
                dogs={dogs}
                createDogs={createDogs}
            />} />
            <Route 
                path= '/:id'
                element={<Show 
                dogs={dogs} 
                updateDogs={updateDogs} 
                deleteDogs={deleteDogs} 
            />}
                />
        </Routes>
    </main>
  )
}

export default Main