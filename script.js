$(document).ready(function(){
	
	$('button').on('click', function() {
		var choice = $('input[name="animal"]:checked').val();
		$('#feed').empty()
		displayPosts(choice);
	});
	
	function displayPosts(subreddit) {
		$.get('http://www.reddit.com/r/' + subreddit + '.json').done(function(response){			
			console.log(response);
			response.data.children.forEach(function(i) {
				var image = i.data.thumbnail;
				var title = i.data.title;	
				var author = i.data.author;
				$('#feed').append('<div class="post"><img src=' + image + '>' + '<p id="title">' + title + '</p>' + '<p id="author">' + author + '</p></div>');
			})	
		})	
	}
	
})

