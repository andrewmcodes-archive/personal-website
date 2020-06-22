import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import '../styles/index.css'
import Swup from 'swup'
import Prism from 'prismjs'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupSlideTheme from '@swup/slide-theme'
import 'bridgetown-quick-search'

Prism.highlightAll()
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

document.addEventListener('DOMContentLoaded', function () {
  let mainEl = '#swup'
  let containers = [mainEl, '#topnav']
  let swup = new Swup({
    containers: containers,
    plugins: [
      new SwupSlideTheme({ mainElement: mainEl }),
      new SwupBodyClassPlugin(),
      new SwupScrollPlugin({ animateScroll: false })
    ]
  })

  swup.on('contentReplaced', function () {
    Prism.highlightAll()
  })
})
