# ☀️ SunCart | Premium Summer E-Commerce Store

SunCart is a high-performance, full-stack e-commerce application built using **Next.js 15**, **BetterAuth**, and **MongoDB**. It offers a seamless shopping experience for summer essentials, featuring robust authentication, dynamic product handling, and secure user profiles.

---

## 🌟 Key Features

### 🔐 Advanced Authentication
- **Multi-Provider Auth:** Support for Email/Password and Google Social Login via BetterAuth.
- **Session-Persistence:** Integrated with MongoDB Atlas to maintain user sessions across devices.
- **Dynamic Navbar:** Context-aware navigation that updates in real-time as users log in or out.

### 🛡️ Secure Routing & Proxy Logic
- **Middleware Guard:** Private routes (like Product Details and Profile) are protected by a `middleware.js` (logic based on `proxy.js`).
- **Smart Redirects:** Guests attempting to access protected pages are redirected to login and automatically returned to their original destination using `callbackURL` logic.

### 🛍️ Dynamic Shopping Experience
- **Responsive Catalog:** A beautifully designed product grid using DaisyUI and Tailwind CSS.
- **Dynamic Product Details:** Server-side fetching of product metadata based on URL parameters with robust ID comparison.
- **Product Cards:** Professional DaisyUI cards featuring image hover-zoom effects, ratings, and price badges.

### 👤 Profile & Account Management
- **User Dashboard:** Secure area to view account details including Name, Email, and Avatar.
- **Profile Updates:** Direct integration with BetterAuth API (`updateUser`) to modify name and image information instantly.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Auth:** [BetterAuth](https://better-auth.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)

---

## 📁 Project Structure

Based on the implemented architecture:

```text
src/
├── app/
│   ├── (auth)/             # Route group for Login and Register
│   ├── (main)/             # Route group for Products and Profile
│   ├── api/auth/[...all]/  # BetterAuth Server Endpoints
│   └── productDetails/[id]/# Dynamic Product Specification Pages
├── components/
│   └── shared/             # Navbar, Footer, and ProductCard components
├── data/
│   └── items.json          # Product Inventory Data
├── lib/
│   ├── auth.js             # Server-side Auth Configuration
│   └── auth-client.js      # Client-side Auth Methods
└── middleware.js           # Route Guard Logic (Proxy)