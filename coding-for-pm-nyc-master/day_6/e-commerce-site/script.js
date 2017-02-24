window.onload = function() {
	console.log('loading in window.onload');
	var cupcakeContainer = document.getElementById('cupcakes-container');
	var vanillaButton = document.getElementById('vanilla-button');


	console.log(cupcakeContainer.style.backgroundColor);
	cupcakeContainer.style.backgroundColor = 'red';
	console.log(cupcakeContainer.style.backgroundColor);

	//cupcakeContainer.addEventListener('click', changeContainerHTML);
	vanillaButton.addEventListener('click', updateVanillaButton);

};

var updateVanillaButton = function(){
	var vanillaButton = document.getElementById('vanilla-button');
	var vanillaMessage = document.getElementById('vanilla-message');
	var total = prompt('How many do you want to buy?');

	vanillaMessage.innerText = 'Bought ' + total;
	vanillaButton.style.display = 'none';
};

var changeContainerHTML = function(){
	var html = prompt('What HTML do you want?')
	var cupcakeContainer = document.getElementById('cupcakes-container');
	cupcakeContainer.innerHTML = html;
};

var changeColor = function(color){
	console.log('changeColor is being called')
	var cupcakeContainer = document.getElementById('cupcakes-container');
	cupcakeContainer.style.backgroundColor = color;
}

var changeColorToBlue = function(){
	changeColor('blue');
};

var changeHeight = function(height){
	console.log('height is being changed');
	var cupcakeContainer = document.getElementById('cupcakes-container');
	cupcakeContainer.style.height = height;
}

var changeHeightAndFont = function(height, fontSize){
	var cupcakeContainer = document.getElementById('cupcakes-container');
	console.log('Setting height to ' + height + ' pixels')
	cupcakeContainer.style.height = height + 'px';
	cupcakeContainer.style.fontSize = fontSize + 'px';
}

var alertTrigger = function(){
	alert('alert! alert! alert!')
};

