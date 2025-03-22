// What is Jason  format : 
// But first you should know the server and client meaning 
// we have two different terminologhy that you guys should know:
// 1. "client-side" refers to actions and code that run on the user's device (like a browser), while "server-side" refers to actions and code that run on a web server. Now what is JSON? (JavaScript Object Notation) is a data format used for exchanging data between clients and servers.
// ****************************************
// we are going to learn about  communication between frontend and backend. not exaclty all the details of server side but what is happening in the middle.
// Jason is a text formant used to store and exchange data, it is used everywhere, APIS, configuration files , database , etc. 
// Imagin you are sending data from a website to a server, or from one app to another, Jason is the universal languge that most systems understand. 



// it is very similar to JS object notation. it means it is a collection of key and value pairs, where keys are alwyas string and the value can be any other type.

// now let's create some Jason and object and convert them to eachother  : 
// lets create object : 
const student = { 
    ID: 123456,
    age: 28,
    name : "Binazir",
    isStudent: false,
}
// JSON String 
const studentJSON= `{
    "name": "Jacob",
    "age": 40,
    "ID": 123456,
    "isStudent": true
}`
//look at the differences : 
// json keys and strings must be in double quotes. 
// Json is a string not a JS object

const book = {
    title: "Harry Potter",
    author: {
        firstName: "J.K.",
        lastName: "Rowling"
    },
    genres: ["Fantasy", "Adventure"],
    available: true
};
// now we can convert between JSON and JS Objects. 
// let's convert object to JSON 
// JSON.stringify() :
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
// now Jason to Object
// JSON.parse() : JSON string to Object 
const personObj = JSON.parse(studentJSON);
console.log(personObj);
console.log(personObj.name);
console.log(personObj.age);
// hopefully that make sense for everyone.
// now depend on where you get data so you can change the format into what you need and what you like 
// *****************************************************
// Now what is API ? 
// API stands for Application Programming Interface.
// But don't worry about the fancy words—an API is just a way for one program (like a website) to ask another program (like a server) for data.
// imagin you are at the restaurant 
// example : You (Client): The person ordering food (you want something)
// Menu: The list of options you can request (API documentation)
// Waiter (API): Delivers your order to the kitchen and brings back your food
// Kitchen (Server): Prepares the food (data).The waiter is like the API. It connects you (the website or app) to the kitchen (the server), and brings back the result (like data in JSON format).
// now we have a terminology called : fetch() : means go and 'bring' me something
//  now I want to create a JSON file and fetch data form that and show you the meaning of API and JSON 
// ***************************************************** 
// now lets create a JSON here in our JS file and the read the data inot our table . imagine if I have an array of object and I want to showcase the data in the table:
const dataToRead = [
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publishedYear": 1937,
      "genres": ["Fantasy", "Adventure"],
      "available": true
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "publishedYear": 1949,
      "genres": ["Dystopian", "Political Fiction"],
      "available": false
    }
  ]
//   loop

for (let i = 0; i < dataToRead.length ; i++){
    // setup table
    const table = document.getElementById("tableData");
    const tableRow = table.insertRow(-1);
    // set cells
    const cell1 = tableRow.insertCell(0);
    const cell2 = tableRow.insertCell(1);
    const cell3 = tableRow.insertCell(2);
    // p\populate te cells 
    cell1.innerHTML = dataToRead[i].title;
    cell2.innerHTML = dataToRead[i].author;
    cell3.innerHTML = dataToRead[i].publishedYear;
}
  

// now I want to call my data from another file called book.json
// we have to use  fetch 
fetch('book.json')//we ask a server for data. server now is my book.json
.then(response => response.json())//server sends back a response, but not is a format that we can directly use it. we need to use response.json() which is a built-in method that extract the JSON data and converts it into a JS object 
.then(data => console.log(data)); //now allows us to use the JSON data.

// now you want to get data from book.JSON into your table . 

// ********************
fetch('book.json')
    .then(response => response.json()) // Convert JSON response to JavaScript object
    .then(data => {
        const table = document.getElementById("bookTable");
        for (let i = 0; i < data.length; i++){
            const book = data[i];//get each user object
            const tableRow = table.insertRow(); // Insert new row

            // Insert cells with data
            const cell1 = tableRow.insertCell(0);
            const cell2 = tableRow.insertCell(1);
            const cell3 = tableRow.insertCell(2);
            // const cell4 = tableRow.insertCell(3);
            // const cell5 = tableRow.insertCell(4);

            cell1.textContent = book.title;
            cell2.textContent = book.author;
            cell3.textContent = book.publishedYear;
            // cell4.textContent = book.genres.join(", "); // Convert array to comma-separated string
            // cell5.textContent = book.available ? "✅ Available" : "❌ Not Available"; // Display boolean as text
        }
    })
  

// let's create a table from a real API : we will use a public API 
// if you are going to use an API you should have the bagivese URL 
// there are some extension you can add to your brower to help you read the json file better and one of them is JSON viewer it will format it for you.
https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?pli=1

// publice API documentation 
// https://www.sfu.ca/outlines/help/api.html

// there are some Public API you can use and you do not need to sign up for their services.
// https://jsonplaceholder.typicode.com/users
// you will see a bunch of JSON 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
// .then(data=>console.log(data))
// let's display data in out table 
.then(users=>{
    const table = document.getElementById("placeholderJson");
  
        for (let i = 0; i < users.length; i++){
            const user = users[i];// get each user object---I want to create a variable and call it book and data[i] is the array we get from book.json- indeed I want to select one book object from that array during each loop iteration.
            const tableRow = table.insertRow(); // Insert new row

            // Insert cells with data
            const cell1 = tableRow.insertCell(0);
            const cell2 = tableRow.insertCell(1);
            const cell3 = tableRow.insertCell(2);
            // const cell4 = tableRow.insertCell(3);
            // const cell5 = tableRow.insertCell(4);

            cell1.textContent = user.name;
            cell2.textContent = user.username;
            cell3.textContent = user.email;
        }
})

// now let's talk about async functions: this code above usually works, but if things get complex we need to wait for data from server, and JS will run without wating , then we need to make sure our code is ready for all situations: 
// in this way we will use async/await to help us pause the code and wait for the response, so we can write it in a way that looks like normal code. 
// now instead of using fetch .then .then I am going to use 
async function getJson(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');//This waits for the API to respond before moving on.
    const data = await response.json();//Waits for the JSON to be converted into a JS object.
    console.log(data);

}
getJson();
async function loadUsersIntoTable() {
    
      // 1. Fetch the data
      const response = await fetch('https://jsonplaceholder.typicode.com/users');//This waits for the API to respond before moving on.
      const users = await response.json();//Waits for the JSON to be converted into a JS object.
  
      // 2. Get the table
      const table = document.getElementById("asyncTable");

  
      // 4. Loop through users and add rows
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const row = table.insertRow();
  
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
  
        cell1.textContent = user.name;
        cell2.textContent = user.username;
        cell3.textContent = user.email;
      }
    
  }
  
  // 5. Call the function
  loadUsersIntoTable();
  