import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Join our Team</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Help us on our quest to make good Flawwless even better</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="Ambassador  Program" />
          <FeatureCard iconUrl={assets.javascript} iconText="Contribution in Core" />
        </div>
      </div>
    </div>
  )
}

export default Features



// credits 
// <a href="https://www.flaticon.com/free-icons/ambassador" title="ambassador icons">Ambassador icons created by Flat Icons - Flaticon</a>
{/* <a href="https://www.flaticon.com/free-icons/puzzle" title="puzzle icons">Puzzle icons created by monkik - Flaticon</a> */}