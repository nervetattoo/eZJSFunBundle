define(['ez/content/object', 'ez/config', 'create', 'base64'],
    function(Model, Ez, create, Base64) {
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
                alternativeText: file.name,
                fileSize: file.size,
                data: window.btoa(blob)
            });
            var data = create.content({
                ContentType: {_href: Ez.get('_href', '/content/types/27')},
                LocationCreate: {
                    ParentLocation : {
                        _href: Ez.get('_href', '/content/locations/1/2/111')
                    }
                },
                fields: {
                    field: this.fields().toJSON()
                }
            });

            return this
                .contentCreate(data)
                .done(this.uploadSuccess)
                .fail(this.uploadError);
        },

        uploadSuccess: function(resp) {
            this.publish(this.id, this.get('CurrentVersion').Version.VersionInfo.versionNo)
                .done(this.published);
        },

        published: function(resp) {
            console.log('published', resp);
        },

        uploadError: function(resp) {
            console.log(resp);
        }
    });
});
