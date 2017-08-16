	$.ajax({
        url: 'https://developers.zomato.com/api/v2.1/search?entity_id=83&count=20',
        type: 'GET',
        dataType: 'json',
        headers: {'user-key' : '431f01f907a85f5013e6102b4452e6ef'}
    })
    .done(function(val) {
        console.log("success");
        console.log(val)
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


// API 431f01f907a8 5f5013e6102b4452e6ef