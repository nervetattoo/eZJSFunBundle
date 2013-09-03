define(['jquery', 'backbone', 'collections/images', 'dropzone'],
    function($, Backbone, ImageCollection, Dropzone) {
    return Backbone.View.extend({
        views: null,
        images: null,

        initialize: function() {
            this.$el.html('<h1>Galleries</h1><div id="dropzone"></div>');
            this.$dropzone = this.$('#dropzone');

            this.images = new ImageCollection();
            this.listenTo(this.images, 'add', this.renderImage);
            this.listenTo(this.images, 'add', this.uploadImage);

            this.views = {};
            this.views.dropzone = new Dropzone({
                collection: this.images,
                el: this.$dropzone
            });
        },

        render: function() {
            this.views.dropzone.render();
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
