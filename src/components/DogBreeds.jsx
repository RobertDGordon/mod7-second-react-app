import { useState, useEffect, useContext} from 'react'
import { useData } from '../hooks/useData'
import { useUserContext } from '../context/UserContext'
import { MyThemeContext } from '../context/ThemeContext'

function DogBreeds({count}) {
  const [breed, setBreed] = useState('hound')
  // const [images, setImages] = useState([])
  const {currentUser} = useUserContext()
  const {darkMode} = useContext(MyThemeContext)

  const data = useData(`https://dog.ceo/api/breed/${breed}/images/random/5`)

  const images = data ? data.message : []

  useEffect(()=> {
    console.log('DogBreeds.jsx - useEffect: running effect')
    let ignore = false
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then(response => response.json())
      .then(json => {
        console.log('DogBreeds.jsx - useEffect:', json.message)
        if (!ignore){
          setImages(json.message)  
        }
        // add error handling when response is not expected (aka not an array)
      })

    return () => {
      ignore = true
      console.log('DogBreeds.jsx - useEffect - cleanup: cleanup effect')
    }
  }, [breed])

  return (
    <div className='ActivityFinder componentBox'>
      <h3 className={!darkMode ? 'dark' : 'light'}>Dog Breeds for {currentUser.userName}</h3>
      <label>Choose dog breed:
        <select value={breed}
          onChange={(e) => setBreed(e.target.value)}>
            <option>hound</option>
            <option>bulldog</option>
            <option>akita</option>
            <option>dachshund</option>
          </select>
      </label>
      <div>
        {images.map((image)=> (
          <img width='250' src={image} alt={image} />
        ))}
      </div>
    </div>
  )
}

export default DogBreeds