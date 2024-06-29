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


### 5. is javaScript is single threaded or multithreaded ???

JavaScript is single-threaded, meaning it can execute only one piece of code at a time on a single thread of execution. However, it can leverage asynchronous programming techniques like callbacks, promises, and async/await to manage concurrent operations effectively without blocking the main thread.

Explicit type declaration refers to explicitly stating the data type of a variable or object in a programming language. In statically typed languages like Java or TypeScript, you must declare the type of each variable explicitly when you define it, such as int, String, or boolean. This is in contrast to dynamically typed languages like JavaScript or Python, where variables are not bound to a specific data type at declaration and can hold values of any type during execution.

### 6. is javaScript dynamic type or static type ???

JavaScript is dynamically typed, meaning variables in JavaScript can hold values of any data type without explicit type declarations

### 7.what is passby value and passby reference ???


### 8. what is promises in javaScript ???


### 9. what is the difference between params and elements ???

### 10. what are default params ???

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



# HTML -

### 1. what is symentic elements in html and also tell me the use cases of them ??

Semantic elements in HTML are tags that clearly describe their meaning in a human- and machine-readable way. They provide a structural hierarchy to web documents, making it easier for both browsers and developers to understand the purpose and content of different parts of a webpage. Here are some commonly used semantic elements in HTML5 and their typical use cases:

Common Elements & Use Cases:   
`<header>`: Contains introductory content or navigational links.   
`<nav>`: Defines a set of navigation links.    
`<main>`: Specifies the main content of the document.   
`<section>`: Groups related content into sections.   
`<article>`: Represents self-contained content, like a blog post.  
`<aside>`: Contains tangentially related content, like sidebars.  
`<footer>`: Defines the footer for a document or section.  
`<figure>`: Represents self-contained content, like images or   diagrams.     
`<figcaption>`: Provides a caption for the     
`<figure>` element.   
`<time>`: Represents a specific period in time.         
Benefits:   
Improved Accessibility: Easier navigation for screen readers.     
Better SEO: Search engines understand content better.     
Enhanced Readability: Code is clearer and easier to maintain.    
Consistency: Ensures a consistent structure across web pages.    


### 2. what is tag ??
In HTML, a tag is a predefined element used to define different types of content or specify how content should be displayed on a webpage. Tags are enclosed in angle brackets (< and >), and most tags come in pairs: an opening tag and a closing tag (</>). Opening tags denote the beginning of an element, and closing tags denote the end. Tags can also have attributes that provide additional information about the element, such as class, id, src, etc. They are fundamental building blocks for structuring and styling web pages according to the HTML standard.

### 3.	what is global attribute and give examples of it??

In HTML, global attributes are attributes that can be used with any HTML element, regardless of its specific tag. These attributes provide common functionalities and behaviors that are applicable across different elements. Here are some examples of global attributes:


```html
<!-- 1 -->
<!-- id: Specifies a unique identifier for an element. Example: -->
<div id="main-content">
  <!-- Content goes here -->
</div>

<!-- 2 -->
<!-- class: Specifies one or more classes for an element (used for styling with CSS). Example: -->

<p class="important">This is an important paragraph.</p>


<!-- 3 -->
<!-- style: Specifies inline CSS styles for an element. Example: -->

<span style="color: red; font-size: 16px;">Red text with increased font size.</span>

<!-- 4 -->
<!-- title: Provides a text tooltip when hovering over an element. Example: -->

<img src="image.jpg" alt="Image" title="This is an image description">

<!-- 5 -->
<!-- data-*: Allows embedding custom data attributes that can be used by scripts or CSS. Example: -->

<div data-user-id="12345" data-role="admin">...</div>

<!-- 6 -->
<!-- lang: Specifies the language of the content within an element.
Example: -->

<html lang="en">
  <body>
    <p>This paragraph is in English.</p>
  </body>
</html>


<!-- 7 -->
<!-- tabindex: Specifies the tab order of an element for keyboard navigation. Example: -->

<input type="text" tabindex="1">
<button tabindex="2">Submit</button>

<!-- role: Specifies the role or function of an element in accessibility contexts. Example: -->


<nav role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

Global attributes enhance the flexibility and functionality of HTML elements by allowing developers to apply common attributes across different tags, thereby facilitating consistent behavior and interaction across web pages.


### 4.what is Data Attributes???

if you want to give any data. it is used in javaScript


### 5.state the difference between inline elements and block elements and also state the types of inline elements???

Inline elements and block elements are two fundamental display types in HTML and CSS:

Block Elements:

Definition: Block elements typically start on a new line and occupy the full width available, pushing subsequent elements down.
Examples: `<div>`, `<p>`, `<h1>-<h6>`, `<ul>`,`<ol>`,` <li>.`  
Behavior: They allow setting width, height, margins, paddings, and can contain other block or inline elements.   

Inline Elements:

Definition: Inline elements do not start on a new line and only occupy the necessary width, allowing other elements to sit beside them.  
Examples: `<span>, <a>, <strong>, <em>, <img>, <input>.`  
Behavior: They do not allow setting width, height, margins, or paddings directly, and cannot contain block elements.  
In summary, block elements typically form the structure of a webpage, while inline elements are used for text or small content within block-level elements.

### The types of inline elements:

1.replaced inline elements: that comes from sources  
we can give height and width to it

2.non-replaced inline elements: we can not give hight and width
     

### 6. what is the default value of positions property ??

In CSS, the default value for the position property is static.

Here's a brief explanation of what static positioning entails:

Static Positioning: This is the default positioning for all elements. In this mode, elements are positioned according to the normal flow of the document. They are not affected by the top, bottom, left, and right properties, and they do not overlap other elements.


### 7. what is the difference between absolute and relative ??

absolute :- is refered to the parent,   
relative :- is given to perticular element

### 8. what is the difference between the rem and em ??

rem: related to the 

### 9. what is combinator selector ??