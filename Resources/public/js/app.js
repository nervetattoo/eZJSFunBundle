define(['jquery', 'backbone', 'collections/images', 'dropzone'],
    function($, Backbone, ImageCollection, Dropzone) {
    return Backbone.View.extend({
        views: null,
        images: null,

        initialize: function() {
            this.$el.html('<h1>Galleries</h1><div id="dropzone"></div>');
            this.$dropzone = this.$('#dropzone');

            this.images = new ImageCollection;
            this.listenTo(this.images, 'ready', this.renderImage);

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

        renderImage: function(image, file) {
            var img = new Image();
            img.id = image.cid;
            img.src = window.URL.createObjectURL(file);
            img.onload = function() {
                window.URL.revokeObjectURL(img.src);
            };
            this.$dropzone.append(img);
        }
    });
});
