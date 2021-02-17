

let headers = ['Title', 'BoxOffice', 'Active', 'DateofLaunch', 'Genre', 'HasTeaser'];
var movie = [{ id: '1', Title: 'Avatar', BoxOffice: '$2,787,965,087', Active: 'yes', DateofLaunch: '15/03/2017', Genre: 'Science Fiction', HasTeaser: 'yes' },
{ id: '2', Title: 'The Avengers', BoxOffice: '$1,518,812,988', Active: 'yes', DateofLaunch: '23/12/2017', Genre: 'Superhero', HasTeaser: 'no' },
{ id: '3', Title: 'Titanic', BoxOffice: '$2,187,463,944', Active: 'yes', DateofLaunch: '21/08/2017', Genre: 'Romance', HasTeaser: 'no' },
{ id: '4', Title: 'Jurassic World', BoxOffice: '$1,671,713,208', Active: 'no', DateofLaunch: '02/07/2017', Genre: 'Science Fiction', HasTeaser: 'yes' },
{ id: '5', Title: 'Avengers: End Game', BoxOffice: '$2,750,760,348', Active: 'yes', DateofLaunch: '02/11/2022', Genre: 'Superhero', HasTeaser: 'yes' }];


function movie_admin() {


    for (var i = 0; i < movie.length; i++) {
        var table = document.getElementById("t1");

        newRow = table.insertRow(i + 1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell6 = newRow.insertCell(5);
        cell7 = newRow.insertCell(6);
        cell1.innerHTML = movie[i].Title;
        cell2.innerHTML = movie[i].BoxOffice;
        cell3.innerHTML = movie[i].Active;
        cell4.innerHTML = movie[i].DateofLaunch;
        cell5.innerHTML = movie[i].Genre;
        cell6.innerHTML = movie[i].HasTeaser;
        localStorage.setItem("id", movie[i].id);
        cell7.innerHTML = '<a href="edit-movie.html">Edit</a>';

    }
}



function Customer() {


    for (var i = 0; i < movie.length - 2; i++) {
        var table = document.getElementById("t1");

        newRow = table.insertRow(i + 1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell1.innerHTML = movie[i].Title;
        cell2.innerHTML = movie[i].BoxOffice;
        cell3.innerHTML = movie[i].Genre;
        cell4.innerHTML = movie[i].HasTeaser;
        localStorage.setItem("id", movie[i].id);
        cell5.innerHTML = '<a href="movie-list-customer-notification.html">Add to Favorites</a>';

    }
}




function favorites() {


    for (var i = 0; i < movie.length - 2; i++) {
        var table = document.getElementById("t1");

        newRow = table.insertRow(i + 1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell1.innerHTML = movie[i].Title;
        cell2.innerHTML = movie[i].BoxOffice;
        cell3.innerHTML = movie[i].Genre;
        localStorage.setItem("id", movie[i].id);
        cell4.innerHTML = '<a href="favorites-notification.html">Delete</a>';

    }
}




function favorites_notification() {


    for (var i = 0; i < movie.length - 3; i++) {
        var table = document.getElementById("t1");

        newRow = table.insertRow(i + 1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell1.innerHTML = movie[i].Title;
        cell2.innerHTML = movie[i].BoxOffice;
        cell3.innerHTML = movie[i].Genre;
        localStorage.setItem("id", movie[i].id);
        cell4.innerHTML = '<a href="favorites-notification.html">Delete</a>';

    }
}

function Customer_notification() {


    for (var i = 0; i < movie.length - 2; i++) {
        var table = document.getElementById("t1");

        newRow = table.insertRow(i + 1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        cell1.innerHTML = movie[i].Title;
        cell2.innerHTML = movie[i].BoxOffice;
        cell3.innerHTML = movie[i].Genre;
        cell4.innerHTML = movie[i].HasTeaser;
        localStorage.setItem("id", movie[i].id);
        cell5.innerHTML = '<a href="movie-list-customer-notification.html">Add to Favorites</a>';

    }
}

function validateForm() {
   
    var x = document.forms["myform"]["Title"].value;
    var y = document.forms["myform"]["Gross"].value;
    var z = document.forms["myform"]["DateofLaunch"].value;
   
    if (x == "") {
        alert("title field must be filled");
        return false;
    }
    if (x.length < 2 || x.length > 100) {
        alert("The length of field is 2 to 100");
        return false;
    }
    if (y == "") {
        alert("boxoffice field must be filled");
        return false;
    }
    if (z == "") {
        alert("date field must be filled");
        return false;
    }

}
function movieedit() {
    document.getElementById("Title").value = movie[4].Title;
    document.getElementById("Gross").value = movie[4].BoxOffice;
    document.getElementById("DateofLaunch").value = movie[4].DateofLaunch;
}


