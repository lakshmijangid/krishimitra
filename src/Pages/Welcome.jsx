import React from 'react'
import TopBanner from "../Components/TopBanner"
import KrishiIntroSection from '../Components/Home(main)'
import KrishiFeature from '../Components/KrishiFeatureHub'
import KrishiMitraLanding from '../landingPage'

function Welcome() {
  return (
    <div className='pl-13'>
    <TopBanner />
    
    <KrishiFeature />
    <KrishiIntroSection />
    </div>
  )
}

export default Welcome;