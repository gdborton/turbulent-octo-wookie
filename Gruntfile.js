module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    less: {
      compile: {
        files: {
          'dist/css/styles.css': 'src/css/styles.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', ['less']);
};
