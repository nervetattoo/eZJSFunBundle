define(['backbone', 'backbone.ez/content/version'], function(Backbone, Version) {
    return Backbone.Model.extend({
        url: function() {
            return Backbone.urlRoot + '/content/objects';
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
