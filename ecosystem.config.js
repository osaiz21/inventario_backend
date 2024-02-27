module.exports = {
    apps : [{
        name   : "joro-inventario",
        script : "./index.js",
        instances : 12,
        exec_mode : "cluster"

    }]
}