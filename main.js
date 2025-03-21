// What is Jason  format : 
// But first you should know the server and client meaning 
// we have two different terminologhy that you guys should know:
// 1. "client-side" refers to actions and code that run on the user's device (like a browser), while "server-side" refers to actions and code that run on a web server. Now what is JSON? (JavaScript Object Notation) is a data format used for exchanging data between clients and servers.
// ****************************************
// we are going to learn about  communication between frontend and backend. not exaclty the server side but what is happening in the middle and the basic knowledge. 
// Jason is a text formant used to store and exchange data, it is used everywhere, APIS, configuration files , database , etc. 
// Imagin you are sending data from a website to a server, or from one app to another, Jason is the universal languge that most systems understand. 



// it is very similar to JS object notation. it means it is a collection of key and value pairs, where keys are alwyas string and the value can be any other type.

// now let's create some Jason and object and convert them to eachother  : 
// lets create object : 
const student = { 
    ID: 123456,
    age: 28,
    name : "Binazir",
    isStudent: No,
}
// JSON String 
const studentJSON= {
    "name": "Jacob",
    "age": 40,
    "ID": 123456,
    "isStudent": true
}
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

const bookJSON = JSON.stringify(book);
console.log(bookJSON);