import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import '../styles/index.css'
import Swup from 'swup'
import Prism from 'prismjs'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupSlideTheme from '@swup/slide-theme'
import Typed from 'typed.js'
import 'bridgetown-quick-search'

Prism.highlightAll()
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

// Dropdown
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

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 900,
    startDelay: 1000,
    loop: true
  })

  const menus = document.querySelectorAll('.navbar-burger')
  const dropdowns = document.querySelectorAll('.navbar-menu')

  if (menus.length && dropdowns.length) {
    for (var i = 0; i < menus.length; i++) {
      menus[i].addEventListener('click', function () {
        for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle('hidden')
        }
      })
    }
  }
})
