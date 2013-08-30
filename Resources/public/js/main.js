requirejs.config({
    baseUrl: '/bundles/ezjsfun/js',
    paths: {
        jquery: "libs/jquery/jquery",
        lodash: "libs/lodash/dist/lodash",
        underscore: "libs/lodash/dist/lodash.backbone",
        backbone: "libs/backbone/backbone",
        ez: "backbone.ez/"
    },
    shim: {
        backbone: {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        }
    },
    urlArgs: 'bust=' + Date.now()
});

requirejs(['backbone', 'app', 'jquery', 'ez/config'], function(Backbone, App, $, Ez) {
    // Backbone.ez configuration
    Ez.set({
        username: 'admin',
        password: 'ezsc',
        prefix: '/api/ezp/v2',
        _href: function(partial) {
            return this.get('prefix') + partial;
        }
    });
    new App({
        el: $('#app-container')
    }).render();
    Backbone.history.start();
});
