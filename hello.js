 // Get a reference to the root of the chat data.

 var type = location.search.substring('?type='.length);



var listing = new Firebase('https://resplendent-fire-8639.firebaseio.com/'+ type);
//internships


listing.on('value', function(snapshot) {

	var internships = snapshot.val();

	var $item = $('.square')

	for(var i = 0; i < internships.length; i++){
		var internship = internships[i];
		
		var $clone = $item.clone();

		$clone.find('.title').text(internship.name);
		$clone.find('.company').text("Company: " + internship.company);
		$clone.find('.location').text("Location: "+internship.location);
		$clone.find('.duration').text("Duration: "+internship.duration);
		$clone.find('.description').text("Description: "+internship.description);

		$('#listing').append($clone);

		$clone.css('display','block');
	}


});

