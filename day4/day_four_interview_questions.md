# 📖 Day 4 – Interview Questions & Answers

## 1. What is the CSS `position` property?

The **`position`** property specifies **how an element is positioned on a webpage**. It controls where an element appears relative to the document or other elements.

**Common values:**

* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`

---

## 2. What is the default position of HTML elements?

The default value of the `position` property is **`static`**.

* Elements appear in the normal document flow.
* Properties like `top`, `left`, `right`, and `bottom` do not work with `static`.

---

## 3. What is the difference between `relative` and `absolute` positioning?

| Relative                                     | Absolute                                                      |
| -------------------------------------------- | ------------------------------------------------------------- |
| Moves an element from its original position. | Removes the element from the normal document flow.            |
| The original space is preserved.             | The original space is not preserved.                          |
| Acts as a reference for absolute elements.   | Positions itself relative to the nearest positioned ancestor. |

---

## 4. What is `fixed` positioning?

A **fixed** element stays in the same position on the screen even when the webpage is scrolled.

**Common Uses:**

* Chat button
* WhatsApp button
* Back to Top button
* Floating navigation menu

---

## 5. What is `sticky` positioning?

A **sticky** element behaves like a normal (`relative`) element until a specified scroll position is reached. After that, it sticks to the specified position.

**Example:**
A navigation bar that stays at the top while scrolling.

---

## 6. What is `z-index`?

The **`z-index`** property controls the stacking order of overlapping positioned elements.

* Higher `z-index` → Appears on top.
* Lower `z-index` → Appears behind.

**Example:**

```css
.box1{
    z-index:1;
}

.box2{
    z-index:2;
}
```

---

## 7. What is the `transform` property?

The **`transform`** property changes the appearance of an element without affecting the document layout.

It can:

* Scale
* Rotate
* Translate (Move)
* Skew

**Example:**

```css
transform: scale(1.2);
```

---

## 8. What is the `transition` property?

The **`transition`** property creates smooth animations when CSS property values change.

Without `transition`, changes happen instantly.

**Example:**

```css
transition: 0.5s;
```

---

## 9. What is CSS Animation?

CSS Animation allows an element to automatically change its styles over time using **`@keyframes`**.

It does not require JavaScript for basic animations.

**Example:**

```css
animation: moveBall 3s infinite;
```

---

## 10. What is `@keyframes`?

`@keyframes` defines the different stages of a CSS animation.

It specifies:

* Starting state (`from`)
* Ending state (`to`)
* Intermediate states (optional percentages like `50%`)

**Example:**

```css
@keyframes moveBall{

    from{
        left:0;
    }

    to{
        left:300px;
    }

}
```

---

## 11. What is the difference between `transform` and `transition`?

| Transform                               | Transition                                    |
| --------------------------------------- | --------------------------------------------- |
| Defines **what** visual change happens. | Defines **how** the change happens over time. |
| Changes size, position, or rotation.    | Creates smooth animation between changes.     |

**Example:**

```css
transform: scale(1.2);
transition: 0.5s;
```

---

## 12. Why is `position: relative` often used with `position: absolute`?

An absolutely positioned element searches for the nearest ancestor that has a position value other than `static`.

Setting the parent to:

```css
position: relative;
```

provides the reference point for the child element.

---

## 13. What is the purpose of the `:hover` pseudo-class?

The **`:hover`** pseudo-class applies CSS styles when the user places the mouse pointer over an element.

It is commonly used for:

* Buttons
* Links
* Images
* Cards
* Navigation menus

**Example:**

```css
button:hover{
    background: blue;
}
```

---

## 14. How do you create a smooth hover effect?

A smooth hover effect is created by combining:

* `transition`
* `:hover`
* A CSS property such as `transform`, `background-color`, or `color`

**Example:**

```css
button{

    transition:0.5s;

}

button:hover{

    transform:scale(1.1);

}
```

---

## 15. What is the difference between `top`, `left`, `right`, and `bottom`?

These properties control the position of elements when using:

* `relative`
* `absolute`
* `fixed`
* `sticky`

| Property | Meaning                                                           |
| -------- | ----------------------------------------------------------------- |
| `top`    | Moves the element downward from the top reference point.          |
| `bottom` | Moves the element upward from the bottom reference point.         |
| `left`   | Moves the element toward the right from the left reference point. |
| `right`  | Moves the element toward the left from the right reference point. |

**Example:**

```css
.box{

    position:absolute;

    top:20px;

    left:50px;

}
```

---

# 🎯 Day 4 Summary

After completing Day 4, you should understand:

* ✅ CSS Position Property
* ✅ Static Position
* ✅ Relative Position
* ✅ Absolute Position
* ✅ Fixed Position
* ✅ Sticky Position
* ✅ z-index
* ✅ Transform
* ✅ Transition
* ✅ CSS Animation
* ✅ @keyframes
* ✅ Hover Effects
* ✅ Positioning Properties (`top`, `left`, `right`, `bottom`)
