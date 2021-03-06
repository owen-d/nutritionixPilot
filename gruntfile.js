module.exports = function(grunt) {
  var jsFiles = [
    'index.js',
    'Gruntfile.js',
    'client/app/**/*.js',
    'server/**/*.js',
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      build: {
        src: 'client/app/main.js',
        dest: 'client/build.js'
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: jsFiles
    },
    watch: {
      files: 'client/app/**/*.js',
      tasks: ['browserify']
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['jshint', 'browserify']);
  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('test', ['jshint']);
};
