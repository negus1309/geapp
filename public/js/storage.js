var mystorage = localStorage;

if(navigator.onLine){
  $.getJSON( "../app/data/commissions.json", function( data ) {
    console.log(data)
    localStorage.setItem('commissions', JSON.stringify(data));
  });


}
