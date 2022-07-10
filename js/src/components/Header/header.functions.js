import {$} from '@core/dom'

export const findElements = ($root) => {
  return {
    'notification': $root.find('[data-field="notification"]')
  }
}

export const putNotification = (function() {
  let timerId = null

  return (elements, data) => {
    if (!data.length) return
    clearTimeout(timerId)
    const notification = elements['notification']
    notification.clearClasses()
    notification.addClass('header__notification')
    notification.addClass(`header__notification_${data[1] ?? 'info'}`)
    notification.setText(data[0])

    timerId = setTimeout(() => {
      timerId = null
      notification.addClass('header__notification_hide')
    }, 5000)
  }
})()
