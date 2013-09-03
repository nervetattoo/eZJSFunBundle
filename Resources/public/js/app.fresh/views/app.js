define(['jquery', 'backbone', 'collections/images', './dropzone'],
    function($, Backbone, ImageCollection, Dropzone) {
    return Backbone.View.extend({
        views: null,

        initialize: function() {
            this.$el.html('<h1>Dropzone</h1><div id="dropzone"></div>');
            this.$dropzone = this.$('#dropzone');

            var imageCollection = new ImageCollection();
            // FIXME

            // FIXME Subview
        },

        render: function() {
            // FIXME
            return this;
        },

        renderImage: function(model) {
            // FIXME
        }
    });
});
