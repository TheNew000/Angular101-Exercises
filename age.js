var ageApp = angular.module("ageApp", []);
ageApp.controller('ageController', function($scope){
    
    $scope.getBirthYear = function(age){
        var now = new Date().getFullYear();
        var birthYear = now - age;
        $scope.year = birthYear;
    } 

});
