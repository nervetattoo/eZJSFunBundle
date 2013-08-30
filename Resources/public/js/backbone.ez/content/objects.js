define(['../config', 'backbone', './object'], function(Ez, Backbone, Model) {
    return Backbone.Collection.extend({
        model: Model,
        url: function() {
            return Ez.get('_href', '/content/objects');
        }
    })
});
