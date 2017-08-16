
	$.ajax({
		url: 'https://developers.zomato.com/api/v2.1/search',
		type: 'GET',
		dataType: 'json',
		entity_id: '83',
		count: '20',
		headers: {'user-key' : '68caa26ae70ec571a32d410254a6c631'}
		
	})
	.done(function(val) {
		console.log("success");
		//console.log(val);
		tasty(val);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	function tasty(val){
		var arr = val.restaurants;
		console.log(arr);
		arr.forEach(function(rest){
			var nameRest = rest.restaurant.name;
			var direcRest = rest.restaurant.location.address;
			var priceRest = rest.restaurant.user_rating.aggregate_rating;
			console.log(nameRest + direcRest + priceRest);

			
		});
	}