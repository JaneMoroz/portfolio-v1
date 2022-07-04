// Get theme from the local storage
export const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

// Save theme to local storage
export const saveStorageTheme = theme => {
  localStorage.setItem("theme", theme)
}
