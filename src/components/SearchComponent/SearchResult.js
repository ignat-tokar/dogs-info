import { connect } from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import { getDetailInfo } from "../../redux/search-reducer";
import DogInfoContainer from "../DogInfo/DogInfoContainer";

function SearchResult({
  foundBreeds,
  preloader,
  detailPreloader,
  detailInfo,
  getDetailInfo
}) {

  function showDetailInfo(e) {
    getDetailInfo(e.target.id);
  }

  return (
    <>
      {detailPreloader
        ? <Preloader />
        : <>{detailInfo && <DogInfoContainer
          imageId={detailInfo.id}
          imageUrl={detailInfo.url}
          breed={detailInfo.breeds[0]}
        />}</>
      }
      {preloader
        ? <Preloader />
        : <>
          {foundBreeds && foundBreeds.map(breed => {
            return (
              <p key={breed.id}>
                <button id={breed.id} onClick={showDetailInfo}>{breed.name}</button>
              </p>
            );
          })}
        </>
      }

    </>
  );
}

function mapStateToProps(state) {
  return {
    foundBreeds: state.searchComponent.foundBreeds,
    preloader: state.searchComponent.preloader,
    detailPreloader: state.searchComponent.detailPreloader,
    detailInfo: state.searchComponent.detailInfo
  }
}

export default connect(mapStateToProps, { getDetailInfo })(SearchResult);