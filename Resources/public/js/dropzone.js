define(['underscore', 'backbone', 'file'], function(_, Backbone, File) {
    return Backbone.View.extend({
        events: {
            dragover: 'lightUp',
            dragend: 'lightsOff',
            drop: 'dropped'
        },

        dropped: function(e) {
            e.preventDefault();
            var files = e.originalEvent.dataTransfer.files;
            _.each(files, function(file) {
                var fileModel = new File(file);
                fileModel.on('done', _.bind(this.fileRead, this));
                fileModel.process();
            }, this);
            return false;
        },

        // Once file is read into browser memory
        // turn it into an image
        fileRead: function(file, blob) {
            this.collection.add({
                file: file,
                blob: blob
            });
        },

        render: function() {
            this.$el
                .addClass('well')
                .text('Drop files from your desktop to upload');
        },

        lightUp: function() {
            this.$el.addClass('hover');
            return false;
        },

        lightsOff: function() {
            this.$el.removeClass('hover');
            return false;
        }
    });
});
