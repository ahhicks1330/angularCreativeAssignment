angular.module("myShoppingList", [])
 .controller("myLCtrl", [
     '$scope',
     function($scope) {
    $scope.lists = [];
    
    $scope.addList = function() {
        $scope.errorlist='';
        if (!$scope.addL) {return;}
        if ($scope.lists.indexOf($scope.addL) == -1)
        {
            $scope.lists.push($scope.addL);
            $scope.addL='';
        }
        else
        {
            $scope.errorlist = 'That list already exists.';
            $scope.addL='';
        }
    };
    $scope.removeList = function (y) {
        $scope.errorlist='';
        $scope.lists.splice(y, 1);
    };
}])
    .controller("myPCtrl", [
        '$scope',
        function($scope) {
            $scope.products = [];
            
            $scope.addItem = function () {
                $scope.errortext='';
                if (!$scope.addMe) {return;}
                if ($scope.products.indexOf($scope.addMe) == -1)
                {
                    $scope.products.push($scope.addMe);
                    $scope.addMe='';
                }
                else
                {
                    $scope.errortext = 'That item is already in the list.';
                    $scope.addMe='';
                }
            };
            $scope.removeItem = function (x) {
                $scope.errortext='';
                $scope.products.splice(x, 1);
            }; 
    }]);