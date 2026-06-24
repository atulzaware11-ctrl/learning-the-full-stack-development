# 🚀 Full Stack Development Journey

Welcome to my **30-40 Days Full Stack Development Journey**.

This repository contains my daily learning, practice projects, assignments, notes, and advanced projects as I progress from beginner to full-stack developer.

---

# 📅 Day 1 – HTML Fundamentals

## 📖 What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language used to create and structure web pages. It defines the structure of a webpage by using elements such as headings, paragraphs, images, links, tables, and forms.

HTML is **not a programming language** because it does not contain programming logic such as loops, conditions, or functions. Instead, it provides the structure that browsers use to display content.

---

## 🌐 Difference Between HTML and HTML5

| HTML                            | HTML5                                             |
| ------------------------------- | ------------------------------------------------- |
| Older version of HTML           | Latest version of HTML                            |
| Limited multimedia support      | Built-in support for audio and video              |
| No semantic elements            | Includes semantic elements                        |
| Required plugins for multimedia | No external plugins required                      |
| Limited browser APIs            | Supports Local Storage, Geolocation, Canvas, etc. |

### Example

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
</video>
```

---

## 🏷️ What are Semantic Tags?

Semantic tags describe the meaning of the content they contain. They improve code readability, accessibility, and Search Engine Optimization (SEO).

### Common Semantic Tags

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

### Benefits

* Better readability
* Better SEO
* Easier maintenance
* Improved accessibility

---

## 📦 Difference Between `<div>` and `<span>`

| `<div>`                    | `<span>`                     |
| -------------------------- | ---------------------------- |
| Block-level element        | Inline element               |
| Starts on a new line       | Stays on the same line       |
| Used for larger sections   | Used for small text portions |
| Takes full available width | Takes only required width    |

### Example

```html
<div>
    <h2>Welcome</h2>
</div>

<p>Hello <span>World</span></p>
```

---

## 🌳 What is the DOM?

**DOM (Document Object Model)** is a tree-like representation of an HTML document created by the browser. It allows JavaScript to access and modify webpage elements dynamically.

### DOM Structure

```text
Document
│
└── html
    ├── head
    └── body
        ├── h1
        └── p
```

### JavaScript Example

```javascript
document.querySelector("h1").textContent = "Hello World";
```

---

## 📄 Purpose of `<!DOCTYPE html>`

The `<!DOCTYPE html>` declaration tells the browser that the document follows the HTML5 standard. It ensures the browser renders the webpage in standards mode.

### Example

```html
<!DOCTYPE html>
<html>
```

---

## 📐 Block-Level vs Inline Elements

### Block-Level Elements

These elements always start on a new line and occupy the full available width.

Examples:

```html
<div>
<h1>
<p>
<section>
```

### Inline Elements

These elements occupy only the space they need and remain on the same line.

Examples:

```html
<span>
<a>
<strong>
<em>
```

---

## 🆔 Difference Between `id` and `class`

| id                        | class                            |
| ------------------------- | -------------------------------- |
| Unique identifier         | Can be reused                    |
| Used for one element      | Used for multiple elements       |
| Selected using `#` in CSS | Selected using `.` in CSS        |
| Only one id per element   | Multiple classes can be assigned |

### Example

```html
<h1 id="title">My Portfolio</h1>

<p class="text">Paragraph One</p>

<p class="text">Paragraph Two</p>
```

---

## 📝 What are HTML Forms?

HTML forms are used to collect user input and send it to a server for processing.

### Common Form Elements

* `<form>`
* `<input>`
* `<label>`
* `<textarea>`
* `<select>`
* `<button>`

### Example

```html
<form>

<label>Name</label>
<input type="text">

<label>Email</label>
<input type="email">

<button type="submit">
Submit
</button>

</form>
```

### Real-World Examples

* Login Form
* Registration Form
* Contact Form
* Feedback Form
* Checkout Form

---

## 🔄 Difference Between GET and POST

| GET                 | POST                                              |
| ------------------- | ------------------------------------------------- |
| Retrieves data      | Sends data                                        |
| Data appears in URL | Data is sent in request body                      |
| Less secure         | More secure                                       |
| Can be bookmarked   | Cannot be bookmarked with submitted data          |
| Used for searching  | Used for login, registration, and form submission |

### GET Example

```text
/search?name=Atul
```

### POST Example

```text
POST /login
```

---

# 📚 Key Concepts Learned

* Understanding how websites work
* Introduction to Frontend, Backend, and Databases
* HTML document structure
* HTML elements and tags
* Semantic HTML
* Block-level and inline elements
* Forms
* DOM basics
* GET and POST requests

---

# 💻 Practical Assignment

Built a personal portfolio homepage containing:

* Name
* Profile photo
* Introduction
* Skills section
* Education details
* Contact form
* Social media links

---

# 🎯 Interview Questions Covered

* What is HTML?
* HTML vs HTML5
* Semantic Tags
* `<div>` vs `<span>`
* DOM
* `<!DOCTYPE html>`
* Block vs Inline Elements
* `id` vs `class`
* HTML Forms
* GET vs POST

---

# 🛠️ Technologies Used

* HTML5
* Visual Studio Code
* Git
* GitHub

---

# 📅 Next Topic

**Day 2 – CSS Fundamentals**

Topics to be covered:

* CSS Introduction
* Selectors
* Colors
* Fonts
* Box Model
* Margin
* Padding
* Borders
* Display Property
* Flexbox
* Responsive Design

---

## 👨‍💻 Author

**Atul Zaware**

B.Tech Computer Engineering Student

Learning Full Stack Development through project-based practice and building real-world applications.
