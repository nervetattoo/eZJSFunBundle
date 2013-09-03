requirejs.config({
    baseUrl: '/bundles/ezjsfun/js/app',
    urlArgs: 'bust=' + Date.now()
});


require(['backbone', 'views/app', 'jquery', 'ez/config'], function(Backbone, AppView, $, Ez) {
    // Backbone.ez configuration
    Ez.set({
        username: 'admin',
        password: 'ezsc',
        prefix: '/api/ezp/v2',
        _href: function(partial) {
            return this.get('prefix') + partial;
        }
    });
    new AppView({
        el: $('#app-container')
    }).render();
    Backbone.history.start();
});
