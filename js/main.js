$(document).ready(function () {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: false,
      navigationPosition: 'right',
      scrollingSpeed: 900,
      keyboardScrolling: true,
      fadingEffect: true,
  
      anchors: ['home', 'about', 'services', 'contact'],
      afterLoad: function (origin, destination, direction) {
        const loadedSection = this;
  
        // Using jQuery to add class to the loaded section
        $(loadedSection).addClass('fade-in');
      },
      onLeave: function (origin, destination, direction) {
        const leavingSection = this;
  
        // Using jQuery to remove class from the leaving section
        $(leavingSection).removeClass('fade-in');
      }
      
  
    });
  
  });