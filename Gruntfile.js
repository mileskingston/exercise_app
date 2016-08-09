module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },

    watch: {
      css: {
        files: 'less/*.less',
        tasks: ['less']
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },

    imagemin: {
      dynamic: {   
        options: {
          optimizationLevel: 7
          // svgoPlugins: [{ removeViewBox: false }]
        },                 
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['*/*.{jpeg,jpg,png}'],   // Actual patterns to match
          dest: 'images/dist/'                  // Destination path prefix
        }]
      }
    },

    karma: {
      unit: {
        options: {
          files: ['js/**/*.js']
        }
      }
    }
    // uglify: {
    //   options: {

    //   },
    //   files: [{
    //       expand: true,
    //       cwd: 'src/js',
    //       src: 'js/**/*.js',
    //       dest: 'dest/js'
    //   }]
    // }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-karma');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-dr-svg-sprites');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch', 'karma']);
  grunt.registerTask('deploy', ['less', 'watch', 'cssmin', 'imagemin']);

};