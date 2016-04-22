'use strict'  
module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        requirejs : {
            build : {
                options : {
                    baseUrl : 'frontend',
                    name : 'config/main',    //主文件名字
                    optimize : 'uglify',   //指定压缩工具类型  使用uglify工具压缩
                    mainConfigFile : 'frontend/config/main.js',  //require 的主文件
                    out : 'build/all.min.js'       //压缩后的文件
                    //其他无需指定  本插件会自动寻找requirejs引进的所有文件
                }
            }
        },
        concat : {
            css : {
                src : ['frontend/styles/*.css'],
                dest : 'dist/index.css'
            }
        },
        cssmin : {
            buildCss : {
                src : 'dist/index.css',
                dest : 'frontend/styles/index.min.css'
            }
        },
        watch : {
            allcss : {
                files : ['frontend/styles/*.css'],
                tasks : ['concat', 'cssmin']
            },
            alljs : {
                files : ['frontend/**/*.js'],
                tasks : ['requirejs']
            }
        }
    });

    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch'); 

    // 注册任务
    grunt.registerTask('default', ['concat', 'cssmin', 'requirejs', 'watch']);
}; 