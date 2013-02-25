if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



 Template.asd.events({
 	'keyup #url' : function(evt) {
 		Pixastic.process($('#toBlur')[0],"blur");
 		if(evt.keyCode == 13){
	 		var query = $('#url').val();
 			Session.set("lastSearch", query);
 			Searches.insert({query: query});
		 	var googleMatcher=/^google /i;		//google search commnad
		 	var hexMatcher=/^#[0123456789abcdef]+$/i;
		 	if(googleMatcher.test(query)){
		 		window.location = 'http://www.google.com/search?q=' + query.substring(7);
			} else if(hexMatcher.test(query)) {
	 			$('body')[0].style['background-color']=query;
	 			$('#url').val("");
			} else {
			 	window.location = query.toLowerCase().replace(/ /g, '-'); 		//Replace "space" to "-"	
			}
		}
 	}
 });

 //Template.lastSearch.lastSearch = function() {
 //	return Session.get("lastSearch");
 //};

 //Template.lastSearch.lastSearches = function() {
 //	return Searches.find();
 //};