module.exports = function(grunt) {

    grunt.initConfig({
        //jshint: {
        //    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //    options: {
        //        globals: {
        //            jQuery: true
        //        }
        //    }
        //},
        //watch: {
        //    files: ['<%= jshint.files %>'],
        //    tasks: ['jshint']
        //},
        war: {
            target: {
                options: {
                    war_dist_folder: '/Users/Sam/Documents/WebstormProjects/WebSockets/',    /* Folder where to generate the WAR. */
                    war_name: 'samswebsockettest',                    /* The name fo the WAR file (.war will be the extension) */
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'Web Magic'
                },
                files: [
                    {
                        expand: true,
                        cwd: '/Users/Sam/Documents/WebstormProjects/WebSockets/',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }

        }
    });

   // grunt.loadNpmTasks('grunt-contrib-jshint');
   // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-war');

    grunt.registerTask('default'["war"]);

};