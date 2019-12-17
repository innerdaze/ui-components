export function render(html, targetId) {
  document.getElementById(targetId).appendChild(html)
}

export function attachHandlers(handlers, el) {
  Object.entries(handlers).forEach(([event, fn]) =>
    el.addEventListener(event, fn)
  )
}

export function classes(rules) {
  return Object.entries(rules)
    .reduce((acc, [k, v]) => {
      if (v) {
        acc.push(k)
      }
      return acc
    }, [])
    .join(' ')
}
