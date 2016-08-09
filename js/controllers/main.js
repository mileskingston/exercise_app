app.controller('MainCtrl', function($scope, $http) {

    $scope.regex = ({
        name: /^[^0-9]{3,}$/
    });

    $scope.validateForm = function(form, field) {
        return form.$submitted && field.$invalid;
    }
    
    $scope.preExercises = [
        {'name':'Barbell curl', 'image':'./images/barbell_curl.jpg'}, 
        {'name':'Ez bar curl', 'image':'./images/ezbar_curl.jpg'}, 
        {'name':'Dumbell curl', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Hammer curl', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Incline curl', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Ab roller', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Crunches', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Planks', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Hanging legs raises', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Landmine 180s', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Side Laterals', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Military press', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Clean and press', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Reverse flyes', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Chest press', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Dips', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Cables flyes', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Push ups', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Dead lift', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Squats', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Lunges', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Leg extention', 'image':'./images/dumbell_curl.jpg'},
        {'name':'Calf raises', 'image':'./images/dumbell_curl.jpg'},

    ];
    $scope.addPreExercise = function(name) {
        $scope.exerciseName = name;
        $scope.focus = false;
    };

    // Add a Item to the list
    $scope.exercises = [];
    $scope.addExercise = function () {
        if($scope.addNewExercise.$valid) {
            var exercise = $scope.exerciseName.name != null? $scope.exerciseName.name : $scope.exerciseName;

            $scope.exercises.push({
               name: exercise,
               sets: $scope.sets
            });
            $scope.exerciseName = "";
            $scope.sets = "";
        }
    };

    $scope.clearName = function() {
        $scope.exerciseName = '';  
    }

    $scope.formReset = function() {
        $scope.addNewExercise.$setPristine();
        $scope.addNewExercise.$setUntouched();
    }

    // Rremove tools
    $scope.removeExercise = function(index) {
    	$scope.exercises.splice(index, 1);
    };

    $scope.removeAllExercise = function () {
        var i = $scope.exercises.length;
        $scope.exercises.splice(0, i);
    };

    $scope.showMobile = function(name) { // Mobile menu
        angular.element('.languages').removeClass('open');
        angular.element('.navbar').removeClass('open');
        switch (name) {
        case 'site-switcher':
        angular.element('.languages').toggleClass('open');
        break;
        case 'main-nav':
        angular.element('.navbar').toggleClass('open');
        break;
        }
        angular.element('body').toggleClass('drawer-open');
    };
});