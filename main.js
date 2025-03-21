// What is Jason  format : 
// But first you should know the server and client meaning 
// we have two different terminologhy that you guys should know:
// 1. "client-side" refers to actions and code that run on the user's device (like a browser), while "server-side" refers to actions and code that run on a web server. Now what is JSON? (JavaScript Object Notation) is a data format used for exchanging data between clients and servers.
// ****************************************
// we are going to learn about  communication between frontend and backend. not exaclty all the details of server side but what is happening in the middle and the basic knowledge. 
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
// let's convert object to JSON : I have this ability to change these data to eachother
// JSON.stringify() :
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
// now let's do viceversa: 
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
// example : You (Client): The person ordering food (you want something)
// Menu: The list of options you can request (API documentation)
// Waiter (API): Delivers your order to the kitchen and brings back your food
// Kitchen (Server): Prepares the food (data).The waiter is like the API. It connects you (the website or app) to the kitchen (the server), and brings back the result (like data in JSON format).
// now we have a terminology called : fetch() : means go and 'bring' me something
//  now I want to create a JSON file and fetch data form that and show you the meaning of API and JSON 
// ***************************************************** 
// GO ahead and create a JSON file please , in JSON file , is just a format you need to just organize data in that. now let's fetch data from our JSON file : 
