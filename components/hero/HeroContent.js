import React from 'react'
import styles from './HeroContent.module.css'

const HeroContent = () => {
  return (
    <div className={styles.heroContent}>
        <h1 className={styles.heroHeader}>Feeling Lost?</h1>
        <btn className={styles.heroBtn}>Click Me</btn> 
        <p className={styles.btnInfo}>
        
        A place to practice for any skill level. Look through the lessons 
        on the home page, category page or search for a category. If you're 
        not sure where to start click the button above for recommendations.
        </p>
      </div>
    
  )
}

export default HeroContent