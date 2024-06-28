# JavScript 

### 1. Can u tell me the difference between truthy values and falsey values and give me the examples??

Truthy and Falsey Values    
In programming, truthy values are values that evaluate to true in a boolean context, while falsey values are values that evaluate to false.

Truthy Values  
Non-zero numbers: 42, -1  
Non-empty strings: "Hello", 'a'  
Non-empty containers: [1, 2, 3], {"key": "value"}, (1, 2), {1, 2, 3}   
Objects and Functions: {} (JavaScript), function() {} (JavaScript), lambda x: x (Python)     


Falsey Values   
Zero: 0, 0.0   
Empty strings: "", ''    
Empty containers: [], {}, (), set()     
Special values: None (Python), null (JavaScript), False, NaN    (JavaScript), undefined (JavaScript)


Examples in Code
```python
# Truthy
if 42: print("Truthy")
# Falsey
if not 0: print("Falsey")
```

```javascript
Copy code
// Truthy
if (42) console.log("Truthy");
// Falsey
if (!0) console.log("Falsey");
```


### 2. why we need DOM is javaScript is a part of Dom??

The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript is commonly used to interact with the DOM to make web pages dynamic and interactive.    

### Why We Need the DOM

•	Dynamic Content: Modify HTML content on the fly.   
•	Interactivity: Handle user inputs and events (e.g., clicks, form submissions).   
•	Style Manipulation: Change CSS styles dynamically.   
•	Content Retrieval: Access and use content from the web page. 

### Is JavaScript a Part of the DOM?
JavaScript itself is not part of the DOM, but it is the primary language used to interact with and manipulate the DOM.

### 3. what is Json and when or where we use json??

`JSON (JavaScript Object Notation)` is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is used primarily to `transmit data between a server and a web application`.   
`Key Features`            
•	`Format`: Text format that uses key-value pairs.  
•	`Structure`: Data is organized in `objects` (curly braces {}) and arrays (square brackets []).   
•	`Language Independent` : Although it originates from JavaScript, it is language-independent and supported by many programming languages.   
`JSON` is used primarily for data interchange between servers and web applications or different parts of an application. Here are some common use cases:         

### Use Cases  

1.	`APIs`: JSON is widely used for data exchange in web APIs (RESTful APIs) to transmit data between a client and a server.   
2.	`Configuration Files`: JSON is used in configuration files for applications and services.   
3.	`Data Storage`: Some databases, like MongoDB, use JSON-like formats (BSON) to store data.
4.	`Data Serialization`: JSON is used to serialize and deserialize data objects for storage or transmission.
5.	`Web Applications`: Front-end and back-end communication often use JSON to send and receive data.    
`Example`   

```javascript
// ` 1.Fetching Data from an API` 
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// 2Configuration File 
{
  "database": {
    "host": "localhost",
    "port": 3306,
    "username": "user",
    "password": "password"
  },
  "features": {
    "enableFeatureX": true,
    "maxItems": 100
  }
}
// 3Data Storage 
{
  "name": "Alice",
  "age": 28,
  "email": "alice@example.com",
  "favorites": {
    "color": "blue",
    "food": "pizza"
  }
}
```

### 4.What is Hoisting ??

## Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. However, only the `declarations are hoisted, not the initializations.`

Example:    
```javascript

console.log(x); // Output: undefined
var x = 5;

// In this example, the variable x is hoisted to the top of its scope during compilation. Therefore, the console.log(x) statement does not cause an error, but x is undefined until it is assigned a value later in the code.
```
### Key Points:  
`Variables`: Only the declaration (var, let, const) is hoisted, not the initialization.          
`Functions`: Function declarations are fully hoisted, including their definitions.
`Scope`: Hoisting occurs within the scope of the function or global scope, not block scope (for let and const).

# Questions based on the code snippet

## What will be the Output ??

```javaScript

// 1 

let a 
console.log(a)

// answer-
// undifined

// 2

console.log(a)
let a

// answer-
// Uncaught 
// ReferenceError: Cannot access 'a' before initialization -
// To know the reason check hoisting part

// 3

console.log(name)
let name

// answer 
// Uncaught 
// ReferenceError: Cannot access 'a' before initialization -

// 4.

console.log(name)
var name

// answer
// ""
// that is empty string. because the scope of the var is global

// 5.

console.log(name)
const name

// answer
// Uncaught SyntaxError: Missing initializer in const declaration

// 6
console.log(name)
var name="abhishek"

// answer-
// abhishek
// and even if u referesh the tab so many times it will always give the same string unless you change the value or closes the window
// because the var has a global scope. 
```


