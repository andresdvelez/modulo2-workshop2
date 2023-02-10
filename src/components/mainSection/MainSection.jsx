import React from "react";
import "./style.scss";

//Images
import interactiveImg from "../../assets/image-interactive.jpg";

function MainSection() {
  return (
    <main className="interactive__container">
      <img src={interactiveImg} alt="" className="interactive__container-img" />
      <div class="interactive__container-text">
        <h2 class="interactive__container-text-title">
          the leader in interactive vr
        </h2>
        <p class="interactive__container-text-text">
          Founded in 2011, loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </main>
  );
}

export default MainSection;
