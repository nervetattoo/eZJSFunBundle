define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        idAttribute: 'identifier',
        defaults: function() {
            return {
                identifier: null,
                value: null
            };
        },

        toJSON: function() {
            var obj = {
                fieldDefinitionIdentifier: this.id,
                fieldValue: this.get('value')
            };
            if (this.has('languageCode')) {
                obj.languageCode = this.get('languageCode');
            }
            return obj;
        }
    });
});
