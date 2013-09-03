define(['ez/content/objects', 'models/image'], function(Collection, Model) {
    return Collection.extend({
        model: Model,
        initialize: function() {
            _.bindAll(this);
        }
    });
});
