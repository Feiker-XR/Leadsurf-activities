'use strict';
var phonecatApp = angular.module('phonecatApp', ['ui.router', 'phonecatAnimations', 'phonecatControllers', 'phonecatFilters', 'phonecatServices']);
phonecatApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise(router.login);
    $stateProvider.state(router.home, {url: router.home, views:pages.home}).state(router.login, {url: router.login, views:pages.login})
}]);



