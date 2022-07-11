import {$} from '@core/dom'
import {Component} from '@core/Component'
import {findElements, makeSelectList, recalculate} from './recalculation.functions'

export class Recalculation extends Component {
  static className = 'recalculation'

  constructor($root, options = {}) {
    super($root, {
      name: 'Recalculation',
      listeners: ['input', 'change'],
      ...options
    })
  }

  init() {
    super.init()

    this.elements = findElements(this.$root)
    makeSelectList(this.elements, this.data)

    this.emitter.subscribe('onFetchData', () => {
      makeSelectList(this.elements, this.data)
    })

    this.emitter.subscribe('onRecalculate', () => {
      recalculate(this.elements, this.data)
    })
  }

  toHTML() {
    return `
      <div class="recalculation__currency">
        <h4 class="currency__title">Source currency</h4>
        <select class="select" name="currency" data-field="select-source"/>
        <input class="input" type="number" class="input" value="1" data-field="input-source"/>
      </div>
      <div class="recalculation__currency">
        <h4 class="currency__title">Result currency</h4>
        <select class="select" name="currency" data-field="select-result"/>
        <input class="input" type="number" class="input" value="1" data-field="input-result" readonly/>
      </div>
    `
  }

  onInput(event) {
    if ($(event.target).data.field === 'input-source') {
      this.emitter.emit('onRecalculate')
    }
  }

  onChange(event) {
    if (($(event.target).data.field.startsWith('select'))) {
      this.emitter.emit('onRecalculate')
    }
  }
}
