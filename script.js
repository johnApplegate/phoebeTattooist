// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   console.dir(elems);
//   var instances = M.Sidenav.init(elems);
// });

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// console.dir(collapsibleElem);
// var collapsibleInstance = M.Collapsible.init(collapsibleElem);
// console.dir(collapsibleInstance);

// Or with jQuery
$(document).ready(function(){
  $('.sidenav').sidenav();
});
      

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello');
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});
