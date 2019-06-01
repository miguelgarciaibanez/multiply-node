
const opts={
    base: {
        demand: true,
        alias:'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar','Print on console mult table',opts)
            .command('crear', 'Create a new mult table with limit',opts)
            .help()
            .argv;

module.exports = {
    argv
}