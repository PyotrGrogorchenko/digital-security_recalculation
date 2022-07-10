import {$} from '@core/dom'

export const findElements = ($root) => {
  return {
    'select-source': $root.find('[data-field="select-source"]'),
    'input-source': $root.find('[data-field="input-source"]'),
    'select-result': $root.find('[data-field="select-result"]'),
    'input-result': $root.find('[data-field="input-result"]')
  }
}

export const makeSelectList = (elements, data) => {
  const selectSource = elements['select-source']
  const selectResult = elements['select-result']

  while (selectSource.firstChild) {
    selectSource.removeChild(selectSource.lastChild)
  }

  while (selectResult.firstChild) {
    selectResult.removeChild(selectResult.lastChild)
  }

  Object.keys(data.rates).forEach(k => {
    const $optionSource = $.create('option')
    $optionSource.setText(k)
    selectSource.append($optionSource)

    const $optionResult = $.create('option')
    $optionResult.setText(k)
    selectResult.append($optionResult)
  })
}

export const recalculate = (elements, data) => {
  const sourceСurrency = elements['select-source'].$el.value
  const resultСurrency = elements['select-result'].$el.value
  const sourceValue = elements['input-source'].$el.value

  if (!data.rates[resultСurrency]) return false

  const res = (sourceValue * data.rates[resultСurrency] / data.rates[sourceСurrency]).toFixed(2)
  elements['input-result'].$el.value = res

  return true
}
