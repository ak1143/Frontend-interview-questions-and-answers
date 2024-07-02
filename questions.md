
# HTML && CSS -

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

In CSS, the default value for the position property is `static`.

Here's a brief explanation of what static positioning entails:

`Static Positioning`: This is the default positioning for all elements. In this mode, elements are positioned according to the normal flow of the document. They are not affected by the top, bottom, left, and right properties, and they do not overlap other elements.


### 7. what is the difference between absolute and relative ??

absolute :- is refered to the parent,   
relative :- is given to perticular element

### 8. what is the difference between the rem and em ??

rem: related to the 

### 9. what is combinator selector ??


### 10. what is specificity ???

`priority given to the selectors`

In CSS, specificity is a set of rules that determines which style declarations are applied to an element. When multiple declarations could apply to the same element, specificity helps the browser decide which ones take `precedence`. Specificity is calculated based on the types of selectors used in a rule:

`Inline styles` (e.g., style="..." in the HTML) have the highest specificity.                           
`IDs` (e.g., #header) have a higher specificity than classes, attributes, and pseudo-classes.    
`Classes `(e.g., .menu), attributes (e.g., [type="text"]), and pseudo-classes (e.g., :hover) have a higher specificity than elements and pseudo-elements.    
`Elements` (e.g., div) and pseudo-elements (e.g., ::before) have the lowest specificity.
Specificity is usually represented by four levels (a, b, c, d):

a: Inline styles (1 or 0)  
b: Number of ID selectors   
c: Number of class, attribute, and pseudo-class selectors 
d: Number of element and pseudo-element selectors  
When comparing specificity, each level is compared one by one, starting from the highest level. For example:

#header has a specificity of (0, 1, 0, 0)   
.menu has a specificity of (0, 0, 1, 0)              
div has a specificity of (0, 0, 0, 1)   
Therefore, `#header` would take precedence over `.menu,` and `.menu` would take precedence over `div.`

Here’s an example:

```html

<!DOCTYPE html>
<html>
<head>
    <style>
        div {
            color: blue; /* Specificity: (0,0,0,1) */
        }
        .menu {
            color: red; /* Specificity: (0,0,1,0) */
        }
        #header {
            color: green; /* Specificity: (0,1,0,0) */
        }
        #header .menu div {
            color: black; /* Specificity: (0,1,1,1) */
        }
    </style>
</head>
<body>
    <div id="header" class="menu">
        <div>Some text</div>
    </div>
</body>
</html>
```
In this example, the text "Some text" will be black because #header .menu div has the highest specificity (0,1,1,1).

### 11. what is difference between position relative and position absolute ??


The difference between position: relative and position: absolute in CSS is based on how they position elements in relation to other elements:

`position: relative:`

Positions the element relative to its normal position in the document flow.
The element still occupies space in the layout as if it were not positioned.
Offsets (top, right, bottom, left) move the element from its normal position, but other elements around it are not affected.

`position: absolute:`

Positions the element relative to its nearest positioned ancestor (an ancestor with position: relative, absolute, or fixed).
If no such ancestor exists, it positions relative to the initial containing block (usually the <html> element).
The element is removed from the normal document flow, so it does not affect the position of other elements, and other elements will be positioned as if the absolutely positioned element does not exis

### 12. Suppose we have the div with CSS property display:flex then we define span tag with content hello inside it now the quesion is can we give height and width to the span ??

Yes , we can give height and width to the span because the `span is a child of div which is block level elment` so the child inline element automatically becomes the block element hence we can give the height and width to the `span`

### 13. what is Box model in CSS ??

The CSS Box Model is a fundamental concept that describes how elements are structured and spaced in a web page. It consists of four parts:  

`Content`: The actual content of the box, such as text or images.
`Padding`: The space between the content and the border, inside the box.
`Border`: The line surrounding the padding (and content) of the box.
`Margin`: The space outside the border, separating the box from other elements.   

Here's a visual representation of the Box Model:
```lua
+-------------------------------+
|           Margin              |
|  +-------------------------+  |
|  |         Border          |  |
|  |  +-------------------+  |  |
|  |  |     Padding       |  |  |
|  |  |  +-------------+  |  |  |
|  |  |  |   Content   |  |  |  |
|  |  |  +-------------+  |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```
`Content`: The core area where the content is displayed.  
`Padding`: Creates space around the content, within the border.  
`Border`: Encapsulates the padding and content.  
`Margin`: Creates space between the border and other elements. 

### 14. what is difference between content box and box sizing ??

`content-box (default)`:

`Width/height` include only the content.   
`Padding and border` are added outside the specified `width/height.`   

`box-sizing: border-box:`

`Width/height`include content, padding, and border.
Total size stays within the specified `width/height`. 

Example:
```css

/* Default (content-box) */
.element {
  width: 100px; /* Only content */
  padding: 10px; /* Adds to width */
  border: 5px solid; /* Adds to width */
}

/* border-box */
.element {
  box-sizing: border-box;
  width: 100px; /* Includes content, padding, and border */
  padding: 10px;
  border: 5px solid;
}
```

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

### 11. what is spread operator and rest operator ???

The `spread operator` and `rest operator` are both features introduced in ES6 (ECMAScript 2015) that use the same syntax: three consecutive dots (...). However, they serve different purposes depending on the context in which they are used.   

`Spread Operator`  
The spread operator is used to expand elements of an iterable (like an array or a string) into individual elements. It can also be used to spread properties of an object into another object.

Examples:
```javaScript

// In Arrays:

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// In Objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }


// In Function Calls:

const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3

```
`Rest Operator`   
The rest operator is used to collect multiple elements into a single array or object. It is primarily used in function parameter definitions to handle a variable number of arguments.

Examples:

```javaScript 

// In Function Parameters:

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6


// In Array Destructuring:

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4]

// In Object Destructuring:

const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);    // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }
```

In summary, the spread operator (...) is used to unpack elements, while the rest operator (...) is used to pack elements into an array or object. The context in which the ... is used determines whether it acts as a spread or rest operator.


### 12. what is shadowing effect ??

Shadowing in programming refers to the practice where a variable declared within a certain scope (like a function or a block) has the same name as a variable declared in an outer scope. The inner variable "shadows" the outer variable, meaning that within the inner scope, the outer variable is inaccessible or "hidden."

Examples in JavaScript

`Variable Shadowing:`

```javascript

let x = 10;

function example() {
  let x = 20; // This x shadows the outer x
  console.log(x); // Output: 20
}

example();
console.log(x); // Output: 10
```
In this example, the variable x declared inside the example function shadows the variable x declared in the outer scope. Inside the function, the x with the value 20 is used, and outside the function, the x with the value 10 is used.

`Block Scope Shadowing:`

```javascript 

let y = 5;

if (true) {
  let y = 10; // This y shadows the outer y
  console.log(y); // Output: 10
}

console.log(y); // Output: 5
```
Here, the variable y inside the if block shadows the y in the outer scope. 

Shadowing with var, let, and const
var: Variables declared with var are function-scoped, so shadowing within the same function does not happen. However, var can still shadow variables in outer functions.
let and const: Variables declared with let and const are block-scoped, so shadowing can occur within blocks (like inside an if statement, loop, or function).

`Function Parameters:`

```javascript

let z = 30;

function example(z) { // The parameter z shadows the outer z
  console.log(z); // Output: value passed to the function
}

example(40);
console.log(z); // Output: 30
```
In this case, the function parameter z shadows the outer variable z.


###  13. why we need js for webDevelopment ???

JavaScript is essential for web development because it enables `interactive` and `dynamic functionality` on websites. Here are key reasons in short:    

`Interactivity`: Enhances user engagement with elements like forms, buttons, and animations.                  
`Dynamic Content`: Updates content without reloading the page using technologies like AJAX.   
`Client-Side Validation`: Validates user input on the client side, improving user experience.  
`Enhanced User Interface`: Powers features like dropdown menus, sliders, and modal windows.    
`Asynchronous Operations`: Allows for background tasks and fetching data from servers without disrupting the user experience.    
`Rich Web Applications`: Essential for frameworks/libraries like React, Angular, and Vue.js, enabling complex single-page applications (SPAs).   
Overall, JavaScript is crucial for creating modern, responsive, and user-friendly web experiences.
  

### 14. Data types in js???


JavaScript has several data types, which can be categorized into two main groups: primitive types and reference types.

`Primitive Types`:`7`   
`1.Number`: Represents both integer and floating-point numbers.  
`Example`: 42, 3.14  
`2.String`: Represents sequences of characters.  
`Example`: "Hello", 'World'  
`3.Boolean`: Represents logical values.  
`Example`: true, false  
`4.Undefined`: Indicates a variable that has been declared but not assigned a value.   
`Example`: let x; // x is undefined    
`5.Null`: Represents the intentional absence of any object   value.  
`Example`: let y = null;  
`6.Symbol`: Represents a unique and immutable identifier.   
`Example`: let sym = Symbol();    
`7.BigInt`: Represents whole numbers larger than the Number type can safely store.  
`Example`: let bigInt = 9007199254740991n;  
`Non-primitive Types:`  
`1.Object`: Collections of key-value pairs.  
`Example`: let obj = { name: 'Alice', age: 25 };  
`2.Array`: Ordered lists of values.  
`Example`: let arr = [1, 2, 3];  
`3.Function`: Blocks of code that can be invoked.   
`Example`: function greet() { console.log('Hello'); }   
`4.Date`: Represents dates and times.  
`Example`: let date = new Date();   
These types help in structuring and manipulating data effectively in JavaScript.

### 15. What is difference between slice and splice ??

`slice()`  
`Purpose`: Creates a shallow copy of a portion of an array.   
`Syntax`: array.slice(start, end)  
`Mutates Original Array: No`  
Example:  
```javascript
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3); // [2, 3]
```
`splice()`  
`Purpose`: Adds/removes elements to/from an array.  
`Syntax`: array.splice(start, deleteCount, item1, item2, ...)  
`Mutates Original Array: Yes`  
Example:
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4, 5]
```

### 16. what is DOM ??

DOM stands for `Document Object Model`. It is a `programming interface` for web documents that represents the structure of `HTML or XML` documents as a tree of objects. Here's a brief overview: 

`Purpose`: Provides a structured representation of the document, allowing programs to manipulate the `content, structure, and style dynamically`.     
`Tree Structure`: Represents elements, attributes, and text as nodes in a hierarchical tree.      
`Interaction`: JavaScript can interact with the DOM to update, create, or delete elements, respond to events, and modify styles or content dynamically.   
`Platform-agnostic`: Supported by `browsers` and provides a standardized way to access and manipulate web page content.   
In essence, `the DOM bridges the gap between web page content and scripts, enabling dynamic and interactive web experiences.`  



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






# React:-

### 1. what is difference between useState and useRef ??
