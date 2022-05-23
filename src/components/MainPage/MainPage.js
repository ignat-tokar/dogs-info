import DogInfoContainer from "./../DogInfo/DogInfoContainer";

function MainPage({ breeds }) {
  const breedsArray = breeds.map(breed => {
    return (
      <div key={breed.id}>
        <DogInfoContainer 
          imageId={breed.image.id} 
          imageUrl={breed.image.url} 
          breed={breed}  />
      </div>
    )
  })
  return (
    <>
      {breedsArray}
    </>
  );
}

export default MainPage;