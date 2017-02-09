// Main module
angular.module('modules',['main','home','mainContent']);

// Sub-modules
angular.module('main',['ui.router']);
angular.module('home',[]);
angular.module('mainContent',['snapscroll']);
