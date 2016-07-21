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

    // Setup our variables which change per event
    self.realDate = new Date("September 6, 2016 18:00 CDT");
    self.mindate = new Date("September 1, 2016");
    self.maxdate = new Date("September 30, 2016");
    self.meetupid = "228904118";

    // Create some easier-to-use dates/times
    self.date = angular.copy(self.realDate);
    self.time = angular.copy(self.realDate);
  }
})();
