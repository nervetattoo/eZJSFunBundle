define(['underscore', 'backbone'], function(_, Backbone) {
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
                this.collection.uploadFile(file);
            }, this);
            return false;
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
