# 📅 Day 4 – CSS Advanced & Mini Project

## 🎯 Learning Objectives

By the end of Day 4, you will be able to:

* Understand CSS Variables (Custom Properties)
* Learn CSS Pseudo-elements
* Learn CSS Shadows
* Understand CSS Gradients
* Learn CSS Transform
* Learn CSS Transition
* Learn CSS Animation
* Understand Overflow and Cursor properties
* Build a Responsive Profile Card

---

# 1️⃣ CSS Variables (Custom Properties)

CSS Variables allow you to store reusable values that can be used throughout your stylesheet.

## Syntax

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
}

button {
    background-color: var(--primary-color);
}
```

### Advantages

* Reusable
* Easy to update
* Cleaner code
* Useful for themes
* Reduces repetition

---

# 2️⃣ CSS Pseudo-elements

Pseudo-elements style specific parts of an element.

## `::before`

Adds content before an element.

```css
h1::before {
    content: "👋 ";
}
```

**Output**

```
👋 Welcome
```

---

## `::after`

Adds content after an element.

```css
h1::after {
    content: " 🚀";
}
```

**Output**

```
Welcome 🚀
```

---

## `::first-letter`

Styles only the first letter.

```css
p::first-letter {
    font-size: 40px;
    color: red;
}
```

---

## `::first-line`

Styles only the first line.

```css
p::first-line {
    font-weight: bold;
}
```

---

# 3️⃣ Box Shadow

Adds a shadow around an element.

```css
.card {
    box-shadow: 0px 5px 10px gray;
}
```

## Syntax

```css
box-shadow:
horizontal-offset
vertical-offset
blur-radius
spread-radius
color;
```

### Example

```css
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
```

---

# 4️⃣ Text Shadow

Adds a shadow to text.

```css
h1 {
    text-shadow: 2px 2px 5px gray;
}
```

---

# 5️⃣ CSS Gradients

Gradients create smooth color transitions.

## Linear Gradient

```css
background: linear-gradient(to right, blue, purple);
```

---

## Radial Gradient

```css
background: radial-gradient(circle, red, yellow);
```

---

# 6️⃣ CSS Transform

The `transform` property changes the appearance or position of an element.

## Scale

```css
transform: scale(1.2);
```

Enlarges the element.

---

## Rotate

```css
transform: rotate(45deg);
```

Rotates the element.

---

## Translate

```css
transform: translateX(100px);
```

Moves the element horizontally.

---

## Skew

```css
transform: skew(20deg);
```

Tilts the element.

---

# 7️⃣ CSS Transition

Makes property changes smooth.

```css
button {
    transition: 0.3s;
}

button:hover {
    transform: scale(1.1);
}
```

Common transition properties:

* transition-property
* transition-duration
* transition-delay
* transition-timing-function

---

# 8️⃣ CSS Animation

Animations occur automatically using `@keyframes`.

```css
@keyframes bounce {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-20px);
    }
}

.box {
    animation: bounce 1s infinite alternate;
}
```

## Animation Properties

* animation-name
* animation-duration
* animation-delay
* animation-iteration-count
* animation-direction
* animation-timing-function

---

# 9️⃣ Overflow

Controls content that exceeds its container.

```css
overflow: hidden;
overflow: scroll;
overflow: auto;
overflow: visible;
```

| Value   | Description                      |
| ------- | -------------------------------- |
| visible | Default value                    |
| hidden  | Hides overflowing content        |
| scroll  | Always shows scrollbars          |
| auto    | Adds scrollbars only when needed |

---

# 🔟 Cursor Property

Changes the mouse cursor.

```css
cursor: pointer;
cursor: not-allowed;
cursor: wait;
cursor: grab;
```

Common cursor values:

* pointer
* default
* wait
* text
* move
* grab
* not-allowed

---

# 🛠 Mini Project – Responsive Profile Card

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card">
    <img src="assets/profile.jpg" alt="Profile">
    <h2>Atul Zaware</h2>
    <p>Computer Engineering Student</p>

    <button>Contact Me</button>
</div>

</body>
</html>
```

---

## CSS

```css
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #74ebd5, #ACB6E5);
    font-family: Arial, sans-serif;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    width: 300px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-10px);
}

img {
    width: 120px;
    border-radius: 50%;
}

button {
    background: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #2980b9;
    transform: scale(1.05);
}
```

---

# 📝 Day 4 Practice Tasks

Complete the following:

* Create a card using `box-shadow`.
* Add rounded corners using `border-radius`.
* Apply a linear gradient background.
* Use `::before` and `::after` on a heading.
* Add a hover animation to a button.
* Create a bouncing box using `@keyframes`.
* Use CSS Variables for colors.
* Build the Responsive Profile Card.

---

# 📖 Interview Questions

1. What are CSS Variables?
2. What are pseudo-elements?
3. What is the difference between pseudo-classes and pseudo-elements?
4. What is the difference between `box-shadow` and `text-shadow`?
5. What are CSS Gradients?
6. What is the difference between `linear-gradient` and `radial-gradient`?
7. What is the `transform` property?
8. What is the difference between `transform` and `transition`?
9. What is CSS Animation?
10. What is `@keyframes`?
11. What is the purpose of the `overflow` property?
12. What are the different values of `overflow`?
13. What is the `cursor` property?
14. What is the purpose of CSS Variables in large projects?

---

# 🎯 Goal for Day 4

By the end of Day 4, you will have a strong understanding of advanced CSS styling techniques and complete a polished **Responsive Profile Card** project using:

* CSS Variables
* Pseudo-elements
* Shadows
* Gradients
* Transforms
* Transitions
* Animations
* Overflow
* Cursor Property

This will prepare you for **📅 Day 5 – JavaScript Basics**, where you'll begin adding interactivity to your web pages.

---

# ✅ Day 4 Summary

You learned:

* ✔ CSS Variables
* ✔ Pseudo-elements
* ✔ Box Shadow
* ✔ Text Shadow
* ✔ CSS Gradients
* ✔ Transform
* ✔ Transition
* ✔ Animation
* ✔ Overflow
* ✔ Cursor Property
* ✔ Responsive Profile Card Project

**Next Topic:** 🚀 **Day 5 – JavaScript Basics**
