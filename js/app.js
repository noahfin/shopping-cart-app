$(document).ready(function(){

$('.big-button').click(function(){
var  toAdd =$('input[name=new-shoe]').val();
$('#msg').append('<li class="item">' + toAdd +  '</li>');




})

});

