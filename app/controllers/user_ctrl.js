"use strict";

//console.log("user controller has loaded");

app.controller("userCtrl", function ($scope, $window, userFactory, $location) {

$scope.user = {
		first_name: "",
		last_name: "",
		email: "",
		password: ""
	};

	$scope.signUp = () => {
		console.log("you clicked on the signup button");
		const userObj = {"user": $scope.user};
		const userObjString = JSON.stringify(userObj);
		userFactory.signUp(userObjString)
			.then((data) => {
				//$scope.login();
				$location.url("/categories");
				// console.log ("DATA FROM USER SUBMIT", data);
				
		});
	};



	$scope.login = () => {
		console.log("you clicked on the login button");
		userFactory.login($scope.user)
		.then((data) => {
				$location.url("/categories");
				// console.log ("DATA BACK TO CONTROLLER", data);
			});
	};
		/*.then (data => {
			$scope.creds.auth_token = data;
			console.log("DATA token", data);
			$location.path("/categories");
                //$scope.apply();
		});
	};*/

});

