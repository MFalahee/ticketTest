export function getCookie(name) {
  function escape(s) {
    return s.replace(/([.*+?$(){}|[\]/\\])/g, "\\$1")
  }
  var match = document.cookie.match(
    RegExp("(?:^|;\\s*)" + escape(name) + "=([^;]*)")
  )
  return match ? match[1] : null
}

// ty @John S https://stackoverflow.com/questions/10730362/get-cookie-by-name
