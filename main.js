// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//isAdmin ========================================

const { KeyObject } = require("crypto");

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }else{
        return false;
    }
}

//getEmail =======================================

function getEmail(user){
    return user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';
}

//getPlaylistLength ==============================
function getPlaylistLength (key){
    return key.songs.length;
}

//getHardestHomework =============================
function getHardestHomework (homework){
    if(homework.length === 0){
        return '';
    }
    homework.sort(function(a,b){
        return a.averageScore - b.averageScore;
    });
    

    return homework[0].name;
}

//createPhonebook ================================
function createPhonebook(name, number){
    let arr = {};
    for(i = 0 ; i < name.length; i++){
        arr[name[i]] = number[i].toString();
    }
    return arr;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};