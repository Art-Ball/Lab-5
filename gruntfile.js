module.exports = function(grunt) {

     // Project configuration
     grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       
       // sass config
       sass: {
         dist: {
           options: {
             style: 'compressed'
           },
           files: {
               'css/style.css': 'sass/style.scss'
           }
         }
       },
       // watch config watches and changes / runs the changes made to sass / ingeneral, without having to run the grun task constantly
       watch: {
         css: {
           files: '**/*.scss',
           tasks: ['sass']
         }
       }
     });
   
     // Load the plugin that provides the "sass" and "watch" tasks.
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
   
     // Register Default task(s) we can run in Terminal
     grunt.registerTask('default', ['watch','sass']);
   
   };