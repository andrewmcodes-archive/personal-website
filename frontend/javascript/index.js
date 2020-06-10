import '../styles/index.scss'

console.info('Bridgetown is loaded!')

import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

import '../styles/prism.scss'
import Prism from './prism.js'
Prism.highlightAll()
