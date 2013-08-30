define(['backbone', './fields'], function(Backbone, Fields) {
    return Backbone.Model.extend({
        defaults: function() {
            return {
                fields: new Fields(),
                VersionInfo: new Backbone.Model() 
            };
        }
    });
});
