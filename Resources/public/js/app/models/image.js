define(['ez/content/object', 'ez/config', 'create'],
    function(Model, Ez, create) {
    return Model.extend({
        initialize: function() {
            _.bindAll(this);
        },

        upload: function() {
            var file = this.get('file');
            this.field('name', file.get('name'));
            this.field('image', {
                fileName: file.get('name'),
                alternativeText: file.get('name'),
                fileSize: file.get('size'),
                data: window.btoa(this.get('blob'))
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
