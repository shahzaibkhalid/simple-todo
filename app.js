const app = angular.module("App", []);

app.controller("todoCtrl", function($scope) {
    $scope.list = [
        "Learn About TypeScript",
        "Learn about AngularJS",
        "Learn About AngularJS with TypeScript"
    ]
    $scope.addItem = function() {
        if($scope.list.includes($scope.newTodo)) {
            $scope.showError = "This Todo is already added."
        } else if(!$scope.newTodo) {
            $scope.showError = "Please add something."
        } else {
            $scope.list.push($scope.newTodo);
        }
        $scope.newTodo = "";
    }
    $scope.removeItem = function(index) {
        $scope.list = $scope.list.filter(function(elt, i){
            return index !== i;
        })
    }
    $scope.clearOutError = function() {
        $scope.showError = "";
    }
});