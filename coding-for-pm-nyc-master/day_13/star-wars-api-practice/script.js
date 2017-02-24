var getCharacter = function(id){
	$.get('http://swapi.co/api/people/' + id).then(function(data){
		setupCharacter(data);
	});
}

var setupCharacter = function(charData){
	var newEl = $('<li></li>');
	var charName = $('<p></p>').text(charData.name);
	newEl.append(charName);
	newEl.append($('<p></p>').text(charData.gender))
	newEl.append($('<p></p>').text(charData.skin_color))

	$.get(charData.homeworld).then(function(homeworldData){
		newEl.append($('<p></p>').text(homeworldData.name))
	})

	$('#characters').append(newEl)
};

$(function(){
	getCharacter(1);
	getCharacter(4);
	getCharacter(2);
});