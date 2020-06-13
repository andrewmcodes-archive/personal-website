import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import Prism from './prism.js'
import '../styles/index.css'
import Swup from 'swup'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'
import SwupSlideTheme from '@swup/slide-theme'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
Prism.highlightAll()

// Dropdown
document.addEventListener('DOMContentLoaded', function () {
  let mainEl = '#swup'
  let containers = [mainEl, '#topnav']
  new Swup({
    containers: containers,
    plugins: [
      new SwupSlideTheme({ mainElement: mainEl }),
      new SwupBodyClassPlugin(),
      new SwupScrollPlugin({ animateScroll: false })
    ]
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
