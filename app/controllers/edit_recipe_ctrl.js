"use strict";

//calls getRecipeDetails and editRecipe in the recipe_factory.js. 
//used in edit_recipe.html

app.controller("editRecipeCtrl", function ($scope, $route, $routeParams, recipeFactory, userFactory, $location) {
	
	let user = userFactory.currentUserIdGetter();

//drop down menu to select a category
	$scope.categories = [
        {section : "Overall Health", id : "1"},
        {section : "Better Immunity", id : "2"},
        {section : "Weight Loss", id : "3"},
        {section : "Detox", id : "4"},
        {section : "Reduce Inflammation", id : "5"},
        {section : "Energy", id : "6"},
        {section : "Digestive Health", id : "7"},
        {section : "Heart Health", id : "8"}
    ];

//form to edit redit recipe
    $scope.recipe = {
  
        user_id: user,
        category_id: "",
        title: "",
        description: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        ingredient7: "",
        directions: "",
        notes: ""
    };
	

  const showEditedRecipe = function(){
    console.log("valid id", $routeParams.id);
        recipeFactory.getRecipeDetails($routeParams.id)
        .then((data) => {
            $scope.recipe = data;
            $scope.recipe.id = $routeParams.id;
            console.log("DATA", data);
        });

    };

    $scope.submitEditedRecipe = function() {
    	recipeFactory.editRecipe($routeParams.id, $scope.recipe)
    	.then((data) => {
            $route.reload();

        });

    };

	showEditedRecipe();

});
