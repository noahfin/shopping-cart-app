$(document).ready(function(){

$('.big-button').click(function(){
var  toAdd =$('input[name=new-shoe]').val();
$('#msg').append('<li class="item">' + toAdd +  '</li>');

})

$('ul').on('click', '.item', function(event){
  $(this).remove();

  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
})

$(document).ready(function(){
    $('a.button').click(function(){
        $(this).toggleClass("down");
    });
});



});

