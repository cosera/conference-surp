var surpApp = angular.module('surpApp', ['ngRoute']);

surpApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : 'partials/home.html',
      controller : 'mainController'
    })
    .when('/search', {
      templateUrl : 'partials/search.html',
      controller : 'searchController'
    })
    .when('/2011', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .when('/2013', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .when('/jurp1', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .when('/jurp2', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .when('/philippine-planning', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .when('/public-lecture', {
      templateUrl : 'partials/template.html',
      controller  : 'fileListController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

surpApp.controller('mainController', ['$scope', '$http',
  function($scope, $http) {
      $http.get('js/data.json').success(function(data) {
        $scope.filegrps = data.dir;
      });
}]);

surpApp.controller('searchController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $http.get('js/data.json').success(function(data) {
      $scope.filegrps = data.dir;
      $scope.filegrps.forEach(function(entry){
        if(entry.grpname == 'Journal in Urban and Regional Planning 1')
          downloadsDir = 'JURP1'
        else if(entry.grpname == 'Journal in Urban and Regional Planning 2')
          downloadsDir = 'JURP2'
        else if(entry.grpname == 'Philippine Planning Journal')
          downloadsDir = 'PPJ'
        entry.files.forEach(function(file){
          file.link = 'downloads/'+ downloadsDir + '/' + file.link;
        });
      });
    });
    $scope.query = $location.search().q;

}]);

surpApp.controller('fileListController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $http.get('js/data.json').success(function(data) {

      var jsonIndex = 0;
      var downloadsDir = 'JURP1';
      console.log($location.path())
      if($location.path() === '/jurp1'){
        jsonIndex = 0;
        downloadsDir = 'JURP1'
      }
      else if($location.path() === '/jurp2'){
        jsonIndex = 1;
        downloadsDir = 'JURP2'
      }
      else if($location.path() === '/philippine-planning'){
        jsonIndex = 2;
        downloadsDir = 'PPJ'
      }

      $scope.filegrp = data.dir[jsonIndex];
      console.log($scope.filegrp)
      $scope.title = $scope.filegrp.grpname;
      $scope.array = $scope.filegrp.files;
      $scope.array.forEach(function(entry){
        entry.link = 'downloads/'+ downloadsDir + '/' + entry.link;
      });
    });
  
    
}]);
