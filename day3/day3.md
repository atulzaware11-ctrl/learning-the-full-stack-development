# 📅 Day 3 – CSS Layout & Responsive Design Interview Questions

## 1. What is Flexbox?

**Answer:**

Flexbox (Flexible Box Layout) is a one-dimensional CSS layout model used to arrange elements in rows or columns. It makes it easy to align, distribute, and resize items within a container.

**Example:**

```css
.container {
    display: flex;
}
```

---

## 2. Why is Flexbox used?

**Answer:**

Flexbox is used to:

* Align elements horizontally and vertically.
* Create responsive layouts.
* Distribute space evenly between items.
* Reduce the need for floats and positioning.

---

## 3. What is the difference between Flexbox and CSS Grid?

| Flexbox                                  | CSS Grid                             |
| ---------------------------------------- | ------------------------------------ |
| One-dimensional layout                   | Two-dimensional layout               |
| Works with rows or columns               | Works with rows and columns together |
| Best for navigation bars, cards, buttons | Best for complete webpage layouts    |

---

## 4. What is `justify-content`?

**Answer:**

`justify-content` aligns flex items along the **main axis** (usually horizontal).

**Example:**

```css
.container {
    display: flex;
    justify-content: center;
}
```

Common values:

* flex-start
* center
* flex-end
* space-between
* space-around
* space-evenly

---

## 5. What is `align-items`?

**Answer:**

`align-items` aligns flex items along the **cross axis** (usually vertical).

**Example:**

```css
.container {
    display: flex;
    align-items: center;
}
```

---

## 6. What is `flex-direction`?

**Answer:**

It specifies the direction of flex items.

Values:

* row
* row-reverse
* column
* column-reverse

**Example:**

```css
.container {
    flex-direction: column;
}
```

---

## 7. What is the purpose of the `gap` property?

**Answer:**

The `gap` property adds spacing between flex or grid items without using margins.

**Example:**

```css
.container {
    gap: 20px;
}
```

---

## 8. What are Media Queries?

**Answer:**

Media Queries allow different CSS styles to be applied based on screen size or device type, making websites responsive.

**Example:**

```css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```

---

## 9. What is Responsive Design?

**Answer:**

Responsive Design is a web design approach that ensures a website looks good and works properly on desktops, laptops, tablets, and mobile phones.

It uses:

* Flexible layouts
* Flexible images
* Media Queries
* Relative units

---

## 10. What is the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning?

| Position | Description                                                    |
| -------- | -------------------------------------------------------------- |
| static   | Default position                                               |
| relative | Moves relative to its normal position                          |
| absolute | Positioned relative to the nearest positioned ancestor         |
| fixed    | Fixed relative to the browser window                           |
| sticky   | Behaves like relative until a scroll point, then becomes fixed |

---

## 11. What is the difference between `px`, `%`, `em`, `rem`, `vw`, and `vh`?

| Unit | Description                         |
| ---- | ----------------------------------- |
| px   | Fixed pixel value                   |
| %    | Percentage of parent element        |
| em   | Relative to parent font size        |
| rem  | Relative to root (`html`) font size |
| vw   | 1% of viewport width                |
| vh   | 1% of viewport height               |

---

## 12. What is `z-index`?

**Answer:**

`z-index` controls the stacking order of overlapping elements.

Higher values appear in front of lower values.

**Example:**

```css
.box {
    position: relative;
    z-index: 10;
}
```

---

## 13. What is the purpose of the `transition` property?

**Answer:**

The `transition` property creates smooth animations when a CSS property changes.

**Example:**

```css
button {
    transition: 0.3s;
}
```

---

## 14. What is the difference between `transform` and `transition`?

| Transform                       | Transition                             |
| ------------------------------- | -------------------------------------- |
| Changes an element's appearance | Makes the change smooth                |
| Rotates, scales, moves, skews   | Controls animation duration and timing |

**Example:**

```css
button:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
```

---

## 15. What is CSS Animation?

**Answer:**

CSS Animation allows elements to move or change styles automatically using `@keyframes`.

**Example:**

```css
@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }
}

.box {
    animation: move 2s infinite alternate;
}
```

---

## 16. What is a Class in CSS?

**Answer:**

A class is a reusable selector used to apply the same style to multiple HTML elements.

**HTML Example:**

```html
<p class="text">Hello</p>
<p class="text">Welcome</p>
```

**CSS Example:**

```css
.text {
    color: blue;
}
```

Classes begin with a **dot (`.`)**.

---

## 17. What is an Object in CSS?

**Answer:**

CSS does **not** have the concept of objects like object-oriented programming.

People often use the word "object" to refer to an HTML element (such as a `<div>`, `<p>`, or `<img>`) that is being styled by CSS.

Example:

```html
<div class="card">
    Portfolio Card
</div>
```

Here, the `<div>` element can be thought of as the object, and the `.card` class styles it.

---

## 18. How is a Particular Element Selected in CSS?

CSS selects HTML elements using **selectors**.

### Element Selector

```css
p {
    color: red;
}
```

Selects all `<p>` elements.

---

### Class Selector

```css
.text {
    color: blue;
}
```

Selects all elements with `class="text"`.

---

### ID Selector

```css
#title {
    color: green;
}
```

Selects the element with `id="title"`.

---

### Universal Selector

```css
* {
    margin: 0;
}
```

Selects every element.

---

### Group Selector

```css
h1,
p,
button {
    font-family: Arial;
}
```

Selects multiple elements.

---

### Descendant Selector

```css
nav a {
    color: red;
}
```

Selects all `<a>` elements inside a `<nav>`.

---

### Child Selector

```css
div > p {
    color: blue;
}
```

Selects only direct child `<p>` elements of a `<div>`.

---

## Quick Interview Revision

* Flexbox is used for **one-dimensional layouts**.
* Grid is used for **two-dimensional layouts**.
* `justify-content` aligns items on the **main axis**.
* `align-items` aligns items on the **cross axis**.
* `gap` creates spacing between items.
* Media Queries make websites responsive.
* `position` controls element placement.
* `z-index` controls stacking order.
* `transition` creates smooth effects.
* `transform` changes an element's shape, size, or position.
* `animation` creates automatic motion using `@keyframes`.
* A **class (`.`)** is reusable, while an **ID (`#`)** is unique.
* CSS selects elements using selectors like element, class, ID, universal, descendant, and child selectors.
