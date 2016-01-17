var poopMyScoop = angular.module('poopMyScoop', ['ui.router', 'editorControllers']);

poopMyScoop.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('state-editor', {
      url: '/',
      templateUrl: 'assets/partials/_editor.html',
      controller: 'editorMarkdownController'
    })
}])

// poopMyScoop.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/index');
//   $stateProvider
//     .state('state-editor', {
//       url: '/index',
//       template: '<div> This is just the test</div>',
//     })
// }]);

// poopMyScoop.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('interceptor');
// }]);

// poopMyScoop.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
// }]);
 
//  