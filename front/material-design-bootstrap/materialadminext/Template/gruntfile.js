module.exports = function(grunt) {
    var ignoreMain = [
        '**/*.html',
        '!**/node_modules/**',
        '!**/.idea/**',
        '!**/*.text**',
        '!**/*.txt**',
        '!**/.DS_Store**',
        '!.DS_Store',
        '!dist',
        '!**/__MACOSX/**',
        '!__MACOSX',
        '!**/__macosx/**',
        '!validation-report.json',
        '!validation-status.json',
        '!npm-debug.log'
    ]

    var cssFiles = ['css/**/**/*.css', '!css/app-1.css', '!css/app-2.css', '!css/app-3.css'],
        lessFiles = 'less/**/*.less',
        htmlFiles = ['*.html', 'includes/*.html'],
        jsFiles = 'js/**/**/*.js',
        miscFiles = ['gruntfile.js', 'package.json'],
        demoFiles = 'demo/**/**/*.*',
        fontFiles = 'fonts/**/**/*.*',
        imgFiles = 'img/**/**/*.*',
        vendorFiles = 'vendors/**/**/*.*';



    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile less files to css
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/app.css": "less/app.less",
                },
                cleancss: true
            }

        },

        // Split large css files to support older IE browsers
        csssplit: {
            your_target: {
                src: ['css/app.css'],
                dest: 'css/app.css',
                options: {
                    maxSelectors: 4095,
                    suffix: '-'
                }
            }
        },

        // Minify css files
        cssmin: {
            minify: {
                options: {
                    keepSpecialComments: 0
                },
                expand: true,
                src: ['css/*.css', '!css/*.min.css', '!css/app.css'],
                ext: '.min.css'
            }
        },

        // This task is used to include partial files in to html. Please ignore this.
        includereplace: {
            your_target: {
                expand: true,
                cwd: '',
                src: '*.html',
                dest: '../dist/base/Template'
            }
        },

        //This task is used to replace images sources with placehold images. Please ignore this.
        'string-replace': {
            classes: {
                files: [{
                    expand: true,
                    cwd: '../dist',
                    src: ['base/Template/**.html', 'envato/Template/**.html'],
                    dest: '../dist'
                }],
                options: {
                    replacements: [
                        {
                            pattern: /<li .*?class="@@(.*?)">/ig,
                            replacement: '<li>'
                        },
                        {
                            pattern: /<li .*?class="navigation__sub @@(.*?)">/ig,
                            replacement: '<li class="navigation__sub">'
                        }
                    ]
                }
            },
            images: {
                files: [{
                    expand: true,
                    cwd: '../dist/base/Template',
                    src: ['**.html'],
                    dest: '../dist/envato/Template'
                }],
                options: {
                    replacements: [
                        {
                            pattern: /demo\/img\/carousel\/c-(.*).jpg/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=1920&h=570'
                        },
                        {
                            pattern: /demo\/img\/contacts\/(.*).jpg/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=512&h=512'
                        },
                        {
                            pattern: /demo\/img\/gallery\/thumbs\/(.*).jpg/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=160&h=160'
                        },
                        {
                            pattern: /demo\/img\/gallery\/(.*).jpg/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=600&h=399'
                        },
                        {
                            pattern: /demo\/img\/headers\/sm\/(.*).png/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=500&h=214'
                        },
                        {
                            pattern: /demo\/img\/headers\/square\/(.*).png/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=214&h=214'
                        },
                        {
                            pattern: /demo\/img\/headers\/(.*).png/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=1280&h=590'
                        },
                        {
                            pattern: /demo\/img\/profile-pics\/(.*).jpg/ig,
                            replacement: 'https://placeholdit.imgix.net/~text?&w=300&h=300'
                        },
                        {
                            pattern: 'demo/img/map.png',
                            replacement: 'https://placeholdit.imgix.net/~text?&w=563&h=338'
                        },
                        {
                            pattern: 'demo/img/note.png',
                            replacement: 'https://placeholdit.imgix.net/~text?&w=797&h=530'
                        }
                    ]
                }
            }
        },

        // Minify js files
        uglify: {
            my_target: {
                files: {
                    'js/app.min.js': ['js/inc/functions.js', 'js/inc/actions.js']
                }
            }
        },

        // Copy files and folders to dist
        copy: {
            css: {
                expand: true,
                cwd: '',
                src: cssFiles,
                dest: '../dist/base/Template'
            },
            less: {
                expand: true,
                cwd: '',
                src: lessFiles,
                dest: '../dist/base/Template'
            },
            js: {
                expand: true,
                cwd: '',
                src: jsFiles,
                dest: '../dist/base/Template'
            },
            misc: {
                expand: true,
                cwd: '',
                src: miscFiles,
                dest: '../dist/base/Template'
            },
            demo: {
                expand: true,
                cwd: '',
                src: demoFiles,
                dest: '../dist/base/Template'
            },
            fonts: {
                expand: true,
                cwd: '',
                src: fontFiles,
                dest: '../dist/base/Template'
            },
            img: {
                expand: true,
                cwd: '',
                src: imgFiles,
                dest: '../dist/base/Template'
            },
            vendors: {
                expand: true,
                cwd: '',
                src: vendorFiles,
                dest: '../dist/base/Template'
            },
            envato: {
                expand: true,
                cwd: '../dist/base/Template',
                src: ['**', '!*.html'],
                dest: '../dist/envato/Template'
            },
            documetationBase: {
                expand: true,
                cwd: '../doc/dist',
                src: ['**', '!**/.DS_Store', '!**/.idea', '!**/Thumbs.db'],
                dest: '../dist/base/Documentation'
            },
            documetationEnvato: {
                expand: true,
                cwd: '../doc/dist',
                src: ['**', '!**/.DS_Store', '!**/.idea', '!**/Thumbs.db'],
                dest: '../dist/envato/Documentation'
            }
        },

        // Clean temp files
        clean: {
            idea: '**/.idea',
            ds: '**/.DS_Store',
            thumbsdb: '**/Thumbs.db'
        },

        // Compress files
        compress: {
            base: {
                options: {
                    archive: '../dist/base/material-admin-extended-dark.zip',
                    flatten: true
                },
                expand: true,
                cwd: '../dist/base/',
                src: '**'
            },
            envato: {
                options: {
                    archive: '../dist/envato/material-admin-extended-dark.zip',
                    flatten: true
                },
                expand: true,
                cwd: '../dist/envato/',
                src: '**'
            }
        },

        // Watch files to execute tasks
        watch: {
            includes: {
                files: htmlFiles,
                tasks: ['includereplace']
            },
            styles: {
                files: lessFiles,
                tasks: ['less', 'csssplit', 'cssmin']
            },
            css: {
                files: cssFiles,
                tasks: ['copy:css']
            },
            js: {
                files: jsFiles,
                tasks: ['uglify', 'copy:js']
            },
            misc: {
                files: miscFiles,
                tasks: ['copy:misc']
            },
            demo: {
                files: demoFiles,
                tasks: ['copy:demo']
            },
            font: {
                files: fontFiles,
                tasks: ['copy:font']
            },
            img: {
                files: imgFiles,
                tasks: ['copy:img']
            },
            vendors: {
                files: vendorFiles,
                tasks: ['copy:vendors']
            }
        }
    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csssplit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Other tasks.
    grunt.registerTask('dist', ['less', 'csssplit', 'cssmin', 'uglify', 'clean', 'copy', 'includereplace', 'string-replace', 'compress']);

};