import React from "react";
import {  Features, SectionWrapper} from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const Home = () => {
  return (
    <>
<SectionWrapper
  title="Your Ultimate Expense Management Solution"
  description="Take control of your finances with our powerful expense management app. Download now and simplify your financial life."
  showBtn
  mockupImg={assets.homeHero}
  banner="banner"
/>

<SectionWrapper
  title="Comprehensive Expense Tracking"
  description="Our app offers robust features to tackle all your expense tracking needs. From categorizing expenses to generating insightful reports, we've got you covered."
  mockupImg={assets.feature}
  reverse
/>

<Features />

<SectionWrapper
  title="Sleek and User-Friendly Interface"
  description="Experience a smooth and intuitive user interface designed to make managing your expenses effortless. With consistent color schemes and seamless navigation, tracking your finances has never been easier."
  mockupImg={assets.homeCards}
  reverse
/>

<SectionWrapper
  title="Download Expense Manager By Scanning this QR"
  description="We prioritize user satisfaction and ensure our app is always up-to-date and reliable. Our embedded expense dictionary provides additional assistance, making managing your expenses a breeze."
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
           <span className="bold">Expense Manager 2024</span>
        </p>
      </div>
    </>
  );
};

export default Home;
