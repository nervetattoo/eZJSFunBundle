define(['jquery', 'backbone', 'collections/images', './dropzone'],
    function($, Backbone, ImageCollection, Dropzone) {
    return Backbone.View.extend({
        views: null,

        initialize: function() {
            this.$el.html('<h1>Dropzone</h1><div id="dropzone"></div>');
            this.$dropzone = this.$('#dropzone');

            var imageCollection = new ImageCollection();
            this.listenTo(imageCollection, 'add', this.renderImage);
            this.listenTo(imageCollection, 'add', this.uploadImage);

            this.views = {};
            this.views.dropzone = new Dropzone({
                collection: imageCollection,
                el: this.$dropzone
            });
        },

        render: function() {
            if (this.views) {
                _.invoke(this.views, 'render');
            }
            return this;
        },

        renderImage: function(model) {
            var img = new Image();
            img.id = model.cid;
            img.src = window.URL.createObjectURL(model.get('file').file);
            img.onload = function() {
                window.URL.revokeObjectURL(img.src);
            };
            this.$dropzone.append(img);
        },

        uploadImage: function(model) {
            model.upload();
        }
    });
});
