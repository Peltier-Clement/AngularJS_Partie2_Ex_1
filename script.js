var schoolApp = angular.module('schoolApp',[]);
// [] déclare un nouveau module schoolApp grâce a la fonction angular.module
schoolApp.controller('studentsCtrl',function($scope){
  // on declare le controller qu'on rattache au module
  // studentsCtrl est le nom du controller
  // $scope est un parametre du ctrl et fait la liaison entre JS et HTML
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
