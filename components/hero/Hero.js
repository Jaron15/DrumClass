import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@mui/material';
import Image from 'next/image'
import { Fragment } from 'react';
import styles from './Hero.module.css'
import HeroContent from './HeroContent';


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