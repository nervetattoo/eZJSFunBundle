requirejs.config({
    baseUrl: '/bundles/ezjsfun/js',
    paths: {
        jquery: "js/jquery/jquery.js",
        lodash: "js/lodash/dist/lodash.compat.js",
        backbone: "js/backbone",
        "backbone.localStorage": "js/backbone.localStorage/backbone.localStorage.js",
        "handlebars.js": "js/handlebars.js/dist/handlebars.js"
    },
    map: {
        '*': {
            underscore: 'lodash'
        }
    }
});

requirejs(['backbone'], function(Backbone) {
    Backbone.history.start();
});
