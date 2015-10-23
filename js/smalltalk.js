(function() {
  // Define our module
  angular.module('smalltalk', ['ngMaterial'])

    // Configure our app/theme
    .config(function($mdThemingProvider) {
      /*
      $mdThemingProvider.definePalette('smalltalkPalette', {
        //'50': 'ffebee',
        //'100': 'ffcdd2',
        //'200': 'ef9a9a',
        //'300': 'e57373',
        //'400': 'ef5350',
        '500': '93160B',
        //'600': 'e53935',
        //'700': 'd32f2f',
        //'800': 'c62828',
        //'900': 'b71c1c',
        //'A100': 'ff8a80',
        //'A200': 'ff5252',
        //'A400': 'ff1744',
        //'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
          '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
      });

      $mdThemingProvider.theme('default')
        .primaryPalette('smalltalkPalette');
        */

      $mdThemingProvider.theme('default')
        .primaryPalette('red', {
          default: '900'
        })
        .accentPalette('grey', {
          default: '50'
        });
    })

    // Setup our controllers
    .controller('EventController', EventController);

  function EventController() {
    var self = this;

    var realDate = new Date("November 17, 2015 18:00 CST");

    self.date = angular.copy(realDate);
    self.time = angular.copy(realDate);
    self.mindate = new Date("November 1, 2015");
    self.maxdate = new Date("November 30, 2015");
  }
})();
