import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import DogInfo from './components/DogInfo';


function App() {

  const [dog, setDog] = useState(null);
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.thedogapi.com/v1/images/search')
      .then((response) => {
        setBreed(response.data[0].breeds[0]);
        setDog(response.data[0]);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      {(dog && breed)
        ? <DogInfo url={dog.url} breed={breed} />
        : <h1>Hello</h1>
      }
    </div>
  );
}

export default App;
