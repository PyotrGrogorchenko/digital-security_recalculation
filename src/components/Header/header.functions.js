export const findElements = ($root) => {
  return {
    '$notification': $root.find('[data-field="notification"]')
  }
}

let timerId = null

export const putNotification = (elements, data) => {
  if (!data.length) return
  clearTimeout(timerId)
  const $notification = elements['$notification']
  $notification.clearClasses()
  $notification.addClass('header__notification')
  $notification.addClass(`header__notification_${data[1] ?? 'info'}`)
  $notification.$el.textContent = data[0]

  timerId = setTimeout(() => {
    timerId = null
    $notification.addClass('header__notification_hide')
  }, 5000)
}
