export function render(html, targetId) {
  document.getElementById(targetId).appendChild(html);
}

export function attachHandlers(handlers, el) {
  Object.entries(handlers).forEach(([event, fn]) =>
    el.addEventListener(event, fn)
  );
}
