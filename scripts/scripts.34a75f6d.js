'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
var app =
    angular
    .module('project1App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);



app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            views: {
                'mainView': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'mainView': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                }
            }
        })
        .state('schedule', {
            url: '/schedule',
            views: {
                'mainView': {
                    templateUrl: 'views/schedule.html',
                    controller: 'ScheduleCtrl'
                }
            }
        })
        .state('helpdesk', {
            url: '/helpdesk',
            views: {
                'mainView': {
                    templateUrl: 'views/helpdesk.html',
                    controller: 'FaqCtrl'
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'mainView': {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactCtrl'
                }
            }
        })
        .state('careers', {
            url: '/careers',
            views: {
                'mainView': {
                    templateUrl: 'views/careers.html',
                    controller: 'CareerCtrl'
                }
            }
        })/*
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'mainView': {
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardCtrl'
                },
                'dashboardView@dashboard': {
                    templateUrl: 'views/dashboard-main.html',
                    controller: 'DashboardCtrl'
                }
            }
        })*/
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'mainView': {
                    templateUrl: 'views/dashboard/dashboard.html',
                    controller: 'DashboardCtrl'
                },
                'dashboardView@dashboard': {
                    templateUrl: 'views/dashboard/dashboard-inbox.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.schedule', {
            url: '/schedule',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-schedule.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.news', {
            url: '/news',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-news.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('dashboard.ships', {
            url: '/ships',
            views: {
                'dashboardView': {
                    templateUrl: 'views/dashboard/dashboard-ships.html',
                    controller: 'DashboardCtrl'
                }
            }
        });
});
app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.run(['$state', '$route', '$rootScope', '$location', function($state, $route, $rootScope, $location) {
    $state.transitionTo('index');
    var original = $location.path;
    $location.path = function(path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function() {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}]);

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('MainCtrl', function ($scope) {
    $scope.featuredNews = [
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '},
      {img:'images/schedule.jpg',title:'Title of the News',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. '}
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.vessels = [
    	{name: 'Name of Vessel',img:'images/vessel1.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'},
    	{name: 'Name of Vessel',img:'images/vessel2.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'},
    	{name: 'Name of Vessel',img:'images/vessel3.jpg', details: 'Here is some more information about this vessl that is only revealed once clicked on.'}
    ];
  });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:parallax
 * @description
 * # parallax
 */
angular.module('project1App')
  .directive('parallax', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $('#'+attrs.parallax).parallax();
      }
    };
  });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:sideNav
 * @description
 * # sideNav
 */
angular.module('project1App')
  .directive('sideNav', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        $('#'+attrs.id).sideNav();
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:SideNavCtrl
 * @description
 * # SideNavCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('SideNavCtrl', function($scope) {
        $scope.linkList = [{
            link: 'index',
            title: 'Home'
        }, {
            link: 'schedule',
            title: 'Schedule & Price'
        }, {
            link: 'about',
            title: 'About Us'
        }, {
            link: 'helpdesk',
            title: 'Helpdesk'
        }, {
            link: 'contact',
            title: 'Contact Us'
        }, {
            link: 'careers',
            title: 'Careers'
        }, ];
    });

angular.module('project1App')
    .controller('DashboardSideNavCtrl', function($scope) {
        $scope.dashboardLinkList = [ {
            link: 'dashboard',
            title: 'Inbox',
            className: 'dashboard',
            icon: 'inbox'
        }, {
            link: 'dashboard.schedule',
            className: 'dashboard/schedule',
            title: 'Schedule',
            icon: 'event_note'
        }, {
            link: 'dashboard.ships',
            title: 'Ships',
            className: 'dashboard/ships',
            icon: 'directions_boat'
        }, {
            link: 'dashboard.news',
            title: 'News',
            className: 'dashboard/news',
            icon: 'cast'
        }];
    });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:datepicker
 * @description
 * # datepicker
 */
angular.module('project1App')
  .directive('datepicker', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('#'+attrs.id).pickadate({
        	selectMonths: true,
        	selectYears: 30
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('ScheduleCtrl', function ($scope,Schedule) {
    $scope.tableSchedList = Schedule.scheduleList;
  });

'use strict';

/**
 * @ngdoc service
 * @name project1App.faq
 * @description
 * # faq
 * Service in the project1App.
 */
angular.module('project1App')
    .service('Faq', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            faqList: [{
            	id: '0',
                title: 'Sample FAQ1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper elementum massa. Aliquam cursus laoreet dolor, ac ullamcorper diam ullamcorper vestibulum. Etiam risus massa, dapibus a commodo pharetra, imperdiet sit amet metus. Sed finibus, dolor id consectetur porttitor, ante augue pharetra risus, vitae sodales ante enim at lacus. Maecenas pharetra tempus neque, non porta magna tincidunt eget.'
            },
            {
            	id: '1',
                title: 'Sample FAQ2',
                description: 'Aenean tortor urna, volutpat sed rutrum et, aliquet quis ipsum. Nulla sed consectetur nibh. Morbi sit amet ligula iaculis, ultrices turpis id, tempor leo. Sed arcu velit, vehicula at sagittis ac, convallis sit amet felis. Suspendisse efficitur lectus lacus. In porttitor eros metus, ut pellentesque lectus maximus non. Donec non magna nisi. Fusce pretium eleifend purus, id blandit mauris accumsan nec. Duis aliquet eros vel quam auctor vehicula nec pretium turpis.'
            },
            {
            	id: '2',
                title: 'Sample FAQ3',
                description: 'Sed tincidunt mattis sapien, vitae sollicitudin tortor finibus et. Aliquam pharetra lacus vitae luctus porta. Donec turpis odio, molestie eu iaculis sed, venenatis et neque. Duis maximus dapibus ultrices. Donec mollis purus nec libero dignissim, at cursus nisi efficitur. Morbi bibendum mattis arcu, sit amet placerat augue hendrerit ac. Praesent sit amet leo dolor. Suspendisse tempus condimentum euismod. Aenean fringilla aliquam tincidunt. Integer eu pretium arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec fermentum, turpis at fermentum ultrices, arcu neque gravida ligula, in fermentum ex est sit amet lacus. Donec id neque dui. Nullam eu dui non lectus sollicitudin accumsan.'
            },
            {
            	id: '3',
                title: 'Sample FAQ4',
                description: 'Quisque at lobortis erat. Aenean porttitor diam et gravida viverra. Nulla maximus orci sed est lobortis, vitae dictum ligula blandit. Ut ultricies porttitor luctus. Suspendisse eleifend et enim a fermentum. Sed mollis, lacus at hendrerit scelerisque, justo felis aliquam leo, vel semper risus odio vel diam. Phasellus ac sem mi. Morbi in hendrerit lectus. Pellentesque in congue felis. Morbi ac dui nec lacus scelerisque imperdiet ut ac eros. Sed et magna risus. Fusce et enim a nisi semper placerat at eget ante. Fusce eu efficitur diam. Nulla dapibus lectus lorem, ut ultrices ex aliquam in. Quisque laoreet tincidunt erat.'
            },
            {
            	id: '4',
                title: 'Sample FAQ5',
                description: 'Quisque elementum est ac tellus dapibus porttitor. Maecenas lacinia nulla nec lacus iaculis, eget molestie neque porta. Duis malesuada volutpat metus ac rhoncus. Phasellus eget tristique justo. Nullam purus nisi, pellentesque quis leo vel, rhoncus congue metus. Praesent non odio interdum, vulputate justo luctus, maximus risus. Quisque euismod malesuada lorem, at dictum ante fermentum sed. Curabitur in placerat orci, id rhoncus turpis.'
            },
            {
            	id: '5',
                title: 'Sample FAQ6',
                description: 'Aenean eu ex non lectus tincidunt semper nec vitae sem. Phasellus tempor ante rhoncus erat sagittis eleifend. In ac venenatis risus. Aliquam id blandit orci, vitae scelerisque libero. Morbi porttitor in lacus id sodales. Morbi sagittis eros a faucibus accumsan. Aenean at sollicitudin purus. Morbi iaculis porttitor rhoncus. Nunc auctor aliquam lorem.'
            }]
        };

    });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('FaqCtrl', function ($scope, Faq, $filter) {
  		$scope.faqList = Faq.faqList;

  		$scope.changeFaq = function(id){
  			var faq = $filter('filter')(Faq.faqList, {id: id})[0];
  			$scope.title = faq.title;	
  			$scope.desc = faq.description;
  		};
  });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:collapsible
 * @description
 * # collapsible
 */
angular.module('project1App')
    .directive('collapsible', function(Schedule) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                var schedList = Schedule.scheduleList;

                schedList.forEach(function(elem) {
                    var list = $('<li />').append('<div class="collapsible-header"><i class="material-icons">lens</i><span class="boat-name">' + elem.boat + '</span>'+'<span class="boat-route">' + elem.route + '</span>'+'</div>' +
                        '<div class="collapsible-body">'+
                        '<div class="container center">'+
                        	'<h4>Schedule</h4>'+
                        	'<table class="sched-table responsive bordered centered">'+
                        		'<thead>'+
									'<th>Date</th><th>Time</th><th>Approximation</th>'+
                        		'</thead>'+
                        		'<tbody>'+
                        			'<td>'+elem.date+'</td>'+
                        			'<td>'+elem.time+'</td>'+
                        			'<td>'+elem.appro+'</td>'+
                        		'</tbody>'+
                        	'</table>'+
                        	'<h4>Pricing</h4>'+
                        	'<table class="price-table responsive bordered centered">'+
                        		'<thead>'+
									'<th>Regular</th><th>Student</th><th>Senior</th><th>Promo</th>'+
                        		'</thead>'+
                        		'<tbody>'+
                        			'<td>'+elem.reg+'</td>'+
                        			'<td>'+elem.stud+'</td>'+
                        			'<td>'+elem.senior+'</td>'+
                        			'<td>'+elem.promo+'</td>'+
                        		'</tbody>'+
                        	'</table>'+
                        	'</div>'+
                        '</div>');
                    element.append(list);
                });

                $(element).collapsible();
            }
        };
    });

'use strict';

/**
 * @ngdoc service
 * @name project1App.schedule
 * @description
 * # schedule
 * Service in the project1App.
 */
angular.module('project1App')
    .service('Schedule', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            scheduleList: [{
                boat: 'B1',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B2',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B3',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B4',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }, {
                boat: 'B5',
                date: '2015-07-02',
                time: '1:00PM',
                appro: '2hrs',
                route: 'Lucena',
                reg: '100',
                stud: '80',
                senior: '70',
                promo: '30'
            }]
        };
    });
/*
Regular Daily Schedule
Lucena - Balanacan
2:30 Am
10:30 am
3:30 pm
11:30 pm


Bal - Luc
6:30am
11:30am
2:30pm
7:30pm




Fare
Regular 260php
Student 221php
Senior citizen 186php
Half-fare 130php
Discounted Rate 208php
Super Promo 50php

*/
'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:CareerCtrl
 * @description
 * # CareerCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('CareerCtrl', function ($scope, $filter) {
    $scope.careerList = [
     	{id: '0',title:'Career 1',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '1',title:'Career 2',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '2',title:'Career 3',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '3',title:'Career 4',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'},
     	{id: '4',title:'Career 5',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor risus eu neque varius auctor. Cras non sollicitudin justo. Suspendisse pretium laoreet quam vitae ultrices. Donec augue lectus, sodales vitae ante id, pulvinar viverra purus. Suspendisse vel enim nunc. Morbi sed placerat ex. Nunc sit amet auctor quam.'}
    ];
    $scope.title = $scope.careerList[0].title;
    $scope.desc = $scope.careerList[0].desc;  
    $scope.changeCareer = function(id){
  			var career = $filter('filter')($scope.careerList, {id: id})[0];
  			$scope.title = career.title;	
  			$scope.desc = career.desc;
  		};
  });

/*global $:false*/
/*jshint camelcase: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:materialSelect
 * @description
 * # materialSelect
 */
angular.module('project1App')
  .directive('materialSelect', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $(element).material_select();
      }
    };
  });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:slider
 * @description
 * # slider
 */
angular.module('project1App')
  .directive('slider', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
       	$(element).slider();
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('IndexCtrl', function($scope, $location) {
        $scope.hideDiv = true;
        $scope.$on('$locationChangeStart', function() {
            /*console.log($location.path().indexOf('dashboard'));*/
            $scope.hideDiv = (($location.path().indexOf('dashboard') > -1) ? true : false);
        });
    });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('DashboardCtrl', function($scope,$location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        };
        $scope.inboxList = [{
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }];
        $scope.careerList = [{
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }, {
            name: 'Lorem Ipsum',
            email: 'loreem@ipsum.com',
            number: '09123456789',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'Career 1'
        }];
        $scope.schedList = [{
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 1',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 2',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 3',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 4',
            reg: '100',
            stud: '80',
            sen: '70'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            time: '1:00PM',
            appro: '2hrs',
            route: 'Route 5',
            reg: '100',
            stud: '80',
            sen: '70'
        }];
        $scope.shipList = [{
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x (161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }, {
            img: 'images/vessel1.jpg',
            name: 'B1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            dimen: '(1,201 ft) x  161 ft) x 15.2 metres (50 ft).'
        }];

        $scope.newsList = [{
            id: 0,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 1,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 2,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 3,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, {
            id: 4,
            img: 'images/schedule.jpg',
            headline: 'Lorem Ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Dolor et',
            date: 'July 19, 2015'
        }, ];
    });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('project1App')
  .directive('dropdown', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $(element).dropdown();
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('ContactCtrl', function () {

  });

/*global $: false*/
'use strict';

/**
 * @ngdoc directive
 * @name project1App.directive:modal
 * @description
 * # modal
 */
angular.module('project1App')
  .directive('modal', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
      	$(element).leanModal();
      }
    };
  });
