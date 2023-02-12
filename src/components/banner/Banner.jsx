import "./styles.scss";
import banner from "../../assets/image-hero.jpg";

function Banner() {
  return (
    <>
      <img className="banner-img" src={banner} alt="" />
      <p className="banner__text">
        immersive <span>experiences</span>
        <span>that deliver</span>
      </p>
    </>
  );
}

export default Banner;
