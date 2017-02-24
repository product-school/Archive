// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//
//
var getCharacter = function(id){
    $.get('http://swapi.co/api/people/' + id).then(function(data){
        saveCharacter(data).then(function(charData){
            setupCharacter(charData);
        });
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

var saveCharacter = function(charData){
    var dataToSend = {
        name: charData.name,
        gender: charData.gender,
        skin_color: charData.skin_color
    }

    return $.post('/people', {
        char_data: dataToSend
    })
}

$(function(){
    // getCharacter(1);
    // getCharacter(4);
    // getCharacter(2);
    saveCharacter({
        name: 'Gorden Ramsey',
        gender: 'Male',
        skin_color: 'White but tan'
    })
});
