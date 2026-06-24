# 📅 Day 2 – CSS Basics Interview Questions

## 1. What is CSS?

**Answer:**

**CSS (Cascading Style Sheets)** is a stylesheet language used to control the appearance and layout of HTML elements. It allows developers to style webpages by changing colors, fonts, spacing, positioning, and responsiveness.

**Example:**

```css
h1 {
    color: blue;
}
```

**Interview Tip:**

> CSS is used to style and design HTML webpages.

---

## 2. What are the three ways to add CSS to HTML?

### Answer

There are three ways to apply CSS to an HTML document:

### 1. Inline CSS

CSS is written inside the HTML element using the `style` attribute.

```html
<h1 style="color: red;">Hello</h1>
```

### 2. Internal CSS

CSS is written inside the `<style>` tag inside the `<head>` section.

```html
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
```

### 3. External CSS

CSS is written in a separate `.css` file and linked to the HTML document.

```html
<link rel="stylesheet" href="style.css">
```

**Interview Tip:**

> External CSS is the most preferred method because it separates styling from HTML and improves maintainability.

---

## 3. What is the difference between Inline, Internal, and External CSS?

| Inline CSS                     | Internal CSS                   | External CSS                                    |
| ------------------------------ | ------------------------------ | ----------------------------------------------- |
| Written inside an HTML element | Written inside a `<style>` tag | Written in a separate `.css` file               |
| Affects one element            | Affects one webpage            | Can style multiple webpages                     |
| Hard to maintain               | Better than inline             | Best for large projects                         |
| Highest priority               | Medium priority                | Lowest priority (unless specificity changes it) |

---

## 4. What is a CSS Selector?

**Answer:**

A CSS selector is used to select HTML elements so that styles can be applied to them.

### Element Selector

```css
h1 {
    color: blue;
}
```

### Class Selector

```css
.text {
    color: green;
}
```

### ID Selector

```css
#title {
    color: red;
}
```

### Universal Selector

```css
* {
    margin: 0;
}
```

---

## 5. What is the difference between ID and Class Selectors?

| ID                   | Class                      |
| -------------------- | -------------------------- |
| Unique               | Reusable                   |
| Starts with `#`      | Starts with `.`            |
| Used for one element | Used for multiple elements |
| Higher specificity   | Lower specificity          |

### Example

```html
<h1 id="title">Welcome</h1>

<p class="text">Paragraph One</p>
<p class="text">Paragraph Two</p>
```

```css
#title {
    color: blue;
}

.text {
    color: green;
}
```

---

## 6. Explain the CSS Box Model.

**Answer:**

Every HTML element is treated as a rectangular box consisting of four parts:

1. **Content** – The actual text or image.
2. **Padding** – Space between the content and border.
3. **Border** – The line around the padding.
4. **Margin** – Space outside the border.

```text
Margin
┌─────────────────────────┐
│        Border           │
│  ┌───────────────────┐  │
│  │      Padding      │  │
│  │  ┌─────────────┐  │  │
│  │  │   Content   │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

---

## 7. What is the difference between Margin and Padding?

| Margin                            | Padding                               |
| --------------------------------- | ------------------------------------- |
| Space outside the border          | Space inside the border               |
| Creates distance between elements | Creates space around content          |
| Background color does not apply   | Background color extends into padding |

### Example

```css
div {
    margin: 20px;
    padding: 15px;
}
```

---

## 8. What is the `display` Property?

**Answer:**

The `display` property controls how an HTML element is displayed on the webpage.

### Common Values

```css
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;
```

---

## 9. What is the difference between Block and Inline Elements?

| Block Elements                        | Inline Elements                         |
| ------------------------------------- | --------------------------------------- |
| Start on a new line                   | Stay on the same line                   |
| Take full available width             | Take only required width                |
| Can contain block and inline elements | Usually contain text or inline elements |

### Block Examples

```html
<div></div>
<p></p>
<h1></h1>
```

### Inline Examples

```html
<span></span>
<a></a>
<strong></strong>
```

---

## 10. What is the purpose of the `:hover` Pseudo-Class?

**Answer:**

The `:hover` pseudo-class applies styles when the mouse pointer is placed over an element.

### Example

```css
button:hover {
    background-color: blue;
    color: white;
}
```

---

## 11. What is `border-radius`?

**Answer:**

The `border-radius` property creates rounded corners on HTML elements.

### Example

```css
button {
    border-radius: 10px;
}
```

To create a perfect circle:

```css
border-radius: 50%;
```

---

## 12. What is the difference between HEX and RGB Colors?

| HEX                    | RGB                        |
| ---------------------- | -------------------------- |
| Starts with `#`        | Uses `rgb()`               |
| Example: `#3498db`     | Example: `rgb(52,152,219)` |
| Six hexadecimal digits | Three numbers (0–255)      |

### Example

```css
color: #3498db;
```

```css
color: rgb(52,152,219);
```

---

## 13. What is the difference between `display: none` and `visibility: hidden`?

| `display: none`                     | `visibility: hidden`                  |
| ----------------------------------- | ------------------------------------- |
| Removes the element from the layout | Hides the element but keeps its space |
| Other elements move into its place  | Layout remains unchanged              |

---

## 14. Why is External CSS Preferred in Large Projects?

**Answer:**

External CSS is preferred because it:

* Keeps HTML clean and organized.
* Can style multiple webpages with one file.
* Improves maintainability.
* Promotes code reusability.
* Makes teamwork easier.
* Improves performance through browser caching.

---

## 15. What are Pseudo-Classes in CSS?

**Answer:**

Pseudo-classes define the special state of an element.

### Common Examples

```css
a:hover
input:focus
li:first-child
button:active
```

### Example

```css
button:hover {
    background-color: green;
}
```

---

## 16. What is a Class and an Object?

> **Note:** This is an Object-Oriented Programming (OOP) concept, not a CSS concept.

### What is a Class?

A **class** is a blueprint used to create objects. It defines properties and methods.

### Example (JavaScript)

```javascript
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    start() {
        console.log("Car Started");
    }
}
```

### What is an Object?

An **object** is an instance of a class with actual values.

```javascript
const car1 = new Car("Toyota", "Red");
const car2 = new Car("Honda", "Black");
```

**Real-Life Example:**

* **Class:** Blueprint of a house.
* **Object:** The actual house built from the blueprint.

---

# 📌 Quick Interview Revision

| Question                                 | One-Line Answer                                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| What is CSS?                             | CSS is a stylesheet language used to style HTML webpages.                                   |
| Three ways to add CSS?                   | Inline, Internal, and External CSS.                                                         |
| CSS Selector?                            | A pattern used to select HTML elements for styling.                                         |
| `id` vs `class`?                         | `id` is unique, while `class` is reusable.                                                  |
| CSS Box Model?                           | Content, Padding, Border, and Margin.                                                       |
| Margin vs Padding?                       | Margin is outside the border; Padding is inside.                                            |
| Display Property?                        | Controls how an element is displayed.                                                       |
| Block vs Inline?                         | Block starts on a new line; Inline stays on the same line.                                  |
| `:hover`?                                | Styles an element when the mouse is over it.                                                |
| `border-radius`?                         | Creates rounded corners.                                                                    |
| HEX vs RGB?                              | Two different ways to represent colors.                                                     |
| `display: none` vs `visibility: hidden`? | `display: none` removes the element; `visibility: hidden` hides it while keeping its space. |
| Why External CSS?                        | Better maintainability, reusability, and performance.                                       |
| Pseudo-classes?                          | Style elements in special states like `:hover` and `:focus`.                                |
| Class (OOP)?                             | A blueprint used to create objects.                                                         |
| Object (OOP)?                            | An instance of a class containing actual data.                                              |
