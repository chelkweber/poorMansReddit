$(document).ready(function(){
	
	$.get('http://www.reddit.com/r/rarepuppers.json').done(function(response){	
		console.log(response);
	})
	
	$('.subreddit').click(function(e) {
		$(e.target).children('.check').toggleClass('checked');
		console.log(e.target);
		
	})
	
	$('button').on('click', function() {
		var choice = $('input[name="animal"]:checked').val();
		$('#feed').empty()
		displayPosts(choice);
	});
	
	function displayPosts(subreddit) {
		$.get('http://www.reddit.com/r/' + subreddit + '.json').done(function(response){			
			console.log(response[0]);
			var feed = response.data.children.splice(1, 12);
			feed.forEach(function(i) {
				var image = i.data.thumbnail;
				var title = i.data.title;	
				var author = i.data.author;
				var url = i.data.url;
				$('#feed').append('<div class="post"><a class="link" href=' + url + '><img src=' + image + '></a><p class="title">' + title + '</p>' + '<p class="author">' + author + '</p></div>');
				$('.link').attr('target', '_blank');
				})
			})	
		}
})

