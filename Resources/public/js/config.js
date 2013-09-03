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
    }
});
