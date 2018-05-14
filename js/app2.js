'use strict';

/* globals allLocations */

var t = document.querySelector('#header-row');
var td = t.content.querySelectorAll('td');

// Function to create table header

var createHeaderRow = function(){
    td[0].textContent = '';
    td[1].textContent = allLocations[0].hours[0];
    td[2].textContent = allLocations[0].hours[1];
    td[3].textContent = allLocations[0].hours[2];
    td[4].textContent = allLocations[0].hours[3];
    td[5].textContent = allLocations[0].hours[4];
    td[6].textContent = allLocations[0].hours[5];
    td[7].textContent = allLocations[0].hours[6];
    td[8].textContent = allLocations[0].hours[7];
    td[9].textContent = allLocations[0].hours[8];
 
    // Clone the new row and insert it into the table
    var tb = document.querySelector('thead');
    var clone = document.importNode(t.content, true);
    tb.appendChild(clone);
  
};

// Function to total up columns - sales across all locations

let salesByLocation1000 = 0;
let salesByLocation1100 = 0;
let salesByLocation1200 = 0;
let salesByLocation1300 = 0;
let salesByLocation1400 = 0;
let salesByLocation1500 = 0;
let salesByLocation1600 = 0;
let salesByLocation1700 = 0;
let salesByLocation1800 = 0;


let allLocationsSales1000 = function(){
    for(var allSales = 0; allSales < allLocations.length; allSales++)
        salesByLocation1000 += allLocations[allSales].salesPerHour1000,
        salesByLocation1100 += allLocations[allSales].salesPerHour1100,
        salesByLocation1200 += allLocations[allSales].salesPerHour1200,
        salesByLocation1300 += allLocations[allSales].salesPerHour1300,
        salesByLocation1400 += allLocations[allSales].salesPerHour1400,
        salesByLocation1500 += allLocations[allSales].salesPerHour1500,
        salesByLocation1600 += allLocations[allSales].salesPerHour1600,
        salesByLocation1700 += allLocations[allSales].salesPerHour1700,
        salesByLocation1800 += allLocations[allSales].salesPerHour1800;
};

// Function to create table footer

t = document.querySelector('#footer-row');
td = t.content.querySelectorAll('td');

var createFooterRow = function(){
    td[0].textContent = 'TOTALS';
    td[1].textContent = salesByLocation1000;
    td[2].textContent = salesByLocation1100;
    td[3].textContent = salesByLocation1200;
    td[4].textContent = salesByLocation1300;
    td[5].textContent = salesByLocation1400;
    td[6].textContent = salesByLocation1500;
    td[7].textContent = salesByLocation1600;
    td[8].textContent = salesByLocation1700;
    td[9].textContent = salesByLocation1800;

    // Clone the new row and insert it into the table
    var tf = document.querySelector('tfoot');
    var clone2 = document.importNode(t.content, true);
    tf.appendChild(clone2);
};

// Function to create table rows for body

t = document.querySelector('#body-rows');
td = t.content.querySelectorAll('td');

var createLocationRows = function(){
    for(var i = 0; i < allLocations.length; i++) {
        td[0].textContent = allLocations[i].location;
        td[1].textContent = allLocations[i].salesPerHour1000;
        td[2].textContent = allLocations[i].salesPerHour1100;
        td[3].textContent = allLocations[i].salesPerHour1200;
        td[4].textContent = allLocations[i].salesPerHour1300;
        td[5].textContent = allLocations[i].salesPerHour1400;
        td[6].textContent = allLocations[i].salesPerHour1500;
        td[7].textContent = allLocations[i].salesPerHour1600;
        td[8].textContent = allLocations[i].salesPerHour1700;
        td[9].textContent = allLocations[i].salesPerHour1800;

        // Clone the new row and insert it into the table
        var tb = document.querySelector('tbody');
        var clone = document.importNode(t.content, true);
        tb.appendChild(clone);

    }
};

// Function calls (to all above) to render complete table

createHeaderRow();
createLocationRows();
allLocationsSales1000();
createFooterRow();
