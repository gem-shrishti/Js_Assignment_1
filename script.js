console.log('assignment');
(
    function () {                                      // this is self - invoked function
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// now adding and creating data in the first row of table

let row1= document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerHTML="Name";
let heading2 = document.createElement('th');
heading2.innerHTML="Age";
let heading3 = document.createElement('th');
heading3.innerHTML="DOB";
let heading4 = document.createElement('th');
heading4.innerHTML="Email";
let heading5 = document.createElement('th');
heading5.innerHTML = "Company";

// now we will append(insert a new node or reposition an existing node as the last child of a particular parent node.)

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
row1.appendChild(heading5);
thead.appendChild(row1);

// creating and adding data to 2nd row of table
let row2 = document.createElement('tr');
let td1 = document.createElement('td');
let name1 = document.createTextNode("Shrishti Rathore");
let td2 = document.createElement('td');
let age1 = document.createTextNode("21");
let td3 = document.createElement('td');
let dob1 = document.createTextNode('21-11-2000');
let td4 = document.createElement('td');
let  email1 = document.createTextNode("shrishti.singh@gmail.com");
let td5 = document.createElement('td');
let comp1 = document.createTextNode('gemini solutions');
td1.appendChild(name1);
td2.appendChild(age1);
td3.appendChild(dob1);
td4.appendChild(email1);
td5.appendChild(comp1);
row2.appendChild(td1);
row2.appendChild(td2);
row2.appendChild(td3);
row2.appendChild(td4);
row2.appendChild(td5);
tbody.appendChild(row2);

// creating and adding data to 3rd row of table
let row3 = document.createElement('tr');
let td6 = document.createElement('td');
let name2 = document.createTextNode("Sanjeev Rathore");
let td7 = document.createElement('td');
let age2 = document.createTextNode("22");
let td8 = document.createElement('td');
let dob2 = document.createTextNode('21-11-1999');
let td9 = document.createElement('td');
let  email2 = document.createTextNode("sanjeev.rathore@gmail.com");
let td10 = document.createElement('td');
let comp2 = document.createTextNode('gemini solutions');
td6.appendChild(name2);
td7.appendChild(age2);
td8.appendChild(dob2);
td9.appendChild(email2);
td10.appendChild(comp2);
row3.appendChild(td6);
row3.appendChild(td7);
row3.appendChild(td8);
row3.appendChild(td9);
row3.appendChild(td10);
tbody.appendChild(row3);
 
// creating and adding data to 4th row of table
let row4 = document.createElement('tr');
let td11 = document.createElement('td');
let name3 = document.createTextNode("Shriya Singh");
let td12= document.createElement('td');
let age3 = document.createTextNode("21");
let td13 = document.createElement('td');
let dob3 = document.createTextNode('14-12-2000');
let td14 = document.createElement('td');
let  email3 = document.createTextNode("shriya.singh@gmail.com");
let td15 = document.createElement('td');
let comp3 = document.createTextNode('gemini solutions');
td11.appendChild(name3);
td12.appendChild(age3);
td13.appendChild(dob3);
td14.appendChild(email3);
td15.appendChild(comp3);
row4.appendChild(td11);
row4.appendChild(td12);
row4.appendChild(td13);
row4.appendChild(td14);
row4.appendChild(td15);
tbody.appendChild(row4);

// creating and adding data to 4th row of table
let row5 = document.createElement('tr');
let td16 = document.createElement('td');
let name4 = document.createTextNode("Abhinav Pandey");
let td17= document.createElement('td');
let age4 = document.createTextNode("23");
let td18 = document.createElement('td');
let dob4 = document.createTextNode('14-12-1998');
let td19 = document.createElement('td');
let  email4 = document.createTextNode("abhinav.pandey@gmail.com");
let td20 = document.createElement('td');
let comp4 = document.createTextNode('gemini solutions');
td16.appendChild(name4);
td17.appendChild(age4);
td18.appendChild(dob4);
td19.appendChild(email4);
td20.appendChild(comp4);
row5.appendChild(td16);
row5.appendChild(td17);
row5.appendChild(td18);
row5.appendChild(td19);
row5.appendChild(td20);
tbody.appendChild(row5);

// now adding CSS to js
thead.style.fontFamily = " Arial, Helvetica, sans-serif" ;
document.getElementById("body").style.color = "blue";
document.getElementById("body").style.backgroundColor ="rgb(214, 196, 213)";
row1.style.backgroundColor = " rgb(207, 230, 181)";
row2.style.backgroundColor = " rgb(243, 232, 232)";
row3.style.backgroundColor = " rgb(207, 230, 181)";
row4.style.backgroundColor = " rgb(243, 232, 232)";
row5.style.backgroundColor = " rgb(207, 230, 181)";

  })();
