requirejs.config({
    baseUrl: '/bundles/ezjsfun/js',
    urlArgs: 'bust=' + Date.now()
});


require(['backbone', 'app', 'jquery', 'ez/config'], function(Backbone, App, $, Ez) {
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
