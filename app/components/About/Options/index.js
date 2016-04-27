import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'

import download from 'images/download-print.png'
import print from 'images/print-ship.png'

export const Options = () => {
  return (
    <section styleName="options">
      <h2 styleName="title"><span styleName="underline">If you have your own printer</span>, you can download & print.</h2>
      <img src={download} styleName="image" />
      <h2 styleName="title"><span styleName="underline">If you don't have a printer</span>, we can print and ship to you.</h2>
      <img src={print} styleName="image" />
    </section>
  )
}

export default CSSModules(Options, style)
