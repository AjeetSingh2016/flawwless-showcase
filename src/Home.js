import React from "react";
import {  Features, SectionWrapper} from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const Home = () => {
  return (
    <>

      <SectionWrapper
        title="Legal Destination For Law Professionals & Students"
        description="Download the app and start your journey with flawwless"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Rich Resources"
        description="Flawwless is come into play for solving the study resources related problems, It consist of various informations revolving around law"
        mockupImg={assets.feature}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Smart User Interface and Application"
        description="Experience a buttery UI of Flawwless Law Portal. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <SectionWrapper
        title="Well Maintained"
        description="Built while maintaining satisfaction top most priority of the users. Flawwless also contain embedded Dictionary to assist the users on their way of learning"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
           <span className="bold">Flawwless 2022</span>
        </p>
      </div>
    </>
  );
};

export default Home;
