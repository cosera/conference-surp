var surpApp = angular.module('surpApp', ['ngRoute']);

surpApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl : 'partials/home.html',
      controller : 'mainController'
    })
    .when('/2011', {
      templateUrl : 'partials/template.html',
      controller  : 'greenController'
    })
    .when('/2013', {
      templateUrl : 'partials/template.html',
      controller  : 'smarterController'
    })
    .when('/jurp1', {
      templateUrl : 'partials/template.html',
      controller  : 'jurp1Controller'
    })
    .when('/jurp2', {
      templateUrl : 'partials/template.html',
      controller  : 'jurp2Controller'
    })
    .when('/philippine-planning', {
      templateUrl : 'partials/template.html',
      controller  : 'philippinePlanningController'
    })
    .when('/public-lecture', {
      templateUrl : 'partials/template.html',
      controller  : 'publicLectureController'
    });
});

surpApp.controller('mainController', function($scope) {
  
});

// 2011 GREEN
surpApp.controller('greenController', function($scope) {
  $scope.title = "2011 Green Urbanism";
  $scope.array = [
    
  ];
  $scope.array.forEach(function(entry){
    entry.link = 'downloads/2011GREEN/' + entry.link;
  });
});

// 2013 SMARTER
surpApp.controller('smarterController', function($scope) {
  $scope.title = "2013 Smarter Cities";
  $scope.array = [
    
  ];
  $scope.array.forEach(function(entry){
    entry.link = 'downloads/2013SMARTER/' + entry.link;
  });
});

// JURP 1
surpApp.controller('jurp1Controller', function($scope) {
  $scope.title = "Journal in Urban and Regional Planning 1";
  $scope.array = [
    {title: "JURP Call for Papers",
      link: "TITLE PAGE_20140604_small_v1.jpg",},
    {title: "JURP Submission Guidelines", 
      link: "JURP_SUBMISSION_GUIDELINES_02.pdf"},
    {title: "Content", 
      link: "JURP_TABLE_OF_CONTENT_01.pdf"},
    {title: "Foreword", 
      link: "ForewordJURP_20140527.pdf"},
    {title: "Land Conversion: Transforming Urban Military Baselands to Higher Economic Uses", 
      link: "JURP_02_MUNDO_arial_lines_05.pdf"},
    {title: "Urbanizing at the Lake's Edge: Watershed Planning and Governance Lessons from the Laguna de Bay Region, Philippines", 
      link: "JURP_03_GOMEZ_arial_lines_05a.pdf"},
    {title: "Flood Risk of Metro Manila Barangays: A GIS Based Risk Assessment Using Multi-Criteria Techniques", 
      link: "JURP_04_PORNASDORO_arial_lines_05a.pdf"},
    {title: "Effects of Public Transport Improvement in the Formation of Compact Cities", 
      link: "JURP_05_MABAZZA_arial_lines_05a.pdf"},
  ];

  $scope.array.forEach(function(entry){
    entry.link = 'downloads/JURP1/' + entry.link;
  });
});

// JURP 2
surpApp.controller('jurp2Controller', function($scope) {
  $scope.title = "Journal in Urban and Regional Planning 2";
  $scope.array = [
    {title: "Journal in Urban and Regional Planning", 
      link: "cover_2015.jpg"},
    {title: "Call for Papers", 
      link: "JURP_05_CALL_FOR_PAPERS_2014_small_ver 2_BW.jpg"},
    {title: "Submission Guidelines", 
      link: "JURP_04_SUBMISSION_GUIDELINES_02.pdf"},
    {title: "JURP 2015 Editorial Board and Reviewers", 
      link: "TITLE_PAGE_2015.jpg"},
    {title: "Foreword", 
      link: "Foreword_JURP_MDR_20150920.pdf"},
    {title: "Copyright", 
      link: "JURP_COPYRIGHT.pdf"},
    {title: "Content", 
      link: "JURP_TABLE_OF_CONTENT_20150902.pdf"},
    {title: "Mode Shift Behavior of Bus Passengers to Rail System under Improved Rail Operations", 
      link: "JURP_01_DILAY_edited_revMDR_20150727.pdf"},
    {title: "Implementation of Multimodal Public Transportation Route Planner for Metro Manila", 
      link: "JURP_02_NARBONETA_edited_revMDR_20150720.pdf"},
    {title: "Engaging the 'Ungovernable': Urban Informality Issues and Insights for Planning", 
      link: "JURP_03_RECIO_edited_revised_last_28Aug2015.pdf"},
  ];

  $scope.array.forEach(function(entry){
    entry.link = 'downloads/JURP2/' + entry.link;
  });
});

// PHILIPPINE PLANNING JOURNAL
surpApp.controller('philippinePlanningController', function($scope) {
  $scope.title = "Philippine Planning Journal";
  $scope.array = [
    {title: "Vol I, No. 1 (October 1969)", 
      link: "Vol I, No. 1 (October 1969).pdf"},
    {title: "Vol I, No. 2 (April 1970)", 
      link: "Vol I, No. 2 (April 1970).pdf"},
    {title: "Vol II, No. 1 (October 1970)", 
      link: "Vol II, No. 1 (October 1970).pdf"},
    {title: "Vol II, No. 2 - Land use", 
      link: "Vol II, No. 2 - Land use.pdf"},
    {title: "Vol III, No. 1 - Planning Law and Administration", 
      link: "Vol III, No. 1 - Planning Law and Administration.pdf"},
    {title: "Vol III, No. 2 - Physical Planning of the Manila Bay Region", 
      link: "Vol III, No. 2 - Physical Planning of the Manila Bay Region.pdf"},
    {title: "Vol IV, No. 1 - Planning Perspective", 
      link: "Vol IV, No. 1 - Planning Perspective.pdf"},
    {title: "Vol IV, No. 2 & Vol V, Nos. 1,2 - Planning and the Poverty Problem", 
      link: "Vol IV, No. 2 & Vol V, Nos. 1,2 - Planning and the Poverty Problem.pdf"},
    {title: "Vol VI, No. 1 - Population, Public Policy and Social Development", 
      link: "Vol VI, No. 1 - Population, Public Policy and Social Development.pdf"},
    {title: "Vol VI, No. 2 - Graduate Education for Planners in the Philippines", 
      link: "Vol VI, No. 2 - Graduate Education for Planners in the Philippines.pdf"},
    {title: "Vol VII, No. 1 (October 1975) - Focus - Human Settlements", 
      link: "Vol VII, No. 1 (October 1975) - Focus - Human Settlements.pdf"},
    {title: "Vol VII, No. 2 - Partnerships in Development", 
      link: "Vol VII, No. 2 - Partnerships in Development.pdf"},
    {title: "Vol VII, No. 2 (April 1976) - Partnership in Development", 
      link: "Vol VII, No. 2 (April 1976) - Partnership in Development.pdf"},
    {title: "Vol VIII, No. 1 - Planning the Water Cycle, Open Seas to Urban Pipeline", 
      link: "Vol VIII, No. 1 - Planning the Water Cycle, Open Seas to Urban Pipeline.pdf"},
    {title: "Vol VIII, No. 2 - The Many Faces of Development", 
      link: "Vol VIII, No. 2 - The Many Faces of Development.pdf"},
    {title: "Vol IX, No. 1 - Towards Rural Development", 
      link: "Vol IX, No. 1 - Towards Rural Development.pdf"},
    {title: "Vol IX, No. 2 & Vol X, No. 1 - Urban Design", 
      link: "Vol IX, No. 2 & Vol X, No. 1 - Urban Design.pdf"},
    {title: "Vol X, No. 2 - Metro Manila Transport and Traffic", 
      link: "Vol X, No. 2 - Metro Manila Transport and Traffic.pdf"},
    {title: "Vol XI, No. 1 - Basic Needs", 
      link: "Vol XI, No. 1 - Basic Needs.pdf"},
    {title: "Vol XI, No. 2 - Implementation", 
      link: "Vol XI, No. 2 - Implementation.pdf"},
    {title: "Vol XII, No. 1 - Urban Expansion Through Land Reclamation", 
      link: "Vol XII, No. 1 - Urban Expansion Through Land Reclamation.pdf"},
    {title: "Vol XII, No. 2 - Local Planning", 
      link: "Vol XII, No. 2 - Local Planning.pdf"},
    {title: "Vol XIII, No. 1 (October 1981) - Metro Cebu Land Use and Transport Study", 
      link: "Vol XIII, No. 1 (October 1981) - Metro Cebu Land Use and Transport Study.pdf"},
    {title: "Vol XIII, No. 2 (April 1982) - Techniques of Analysis for Spatial Planning", 
      link: "Vol XIII, No. 2 (April 1982) - Techniques of Analysis for Spatial Planning.pdf"},
    {title: "Vol XIV, No. 1 - Land Studies v14(1)", 
      link: "Vol XIV, No. 1 - Land Studies v14(1).pdf"},
    {title: "Vol XIV, No. 2 & Vol XV, No. 1 - Diamond Jubilee Issue", 
      link: "Vol XIV, No. 2 & Vol XV, No. 1 - Diamond Jubilee Issue.pdf"},
    {title: "Vol XV, No. 2 - Regional Planning in the Philippines", 
      link: "Vol XV, No. 2 - Regional Planning in the Philippines.pdf"},
    {title: "Vol XVI, No. 1 (Oct 1984)", 
      link: "Vol XVI, No. 1 (Oct 1984).pdf"},
    {title: "Vol XVI, No. 2 (April 1985)", 
      link: "Vol XVI, No. 2 (April 1985).pdf"},
    {title: "Vol XVII, No. 1 (Oct 1985)", 
      link: "Vol XVII, No. 1 (Oct 1985).pdf"},
    {title: "Vol XVII, No. 2 (April 1986)", 
      link: "Vol XVII, No. 2 (April 1986).pdf"},
    {title: "Vol XVIII, No. 1 (Oct 1986)", 
      link: "Vol XVIII, No. 1 (Oct 1986).pdf"},
    {title: "Vol XVIII, No. 2 (April 1987) - Housing", 
      link: "Vol XVIII, No. 2 (April 1987) - Housing.pdf"},
    {title: "Vol XIX, Nos. 1,2 (Oct 1987-April 1988)", 
      link: "Vol XIX, Nos. 1,2 (Oct 1987-April 1988).pdf"},
    {title: "Vol XX, No. 1,2 (Oct 1988-April 1989)", 
      link: "Vol XX, No. 1,2 (Oct 1988-April 1989).pdf"},
    {title: "Vol XXI, No. 1 (Oct 1989)", 
      link: "Vol XXI, No. 1 (Oct 1989).pdf"},
    {title: "Vol XXI, No. 2 & Vol XXII, No. 1 (April-Oct 1990)", 
      link: "Vol XXI, No. 2 & Vol XXII, No. 1 (April-Oct 1990).pdf"},
    {title: "Vol XXII, No. 2 April (1991)", 
      link: "Vol XXII, No. 2 April (1991).pdf"},
    {title: "Vol XXIII, No. 1 (Oct. 1991)", 
      link: "Vol XXIII, No. 1 (Oct. 1991).pdf"},
    {title: "Vol XXIII, No. 2 (Apr 1992)", 
      link: "Vol XXIII, No. 2 (Apr 1992).pdf"},
    {title: "Vol XXIV, No. 1 (Oct 1992)", 
      link: "Vol XXIV, No. 1 (Oct 1992).pdf"},
    {title: "Vol XXVI, No. 2 & Vol XXVII, No. 1 (Apr-Oct 1995)", 
      link: "Vol XXVI, No. 2 & Vol XXVII, No. 1 (Apr-Oct 1995).pdf"},
    {title: "Vol XXVII, No. 2 (April 1996)", 
      link: "Vol XXVII, No. 2 (April 1996).pdf"},
    {title: "Vol XXVIII, No. 2 (April 1997)", 
      link: "Vol XXVIII, No. 2 (April 1997).pdf"},
    {title: "Vol XXIX, No. 1 (Oct 1997)", 
      link: "Vol XXIX, No. 1 (Oct 1997).pdf"},
    {title: "Vol XXIX, No. 2 & Vol XXX, No. 1 (Apr-Oct 1998)", 
      link: "Vol XXIX, No. 2 & Vol XXX, No. 1 (Apr-Oct 1998).pdf"},
    {title: "Vol XXX, No. 2 (April 1999)", 
      link: "Vol XXX, No. 2 (April 1999).pdf"},
  ];

  $scope.array.forEach(function(entry){
    entry.link = 'downloads/PPJ/' + entry.link;
  });
});

// PUBLIC LECTURE
surpApp.controller('publicLectureController', function($scope) {
  $scope.title = "Public Lecture";
  $scope.array = [
    
  ];

  $scope.array.forEach(function(entry){
    entry.link = 'downloads/PL/' + entry.link;
  });
});