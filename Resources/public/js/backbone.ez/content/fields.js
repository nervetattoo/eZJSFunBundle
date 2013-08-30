define(['backbone', './field'], function(Backbone, Model) {
    return Backbone.Collection.extend({
        model: Model,
        toJSON: function() {
            return this.invoke('toJSON');
        }
    });
});
