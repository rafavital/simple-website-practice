const engine = new liquidjs.Liquid()
const projectsSection = document.getElementById('projects')

const template = document.getElementById('projects-template').innerHTML

fetch('src/projects.json')
    .then(jsonResponse => jsonResponse.json())
    .then(data => {
        engine.parseAndRender(template, { projects: data })
            .then(result => {
                projectsSection.innerHTML = result
            })
    })