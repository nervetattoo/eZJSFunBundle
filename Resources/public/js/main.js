requirejs.config({
    baseUrl: '/bundles/ezjsfun/js',
    paths: {
        jquery: "libs/jquery/jquery",
        underscore: "libs/lodash/dist/lodash.backbone",
        backbone: "libs/backbone/backbone"
    },
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        }
    }
});

requirejs(['backbone', 'app', 'jquery'], function(Backbone, App, $) {
    new App({
        el: $('#app-container')
    }).render();
    Backbone.history.start();
});
