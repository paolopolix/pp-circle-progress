module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style/main.css': 'style/scss/main.scss'
        }
      }
    },
    watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['watch']);
};
