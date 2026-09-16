# 🖼️ Pixgen — AI Photo Gallery

**Pixgen** is a modern photo gallery web application where users can explore a collection of photos, view detailed information, manage their profiles, and securely authenticate using email/password or Google Sign-In.

The application is designed with a clean and responsive interface to provide a smooth experience across desktop, tablet, and mobile devices.

---

## ✨ Features

* 🖼️ **Photo Gallery** — Browse all available photos in a clean gallery layout.
* 🔍 **Photo Details** — View detailed information about an individual photo.
* 👤 **User Profile** — View and manage personal profile information.
* ✏️ **Profile Update** — Update profile information such as name and profile photo.
* 🔐 **Email Authentication** — Secure Sign Up and Sign In system.
* 🔵 **Google Sign-In** — Authenticate quickly using a Google account.
* 🚪 **Sign Out** — Securely sign out from the application.
* 📱 **Responsive Design** — Works smoothly on mobile, tablet, and desktop.
* 🧭 **Multiple Routes** — Organized navigation between different sections of the application.
* 🎨 **Modern UI** — Clean and minimal user interface for a better browsing experience.

---

## 📌 Available Routes

| Route              | Description                          |
| ------------------ | ------------------------------------ |
| `/`                | Home page                            |
| `/all-photos`      | Displays all available photos        |
| `/all-photos/[id]` | Displays details of a specific photo |
| `/profile`         | User profile and profile management  |
| `/signin`          | User Sign In                         |
| `/signup`          | User Sign Up                         |
| `/pricing`         | Pricing page                         |

---

## 🔐 Authentication

Pixgen includes a complete authentication system.

### Email & Password

Users can:

* Create a new account
* Sign in with email and password
* Sign out from their account

### Google Authentication

Users can also sign in quickly using:

**Continue with Google**

This provides a convenient alternative to traditional email/password authentication.

---

## 👤 Profile Management

After signing in, users can access their profile page.

The profile section includes:

* Profile photo
* User name
* Email address
* Profile information
* Profile update functionality

Users can update their profile information directly from the application.

---

## 🖼️ Photo Details

From the **All Photos** page, users can browse the available images.

Each photo includes a **View** option that takes the user to a dedicated details page.

The details page provides additional information about the selected photo.

---

## 🛠️ Technologies Used

### Frontend

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **HeroUI**

### Authentication

* **Better Auth**
* **Google OAuth**

### UI & Icons

* **HeroUI**
* **React Icons**
* **Gravity UI Icons**

### Development Tools

* **Node.js**
* **npm**
* **VS Code**
* **Git & GitHub**

---

## 📂 Project Structure

```text
pixgen/
│
├── app/
│   ├── all-photos/
│   │   ├── page.jsx
│   │   └── [id]/
│   │       └── page.jsx
│   │
│   ├── profile/
│   │   └── page.jsx
│   │
│   ├── signin/
│   │   └── page.jsx
│   │
│   ├── signup/
│   │   └── page.jsx
│   │
│   ├── pricing/
│   │   └── page.jsx
│   │
│   └── page.jsx
│
├── components/
│   └── Navbar.jsx
│
├── lib/
│   └── auth-client.js
│
├── public/
│   └── ...
│
├── package.json
└── README.md
```

> The exact project structure may vary depending on the final implementation.

---

## 🚀 Getting Started

Follow these steps to run Pixgen locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pixgen.git
```

### 2. Navigate to the project

```bash
cd pixgen
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=your_database_url

# Better Auth
BETTER_AUTH_SECRET=your_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> Add the environment variables required by your actual authentication and database configuration.

### 5. Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🔑 Authentication Flow

```text
                    Pixgen
                      │
              ┌───────┴───────┐
              │               │
          Sign Up          Sign In
              │               │
              │        ┌──────┴──────┐
              │        │             │
              │      Email         Google
              │        │             │
              └────────┴─────────────┘
                       │
                    Logged In
                       │
              ┌────────┴────────┐
              │                 │
           Profile          All Photos
              │                 │
       Update Profile      View Details
```

---

## 📱 Responsive Design

Pixgen is built with a responsive-first approach.

The application adapts to:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

The navigation menu also changes to a mobile-friendly dropdown on smaller screens.

---

## 🎯 Project Goals

The main goals of Pixgen are to:

* Build a modern gallery experience
* Implement secure authentication
* Practice Next.js routing
* Work with dynamic routes
* Build responsive UI components
* Implement user profile management
* Integrate Google authentication
* Create a professional full-stack style application

---

## 🔮 Future Improvements

Some possible future improvements include:

* ❤️ Favorite photos
* 🔖 Save photos to collections
* 🔎 Advanced photo search
* 🏷️ Photo categories and filters
* 📤 Photo upload functionality
* 🌙 Dark mode
* 💬 User comments
* 📊 User dashboard
* 📄 Pagination / infinite scrolling

---

## 🌐 Live Demo

**Live Website:**
`https://image-gen-five-opal.vercel.app/`

**GitHub Repository:**
`https://github.com/your-username/pixgen`



---

## 👨‍💻 Author

**Md Akramul Wadud**

Frontend / Web Developer

Built with ❤️ using **Next.js, React, Tailwind CSS & HeroUI**.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Thanks for checking out **Pixgen**! 🚀
