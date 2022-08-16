import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@mui/material';
import Image from 'next/image'
import { Fragment } from 'react';
import styles from './Hero.module.css'

// const heroImage = <Image src='/DrumClassLogo' ;
// const useStyles = makeStyles((theme) => ({
//     hero: {
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), src)`
//     }
// }))


const Hero = () => {
  return (
    <Fragment>
    <div className={styles.heroWrapper}>
    <div className={styles.imageWrapper}>
      <Image
        priority
        src='/DrumHero.jpg'
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Snare Drum with Sticks"
      />
      
    </div>
    <div className={styles.heroContent}>
        <h1 className={styles.heroHeader}>Feeling Lost?</h1>
        <btn className={styles.heroBtn}>Click Me</btn> 
        <p className={styles.btnInfo}>
        Click the button above to answer a few questions and get recommended videos 
        based on your current skill level. 
        </p>
      </div>
    </div>
    </Fragment>
  )
}

export default Hero