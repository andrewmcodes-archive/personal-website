import '../styles/index.scss'

console.info('Bridgetown is loaded!')

import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

// import { Dropdown, Modal, Tabs, Popover, Toggle } from "tailwindcss-stimulus-components"
import { Dropdown, Toggle } from 'tailwindcss-stimulus-components'
application.register('dropdown', Dropdown)
// application.register('modal', Modal)
// application.register('tabs', Tabs)
// application.register('popover', Popover)
application.register('toggle', Toggle)
