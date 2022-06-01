import { NavLink, useNavigate } from "react-router-dom";
import mainBackgroundImage from "./../../assets/images/mainBackgroundImage.jpg";
import SearchComponent from "../SearchComponent/SearchComponent";
import styles from "./../../assets/styles/HeaderComponent.module.css";
import allImageYellow from "./../../assets/images/all_yellow.png";
import allImageGrey from "./../../assets/images/all_grey.png";
import favouritesImageYellow from "./../../assets/images/favourites_yellow.png";
import favouritesImageGrey from "./../../assets/images/favourites_grey.png";
import randomImageYellow from "./../../assets/images/random_yellow.png";
import randomImageGrey from "./../../assets/images/random_grey.png";

function NavImg ({greyImage, yellowImage, path}) {

  const navigate = useNavigate();
  const onMouseEnterHandler = (e) => e.target.src = greyImage;
  const onMouseLeaveHandler = (e) => e.target.src = yellowImage;

  return (    
    <>
      <img 
        src={yellowImage}
        onClick={()=>navigate(path)} 
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      />
    </>    
  );
}

function HeaderComponent() {

  return (
    <div className={styles.header} >
      <SearchComponent />
      <div className={styles.wrapper}>
        <NavImg 
          greyImage={allImageGrey} 
          yellowImage={allImageYellow} 
          path={"/dogs-info"} 
        />
        <NavImg 
          greyImage={favouritesImageGrey} 
          yellowImage={favouritesImageYellow} 
          path={"/dogs-info/favourites"} 
        />        
        <NavImg 
          greyImage={randomImageGrey} 
          yellowImage={randomImageYellow} 
          path={"/dogs-info/random"} 
        />
      </div>
    </div>
  );
}

export default HeaderComponent;