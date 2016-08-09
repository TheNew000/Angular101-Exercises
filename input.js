var inputApp = angular.module('inputApp', []);

inputApp.controller('inputController', function($scope){
   $scope.$watch('name2', function(newVal, oldVal){
        $scope.name2length = newVal.length;
   });
});

