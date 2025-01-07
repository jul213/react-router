import { EVENTS } from "./consts.js"
export function navigate (href) {
  window.history.pushState({}, "", href)
  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManagedEvent = target === undefined || target === "_Self"
        
        if (isMainEvent && isManagedEvent && !isModifiedEvent){
            
            event.preventDefault()
            navigate(to) //navegacion con SPA
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}