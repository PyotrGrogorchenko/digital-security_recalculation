import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'
import {fetchCurrencyRate} from '@/utils/fetchCurrencyRate'
import {getDefaultData} from './app.functions'

export class App {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.emitter = new Emitter()
    this.data = getDefaultData()
  }

  getRoot() {
    const $root = $.create('div', 'root')

    const componentOptions = {
      emitter: this.emitter,
      data: this.data
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }

  fetchData() {
    fetchCurrencyRate()
      .then(data => {
        Object.assign(this.data, data)
        this.emitter.emit('onFetchData')
        this.emitter.emit('onNotification', 'Currency rates loaded', 'success')
      })
      .catch(() => {
        this.emitter.emit('onNotification', 'Failed to load currency rates', 'error')
      })
  }
}
