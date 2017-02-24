window.onload = function(){
	var addIdentityButton = document.getElementById('add-identity-button');

	addIdentityButton.addEventListener('click', addIdentity);
};

var addIdentity = function(){
	var identities = document.getElementById('identities');
	var newListItem = document.createElement('li');
	var newName = addName();
	var newAge = addAge();
	var newLocation = addLocation();

	newListItem.appendChild(newName);
	newListItem.appendChild(newAge);
	newListItem.appendChild(newLocation)
	identities.appendChild(newListItem);
};

var addName = function(){
	var newNameInput = document.getElementById('new-name');
	var name = document.createElement('p');
	var rawName = newNameInput.value;

	if (rawName.length > 20) {
		rawName = rawName.substring(0, 19)
	}
	name.innerText = rawName;

	return name;
};

var addAge = function(){
	var newAgeInput = document.getElementById('new-age');
	var age = document.createElement('p');

	age.innerText = newAgeInput.value;

	return age;
};

var addLocation = function(){
	var newLocationInput = document.getElementById('new-location');
	var location = document.getElementById('location');

	location.innerText = newLocationInput.value;

	return location;
};

var changeDate = function(){
	var date = document.getElementById('date');
	var today = new Date(Date.now());

	date.innerText = today.toString();
};



var changeEverything = function(){
	changeName();
	changeAge();
	changeLocation();
	changeDate();
};