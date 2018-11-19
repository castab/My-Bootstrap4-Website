(function () {
    angular.module('app', ['ngAnimate', 'ngRoute'])
    .controller('mainCtrl', function($scope, $http, $timeout, $location) {

        vm = this;
        vm.exists = true;
        vm.buttonClicked = false;
        vm.projectData = null;
        vm.introComplete = false;

        vm.click = function() {
            vm.exists = !vm.exists;
            vm.buttonClicked = !vm.buttonClicked;
        }
        vm.clickStart = function() {
            vm.introComplete = true;
            $location.path('/menu')
            vm.exists = true;
            vm.buttonClicked = false;
            vm.introComplete = false;
        }

        $http.get('navigate.json').then(
            function(resp) {
                vm.projectData = resp.data.projects;
            },
            function (error) {
                console.log("error getting data")
            }
        )


    })
    .controller('navbarCtrl', function($location) {
        vm = this;
        vm.isNavbarActive = function() {
            if ($location.path() != '/') {
                return true;
            } else {
                return false;
            }
        }
    })
    .run(function($http, $templateCache) {
        $http.get('menu.html').then(
            function(resp) {
                $templateCache.put('menu.html', resp.data);
            },
            function(error) {
                console.log('Error caching menu.html');
            }
        )
    })
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
    .animation('.menuBurger', [function() {
        return {
            enter: function(element, doneFn) {
                element.css('display', 'none');
                jQuery(element).slideDown('fast', doneFn);
                return function(isCancelled) {
                    element.stop();
                }
            },
            leave: function(element, doneFn) {
                jQuery(element).slideUp('fast', doneFn);
                return function(isCancelled) {
                    element.stop();
                }
            }
        }
    }])
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "blank.html"
        })
        .when("/menu", {
            templateUrl: "menu.html"
        })
    })

})();