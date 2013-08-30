define(['./content', 'create'], function(Model, create) {
    return Model.extend({
        initialize: function() {
            _.bindAll(this);
        },

        fileRead: function(blob, file) {
            this.file = file;
            this.trigger('ready', this, file, blob);
            this.upload(file, blob);
        },

        upload: function(file, blob) {
            this.field('name', file.name);
            this.field('image', {
                fileName: file.name,
                fileSize: file.size,
                data: window.btoa(blob)
            });
            var data = create.content({
                ContentType: {_href: '/api/ezp/v2/content/types/27'},
                LocationCreate: {
                    ParentLocation : {
                        _href: '/api/ezp/v2/content/locations/1/2/111'
                    }
                },
                fields: {
                    field: this.fields().toJSON()
                }
            });

            return Backbone.ajax({
                url: _.result(this, 'url'),
                username: 'admin',
                password: 'ezsc',
                dataType: 'json',
                data: JSON.stringify(data),
                contentType: 'application/vnd.ez.api.ContentCreate+json',
                type: 'POST'
            })
                .done(this.uploadSuccess)
                .fail(this.uploadError);
        },

        uploadSuccess: function(resp) {
            console.log(resp);
        },

        uploadError: function(resp) {
            console.log(resp);
        }
    });
});
