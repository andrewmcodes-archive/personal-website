import "bridgetown-quick-search"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Prism from "prismjs"

// Styles
import "../styles/index.css"

// Stimulus
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

// Document Loaded
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelectorAll(".prose").length !== 0) {
    Prism.highlightAll()
  }
})
