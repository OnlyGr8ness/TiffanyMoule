const myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
    
    console.log($scope); 

    function test(){
        console.log('This Worked');
    }

});