const HOME_STORAGE_KEY = 'HOME'

export default {
  get () {
    return JSON.parse(localStorage.getItem(HOME_STORAGE_KEY)) || []
  },
  set (home) {
    localStorage.setItem(HOME_STORAGE_KEY, JSON.stringify(home))
  }
}