import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@mui/material';
import Image from 'next/image'
import { Fragment } from 'react';
import styles from './Hero.module.css'
import HeroContent from './HeroContent';

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

   <HeroContent />
   
    </div>
    </Fragment>
  )
}

export default Hero