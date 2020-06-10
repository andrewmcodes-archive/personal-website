import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import Prism from './prism.js'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
Prism.highlightAll()

// Dropdown
document.addEventListener('DOMContentLoaded', function () {
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
