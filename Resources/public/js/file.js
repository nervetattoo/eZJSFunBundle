define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        initialize: function(file) {
            this.file = file;
            this.reader = new FileReader();
            this.reader.onloadend = _.bind(this.onLoaded, this);
        },

        onLoaded: function(e) {
            this.trigger('done', e.target.result, this.file);
        },

        process: function() {
            this.reader.readAsBinaryString(this.file);
        }
    });
});
