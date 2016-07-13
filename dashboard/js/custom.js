
// custom js files 

  /* auto complete form fields */

 
  var options = {
    data: [ {name: "Book of Denzen", type: "James Butler", icon: "http://lorempixel.com/100/50/transport/2"},
      {name: "Fundamentals of jQuery", type: "Ray Jay", icon: "http://lorempixel.com/100/50/transport/8"},
      {name: "Angular JS 2", type: "Daniel James", icon: "http://lorempixel.com/100/50/transport/10"},
      {name: "AngularJS", type: "Raymond", icon: "http://lorempixel.com/100/50/transport/1"}],

    getValue: "name",

    template: {
      type: "description",
      fields: {
        description: "type"
      }
    }
  };

  $("#basics").easyAutocomplete(options);

  $('.easy-autocomplete-container').on('click', function(){

    $('#bookTitle').children('input').val('Fundamentals of jQuery');
    $('#categories').children('input').val('Fundamentals');
    $('#price').children('input').val(100);

  }); 

  // search page item active 

  $('.itemDescriptionAndReviews ul a').on('click', function(e){
    e.preventDefault();
  })

  $('.itemDescriptionAndReviews ul li a').on('click', function(){
    $('.itemDescriptionAndReviews ul li a').removeClass('activateStatus')
    $(this).addClass('activateStatus');
  });

