requirejs.config({
    baseUrl: '/bundles/ezjsfun/js/app',
    urlArgs: 'bust=' + Date.now()
});


require(['backbone', 'views/app', 'jquery'], function(Backbone, AppView, $) {
    new AppView({
        el: $('#app-container')
    }).render();
});
