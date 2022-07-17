import { defaultLanguage, languages } from "./i18n"

// Function returns a route to a page with the same language as the current page.
const getTranslatedPath = (pathname, to) => {
  const currentPageLanguage = getCurrentPageLanguage(pathname)

  let languagePath = ""
  const isDefaultLanguage = defaultLanguage === currentPageLanguage
  if (!isDefaultLanguage) {
    languagePath = "/" + currentPageLanguage
  }

  let outputPath = `${languagePath}${to}`

  const hasTrailingSlash = outputPath.endsWith("/")
  if (!hasTrailingSlash) {
    outputPath += "/"
  }

  return outputPath
}

// Function returns language from current page path.
const getCurrentPageLanguage = pathname => {
  const pathElements = pathname.split("/")
  for (let element of pathElements) {
    for (let language of languages) {
      if (element === language) {
        return language
      }
    }
  }
  return defaultLanguage
}

export { getTranslatedPath, getCurrentPageLanguage }
