function DogInfo({ url, breed }) {
  console.log(breed);
  return (
    <>
      <img src={url} />
      <h2>Name: "{breed.name}"</h2>
      <h3>Life span: {breed.life_span} years </h3>
      <h3>Bred for: {breed.bred_for}</h3>
      <h3>Breed group: {breed.breed_group}</h3>
      <h3>Height: {breed.height.metric} cm</h3>
      <h3>Wieght: {breed.weight.metric} kg</h3>
      <h3>Temperament: {breed.temperament}</h3>
    </>
  );
}

export default DogInfo;