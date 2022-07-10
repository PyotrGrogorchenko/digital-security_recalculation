import {Component} from '@core/Component'
import {findElements, putNotification} from './header.functions'

export class Header extends Component {
  static className = 'header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }

  init() {
    super.init()

    this.elements = findElements(this.$root)

    this.emitter.subscribe('onNotification', (...args) => {
      putNotification(this.elements, args)
    })
  }

  toHTML() {
    return `
      <h1>
        Digital Security, recalculation
      </h1>  
      <span class="header__notification" data-field="notification">
        Digital Security, recalculation
      </span>  
    `
  }
}
