module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    optimize: 'uglify2',
                    mainConfigFile: 'Resources/public/js/config.js',
                    baseUrl: 'Resources/public/js',
                    out: 'Resources/public/js/main.dist.js',
                    include: ['main']
                }
            }
        }
    });

    grunt.registerTask('default', []);
};
