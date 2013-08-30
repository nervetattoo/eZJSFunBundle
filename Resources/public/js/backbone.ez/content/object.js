define(['../config', 'backbone', './version'], function(Ez, Backbone, Version) {
    return Backbone.Model.extend({
        idAttribute: '_id',

        publish: function(id, version) {
            return Backbone.ajax({
                url: Ez.get('_href', '/content/objects/'+id+'/versions/'+version),
                username: Ez.get('username'),
                password: Ez.get('password'),
                type: 'PUBLISH'
            });
        },

        contentCreate: function(data) {
            return Backbone.ajax({
                url: Ez.get('_href', '/content/objects'),
                username: Ez.get('username'),
                password: Ez.get('password'),
                dataType: 'json',
                data: JSON.stringify(data),
                contentType: 'application/vnd.ez.api.ContentCreate+json',
                headers: {
                    Accept: 'application/vnd.ez.api.Content+json'
                },
                type: 'POST'
            }).done(this.created);
        },

        created: function(response) {
            this.set(this.parse(response)).trigger('created');
        },

        parse: function(response) {
            if (response.Content) {
                return response.Content;
            }
            return response;
        },

        defaults: function() {
            return {
                CurrentVersion: this.version()
            };
        },

        field: function(identifier, value) {
            var version = this.get('CurrentVersion');
            var fields = version.get('fields');
            if (!fields.contains(identifier)) {
                fields.add({identifier: identifier});
            }
            var field = fields.get(identifier);
            if (typeof value !== 'undefined') {
                field.set({value: value});
            }
            return field;
        },
        fields: function() {
            return this.get('CurrentVersion').get('fields');
        },

        version: function() {
            return new Version();
        }
    })
});
