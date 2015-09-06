module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      main: ['dist/']
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['img/*', 'index.html'],
            dest: 'dist/'
          }
        ]
      }
    },
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

  grunt.registerTask('default', ['clean', 'less', 'copy']);
};
