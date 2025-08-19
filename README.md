<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center"><a href="https://sushiandsides.onrender.com/">Sushi &amp; Sides</a></h1>
  <p align="center">
    A minimalist sushi takeout demo — browse, add to cart, and checkout.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#app-overview">App Overview</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#next-steps">Next Steps</a></li>
  </ol>
</details>

## About The Project 📝

![Project Screenshot](https://i.imgur.com/ruptl7T.png)

**Sushi & Sides** is a small MERN app that showcases a classic authenticated ordering flow:
- Sign up / log in (JWT)
- Browse menu items by category (Rolls, Nigiri, Bowls & Bento, Sides, Desserts, Drinks)
- Add items to a cart, adjust quantities, and checkout (marks order as paid)
- View a simple order history

The goal is to demonstrate clean, production-ready structure without complex extra features.

### Technologies Used 🔧

- [![React.js](https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
- [![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [![CSS](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
- [![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white&style=for-the-badge)](https://mongoosejs.com/)
- [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
- [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
- [![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge)](https://jwt.io/)
- [![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=white&style=for-the-badge)](https://render.com/)

> Hosting: Deployed on Render — <https://sushiandsides.onrender.com/>

## App Overview 📱

### Browse Menu by Category
![Browse Menu](docs/screenshots/menu.png)

### Add to Cart & Update Quantities
![Cart](docs/screenshots/cart.png)

### Checkout
![Checkout](docs/screenshots/checkout.png)

### Order History
![Order History](docs/screenshots/history.png)

> 📸 Screenshot paths use `docs/screenshots/*.png`. Replace these images with your own or update the links as needed.

## Getting Started 🌱

### 1) Run the Deployed App
Visit **[sushiandsides.onrender.com](https://sushiandsides.onrender.com/)**, create an account, and start ordering.

### 2) Local Development

**Prerequisites**
- Node 20.x
- A MongoDB Atlas connection string

**Clone & configure**
```bash
git clone https://github.com/saadchow/Sushi-Sides.git
cd Sushi-Sides

