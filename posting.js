var type = location.search.substring('?type='.length);

var listing = new Firebase('https://resplendent-fire-8639.firebaseio.com/'+ type);



$('#submit').click(function(){
	var name = $('#title').val();
var company = $('#company').val();
var location = $('#location').val();
var duration = $('#duration').val();
var description = $('#description').val();

var item = {'name': name,'company':company,'location':location,'duration':duration,'description':description};

//alert(JSON.stringify(item));

var stuff = listing.push();
stuff.set(item);


	return false;


});
