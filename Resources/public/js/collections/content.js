define(['backbone', 'models/content'], function(Backbone, Model) {
    return Backbone.Collection.extend({
        url: Backbone.urlRoot + '/content/objects',
        model: Model
    })
});
