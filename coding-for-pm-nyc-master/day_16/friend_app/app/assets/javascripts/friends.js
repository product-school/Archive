var newFriendName = function(){
	// var nameInput = document.getElementById('friend-name');
	// var newNameElement = document.createElement('p');
	var $nameInput = $('#friend-name');
	var $newNameElement = $('<p></p>');

	// newNameElement.innerText = nameInput.value;
	$newNameElement.text($nameInput.val()).addClass('name');

	return $newNameElement;
};

var newHomeTown = function(){
	// var hometownInput = document.getElementById('friend-hometown');
	// var newHometownElement = document.createElement('p');
	var $hometownInput = $('#friend-hometown');
	var $newHometownElement = $('<p></p>');

	// newHometownElement.innerText = hometownInput.value;
	$newHometownElement.text($hometownInput.val()).addClass('hometown')

	return $newHometownElement;
};

var newFriendMeeting = function(){
	// var meetingInput = document.getElementById('friend-meeting');
	// var newMeetingElement = document.createElement('p');
	var $meetingInput = $('#friend-meeting');
	var $newMeetingElement = $('<p></p>');

	// newMeetingElement.innerText = meetingInput.value;
	$newMeetingElement.text($meetingInput.val()).addClass('meeting');

	return $newMeetingElement;
};

var resetFields = function(){
	// var nameInput = document.getElementById('friend-name');
	// var hometownInput = document.getElementById('friend-hometown');
	// var meetingInput = document.getElementById('friend-meeting');

	// nameInput.value = '';
	// hometownInput.value = '';
	// meetingInput.value = '';

	$('#friend-name').val('');
	$('#friend-hometown').val('');
	$('#friend-meeting').val('');
};

var addNewFriend = function(){
	// prepare our elements
	// var friendList = document.getElementById('friend-list');
	// var newListItem = document.createElement('li');
	var $friendList = $('#friend-list');
	var $newListItem = $('<li></li>')

	// Create the new elements from the form
	var $newName = newFriendName();
	var $newHometown = newHomeTown();
	var $newMeeting = newFriendMeeting();

	// Add the new data elements to the li element
	$newListItem.append($newName);
	$newListItem.append($newHometown);
	$newListItem.append($newMeeting);

	// Add the li element to the ul
	$friendList.append($newListItem);
	resetFields();
};

var deleteAllFriends = function(){
	// var friendList = document.getElementById('friend-list');
	// var friends = friendList.children;
	// var start = friends.length - 1;

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
	// for( ; friends.length > 0; ) {
	// 	console.log('removing a friend');
	// 	console.log('Friends before removal: ', friends);
	// 	friendList.removeChild(friends[friends.length - 1]);
	// 	console.log('Friends after removal: ', friends);
	// 	console.log('**********');
	// }	

	$friendList = $('#friend-list');
	// $friendList.children().each(function(idx){
		// console.log('Removing element ' + idx + ': ', this);
		// $(this).remove();
	// });

	$friendList.children().remove();
};

$(function(){
	// var submitButton = document.getElementById('friend-data-submit');
	var deleteButton = document.getElementById('delete-all-button');
	var $submitButton = $('#friend-data-submit');

	// submitButton.addEventListener('click', addNewFriend);
	deleteButton.addEventListener('click', deleteAllFriends);

	// $submitButton.on('click', addNewFriend)
	$submitButton.click(addNewFriend);
});