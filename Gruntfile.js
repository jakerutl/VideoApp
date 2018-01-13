module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'), // read all the packages inside readJSON

    //write the concat task
    sass : {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },


    imagemin : {
      jpg: {
        options: {
          progressive: true
        },
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.jpg'],
            dest: 'images/images_min'
        }]
      }
    },

    concat : {
      dist: {
        src: [
          'js/modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js'
      }
    },

    jshint: {
   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
   options: {
     globals: {
       jQuery: true
     }
   }
 },

    uglify : {
      build : {
        src: 'prod/production.js',
        dest: 'prod/production.min.js'
      }
    },

    watch : {
      sass : {
        files: ['sass/*.scss'],
        tasks: ['sass'],
      },
      scripts : {
        files : ['js/main.js', 'js/modules/*.js'],
        tasks: ['concat','uglify', 'jshint'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'sass']);
  grunt.registerTask('watchFiles', ['watch']);

};
