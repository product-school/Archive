var newFriendName = function(){
	var nameInput = document.getElementById('friend-name');
	var newNameElement = document.createElement('p');

	newNameElement.innerText = nameInput.value;

	return newNameElement;
};

var newHomeTown = function(){
	var hometownInput = document.getElementById('friend-hometown');
	var newHometownElement = document.createElement('p');

	newHometownElement.innerText = hometownInput.value;

	return newHometownElement;
};

var newFriendMeeting = function(){
	var meetingInput = document.getElementById('friend-meeting');
	var newMeetingElement = document.createElement('p');

	newMeetingElement.innerText = meetingInput.value;

	return newMeetingElement;
};

var resetFields = function(){
	var nameInput = document.getElementById('friend-name');
	var hometownInput = document.getElementById('friend-hometown');
	var meetingInput = document.getElementById('friend-meeting');

	nameInput.value = '';
	hometownInput.value = '';
	meetingInput.value = '';
};

var addNewFriend = function(){
	// prepare our elements
	var friendList = document.getElementById('friend-list');
	var newListItem = document.createElement('li');

	// Create the new elements from the form
	var newName = newFriendName();
	var newHometown = newHomeTown();
	var newMeeting = newFriendMeeting();

	// Add the new data elements to the li element
	newListItem.appendChild(newName);
	newListItem.appendChild(newHometown);
	newListItem.appendChild(newMeeting);

	// Add the li element to the ul
	friendList.appendChild(newListItem);
	resetFields();
};

var deleteAllFriends = function(){
	var friendList = document.getElementById('friend-list');
	var friends = friendList.children;
	var start = friends.length - 1;

	// Assuming we have 3 items in the array...
	// first iteration: i is 2, and we are removing the last element(2)
	// second interation: i is 1, and we are removing the last element(1)
	// third iteration: i is 0, and we are removing the last element(0)
	// for (var i = start; i => 0; i--) {
	// 	console.log(i);
	// 	friendList.removeChild(friends[i]);
	// 	console.log(friends.length);
	// }

	// for (<initial setup> ; <condition> ; <follow up>) {
	for( ; friends.length > 0; ) {
		console.log('removing a friend');
		console.log('Friends before removal: ', friends);
		friendList.removeChild(friends[friends.length - 1]);
		console.log('Friends after removal: ', friends);
		console.log('**********');
	}	

};

window.onload = function(){
	var submitButton = document.getElementById('friend-data-submit');
	var deleteButton = document.getElementById('delete-all-button');

	submitButton.addEventListener('click', addNewFriend);
	deleteButton.addEventListener('click', deleteAllFriends);
};