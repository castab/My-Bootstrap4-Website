(function () {
    angular.module('app', ['ngAnimate', 'ngRoute'])
    .controller('mainCtrl', function($scope, $http, $timeout) {

        vm = this;
        vm.exists = true;
        vm.buttonClicked = false;
        vm.click = function() {
            vm.exists = !vm.exists;
            vm.buttonClicked = !vm.buttonClicked;
        }


    })
    .animation('.jqslide', [function() {
        return {
            enter: function(element, doneFn) {
                element.css('display', 'none');
                jQuery(element).slideDown('slow', doneFn);
                return function(isCancelled) {
                    element.stop();
                    vm.landingButtonText = "Let's get started!"
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
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "test.html"
        })
    })

})();