define(['ez/content/objects', 'models/image', 'file'], function(Collection, Model, File) {
    return Collection.extend({
        model: Model,
        initialize: function() {
            _.bindAll(this);
        },

        uploadFile: function(file) {
            var reader = new File(file);
            var img = new this.model({
                name: file.name,
                type: file.type,
                size: file.size,
                reader: reader
            });
            this.add(img);
            reader.on('done', img.fileRead);
            reader.process();
        }
    });
});
