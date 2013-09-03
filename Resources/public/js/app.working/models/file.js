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
            this.reader.onloadend = this.onLoaded;
            this.reader.onprogress = this.onProgress;
        },

        onLoaded: function(e) {
            this.trigger('done', e, this, e.target.result);
        },

        onProgress: function(e) {
            var percent = parseInt((e.loaded / e.total) * 100, 10);
            this.trigger('progress', e, this, percent);
        },

        process: function(type) {
            type = 'binary';
            var types = {
                binary: 'readAsBinaryString'
            };
            var method = types[type];
            this.reader[method](this.file);
        }
    });
});
