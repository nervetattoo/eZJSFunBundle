requirejs.config({
    baseUrl: '/bundles/ezjsfun/js',
    paths: {
        jquery: "libs/jquery/jquery",
        lodash: "libs/lodash/dist/lodash",
        underscore: "libs/lodash/dist/lodash.backbone",
        backbone: "libs/backbone/backbone"
    },
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        }
    },
    urlArgs: 'bust=' + Date.now()
});

requirejs(['backbone', 'app', 'jquery'], function(Backbone, App, $) {
    Backbone.urlRoot = 'api/ezp/v2';
    new App({
        el: $('#app-container')
    }).render();
    Backbone.history.start();
});
