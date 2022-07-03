const setupNames = projects => {
  const allNames = []
  projects.forEach(project => {
    allNames.push(project.name)
  })
  return allNames
}

export default setupNames
