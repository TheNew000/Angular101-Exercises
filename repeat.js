var repeatApp = angular.module('repeatApp', []);
repeatApp.controller('repeatController', function($scope){

    $scope.class=[
    'Shirlette',
    'JT',
    'Jackson',
    'Summer'
    ] 

    $scope.addStudent = function(){
        $scope.class.push($scope.newStudent);
        $scope.newStudent = '';
    }

    $scope.removeStudent = function(index){
        $scope.class.splice(index, 1);
    }

});
