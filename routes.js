function initialize(app){

	//These are the API end points that you can write.

	//Setting up an event listener for GET request to '/'
	app.get('/', function(req, res) {
		console.log('request to / received');
    res.render('index.html');
	});
}

exports.initialize = initialize;
