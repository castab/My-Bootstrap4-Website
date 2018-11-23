(function () {
    angular.module('app', ['ngAnimate', 'ngRoute'])
    .controller('mainCtrl', ['$location', '$rootScope', 'projectDataService', function($location, $rootScope, projectDataService) {

        vm = this;
        vm.exists = true;
        vm.buttonClicked = false;
        vm.projectData = null;
        vm.introComplete = false;

        vm.click = function() {
            vm.exists = false;
            vm.buttonClicked = true;
        }
        vm.clickStart = function() {
            vm.introComplete = true;
            $location.path('/menu')
            vm.exists = true;
            vm.buttonClicked = false;
            vm.introComplete = false;
        }

        vm.changePage = function(project) {
            projectDataService.changePage(project);
            vm.currentProject = projectDataService.getCurrentProject();
        }

        vm.projectData = projectDataService.getProjectData();

        // Future use - matching up route with content being viewed
        /* $rootScope.$on('$routeChangeSuccess', function() {
            console.log('Route change detected.');
        }); */

    }])
    .controller('navbarCtrl', ['$scope', '$location', '$http', 'projectDataService', function($scope, $location, $http, projectDataService) {
        var vm = {};
        $scope.vm = vm;

        vm.isNavbarActive = function() {
            if ($location.path() != '/') {
                return true;
            } else {
                return false;
            }
        };
        vm.changePage = function(project) {
            projectDataService.changePage(project);
        };
        
        $http.get('data.json').then(
            function(resp) {
                vm.projectData = resp.data.projects;
            },
            function (error) {
                console.log("error getting data");
            }
        );

    }])
    .service('projectDataService', ['$http', '$location', '$location', function($http, $location, $location) {
        vm = this;
        $http.get('data.json').then(
            function(resp) {
                vm.projectData = resp.data.projects;
                vm.currentProject = vm.projectData.current.projects[0];
            },
            function (error) {
                console.log("error getting data");
            }
        );
        vm.changePage = function(project) {
            vm.currentProject = project;
            $('.navbar-collapse').collapse('hide');
            $location.path(project.route);
            window.scrollTo(0, 0);
        };
        vm.getCurrentProject = function() {
            if (vm.currentProject) {
                return vm.currentProject;
            };
        };
        vm.getProjectData = function() {
            if (vm.projectData) {
                return vm.projectData
            };
        };
        vm.isNavbarActive = function() {
            if ($location.path() != '/') {
                return true;
            } else {
                return false;
            }
        };
    }])
    .run(['$http', '$templateCache', function($http, $templateCache) {
        $http.get('menu.html').then(
            function(resp) {
                $templateCache.put('menu.html', resp.data);
            },
            function(error) {
                console.log('Error caching menu.html');
            }
        );
    }])
    .animation('.jqslide', [function() {
        return {
            enter: function(element, doneFn) {
                element.css('display', 'none');
                jQuery(element).slideDown('slow', doneFn);
                return function(isCancelled) {
                    element.stop();
                }
            },
            leave: function(element, doneFn) {
                jQuery(element).slideUp('slow', doneFn);
                return function(isCancelled) {
                    element.stop();
                }
            }
        }
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "blank.html"
        })
        .when("/menu", {
            templateUrl: "menu.html"
        })
        .when("/rgbleds", {
            templateUrl: "project.html"
        })
        .when("/webdev", {
            templateUrl: "project.html"
        })
        .when("/iot", {
            templateUrl: "project.html"
        })
        .when("/clmc", {
            templateUrl: "project.html"
        })
        .when("/slam", {
            templateUrl: "project.html"
        })
        .when("/wildwest", {
            templateUrl: "project.html"
        })
        .when("/bluetooth", {
            templateUrl: "project.html"
        })
        .otherwise( {
            redirectTo: "/menu"
        })
    }])

})();