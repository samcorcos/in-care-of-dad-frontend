import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import Button from 'components/Button'

import family from 'images/family.png'

export const Landing = () => {
  return (
    <section styleName="landing">
      <div styleName="overlay"></div>

      <div styleName="card">
        <p styleName="text">A caregiving community for sharing ideas, information, and support.</p>
        <Button type="accent-primary">Get started</Button>
      </div>

      <div styleName="family">
        <div styleName="speech">
          <p styleName="speech-intro">Hi, we're Kim and Karen</p>
          <p>We started In Care of Dad after our dad became ill so we could help others going through the same ordeal.</p>
        </div>
        <img src={family} styleName="image" />
      </div>

    </section>
  )
}

export default CSSModules(Landing, style)
