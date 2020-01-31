const hbs = require('hbs')

hbs.registerHelper('anio', () => {
    return new Date().getFullYear()
})