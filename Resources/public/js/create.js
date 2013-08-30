define(['lodash', 'backbone'], function(_, Backbone) {
    var defaults = {
        mainLanguageCode: 'eng-GB',
        LocationCreate: {
            sortField: 'PATH',
            sortOrder: 'ASC'
        },
        Section: {
            _href: '/api/ezp/v2/content/sections/1'
        },
    };
    return {
        content: function(data) {
            return {
                CreateContent: _.merge(defaults, data)
            };
        }
    };
});
