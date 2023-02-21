export function watchResize<Element extends HTMLElement>(element: Element, listener: (element: Element) => void) {
  const handler = () => listener(element)
  window.addEventListener('resize', handler)

  handler()

  return {
    destroy: () => {
      window.removeEventListener('resize', handler)
    }
  }
}