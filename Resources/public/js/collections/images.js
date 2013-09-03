define(['ez/content/objects', 'models/image', 'file'], function(Collection, Model, File) {
    return Collection.extend({
        model: Model,
        initialize: function() {
            _.bindAll(this);
        }
    });
});
