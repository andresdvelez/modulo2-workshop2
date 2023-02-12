import "./style.scss";
import deepEarth from "../../assets/image-deep-earth.jpg";
import nightArcade from "../../assets/image-night-arcade.jpg";
import soccerTeam from "../../assets/image-soccer-team.jpg";
import carImg from "../../assets/image-grid.jpg";
import fromAbove from "../../assets/image-from-above.jpg";
import pocketBorealis from "../../assets/image-pocket-borealis.jpg";
import curiosity from "../../assets/image-curiosity.jpg";
import fisheye from "../../assets/image-fisheye.jpg";

function Grid() {
  return (
    <section className="creations">
      <div className="creations__header">
        <h2 className="creations__header-title">our creations</h2>
        <button className="creations__header-btn">see all</button>
      </div>
      <div className="creations-wrapper">
        <div className="creation__card">
          <img src={deepEarth} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            deep <span>earth</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={nightArcade} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            night <span>arcade</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={soccerTeam} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            soccer <span>team vr</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={carImg} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            the <span>grid</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={fromAbove} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            from up <span>above vr</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={pocketBorealis} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            pocket <span>borealis</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={curiosity} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            the <span>curiosity</span>
          </p>
        </div>
        <div className="creation__card">
          <img src={fisheye} alt="" className="creation__card-img" />
          <p className="creation__card-text">
            make it <span>fisheye</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Grid;
