define(function() {
    var config = {};
    return {
        set: function set(key, value) {
            if (typeof key === 'object') {
                for (var k in key) { set(k, key[k]); }
            }
            else {
                config[key] = value;
            }
            return this;
        },

        get: function(key) {
            if (!key) {
                return config;
            }
            var val = config[key];
            if (typeof val === 'function') {
                return val.call(this, Array.prototype.slice.call(arguments, [1]));
            }
            return val;
        }
    };
});
