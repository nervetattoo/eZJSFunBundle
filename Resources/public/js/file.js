define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        initialize: function(file) {
            _.bindAll(this);
            this.file = file;
            this.set({
                name: file.name,
                type: file.type,
                size: file.size
            });
            this.reader = new FileReader();
            this.reader.onloadend = _.bind(this.onLoaded, this);
        },

        onLoaded: function(e) {
            this.trigger('done', this, e.target.result);
        },

        process: function() {
            this.reader.readAsBinaryString(this.file);
        }
    });
});
