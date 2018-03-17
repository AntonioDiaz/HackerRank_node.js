#!/usr/bin/env node
var fs = require("fs");
var readline = require("readline");

const INPUT_PATH = "./input_output/";

var readArray = function(fileInputPath) {
    return new Promise((resolve, reject) => {
        var myInterface = readline.createInterface({
            input: fs.createReadStream(INPUT_PATH + fileInputPath)
        });
        var lineno = 0;
        try {
            myInterface.on("line", function (line) {
                if (lineno==1) {
                    resolve(line.split(" "));
                }
                lineno++;
            });
        } catch(error) {
            reject(error);
        }
    });
};

var readArrayTwoDimension = function(fileInputPath) {
    return new Promise((resolve, reject) => {
        var myInterface = readline.createInterface({
            input: fs.createReadStream(INPUT_PATH + fileInputPath)
        });
        var lineno = 0;
        var elements = [];
        try {
            myInterface.on("line", function (line) {
                if (lineno>0) {
                    elements.push(line.split(" "));
                }
                lineno++;
            });
            myInterface.on("close", function(){
                resolve(elements);
            });
        } catch(error) {
            reject(error);
        }
    });
};

var readFirstLineString = function (fileInputPath) {
    return new Promise((resolve, reject) => {
        var myInterface = readline.createInterface({
            input: fs.createReadStream(INPUT_PATH + fileInputPath)
        });
        try {
            myInterface.on("line", function(line) {
                resolve(line);
            });
        } catch (error) {
            reject (error);
        }
    });
};

exports.readFileIntoArray = readArray;
exports.readFileIntoArrayTwoDimension = readArrayTwoDimension;
exports.readFileline = readFirstLineString;
exports.INPUT_PATH = INPUT_PATH;
