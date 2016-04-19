/**
 * Created by Jeff on 16/4/19.
 */

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl', ['$scope','$http', function ($scope , $http) {
    console.log("hello world from controller");

    var refresh = function () {
        $http.get('/contactlist').success(function (response) {
            console.log("i got data i requested");
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();
    
    $http.get('/contactlist').success(function (response) {
        console.log("i got data i requested");
        $scope.contactlist = response;
    });

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id).success(function (response) {
            refresh();
        });
    };

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function (response) {
            $scope.contact = response;
        });
    };

    $scope.update = function () {
        var id = $scope.contact._id;
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
            refresh();
        });
    };

    $scope.deselect = function() {
        $scope.contact = "";
    }

}]);
