var app = angular.module('todoApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({titleText:$scope.titleInput, todoText: $scope.todoInput, deadlineText: $scope.deadlineInput, done:false});
        $scope.todoInput = "";
        $scope.titleInput = "";
        $scope.deadlineInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
