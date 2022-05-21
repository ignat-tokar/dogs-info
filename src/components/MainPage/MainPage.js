import DogInfo from "./DogInfo/DogInfo";
import Paginator from "./../../common/Paginator/Paginator";

function MainPage({breeds}) {

  const breedsArray = breeds.map(breed => {
    return (
      <div key={breed.id}>
        <DogInfo url={breed.image.url} breed={breed} />
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