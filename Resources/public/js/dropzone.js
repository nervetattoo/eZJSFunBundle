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
            _.chain(files)
                .filter(function(file) {
                    return file.name.match(/\.(jpg|png|gif)$/);
                })
                .each(function(file) {
                    var fileModel = new File(file);
                    fileModel.on({
                        done: _.bind(this.fileRead, this),
                        progress: _.bind(this.fileProgress, this)
                    }).process();
                }, this);
            return false;
        },

        // Once file is read into browser memory
        // turn it into an image
        fileRead: function(e, file, blob) {
            this.collection.add({
                file: file,
                blob: blob
            });
        },

        fileProgress: function(e, file, percent) {
            this.$('.progress').text(percent + '%');
        },

        render: function() {
            this.$el
                .html('<h2 class="progress"></h2>'
                    + '<p>Drop files from your desktop to upload</p>')
                .addClass('well');
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
