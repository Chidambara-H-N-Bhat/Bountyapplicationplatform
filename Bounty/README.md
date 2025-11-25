## 💻 Bounty Creation Platform

This project is a multi-step platform for users to create and publish structured bounties. It utilizes a modern frontend stack with Redux for seamless state management across steps.

[](https://react.dev/)
[](https://redux.js.org/)
[](https://tailwindcss.com/)
[](https://vitejs.dev/)

-----

### 🌟 Features

  * **Multi-Step Flow:** Guides users through structured inputs for bounty creation.
  * **Global State Management:** Uses **Redux Toolkit** to manage form data and progress across all steps.
  * **Responsive Navigation:** Includes a sidebar and hamburger menu for clear step navigation on desktop and mobile.
  * **Image Upload & Preview:** Supports local preview of uploaded images (e.g., Backer logo).
  * **Final Review:** A confirmation step to review all submitted details before "publishing."

-----

### 📝 Step-by-Step Overview

The bounty creation process is divided into five distinct stages:

1.  **Brief:** Add essential details (**title**, **description**, project, mode, impact category).
2.  **Rewards:** Define the reward structure (**currency**, **total reward**, winners), impact certificate options, and SDGs.
3.  **Backer:** Input optional backer information (name, message, and **logo upload**).
4.  **Review & Confirm:** A final page to display and verify all entered data.
5.  **Result Page:** Shows the success state and a celebratory GIF after submission.

-----

### 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | `React.js (Vite)` | Building the user interface. |
| **State Mgt** | `Redux Toolkit` & `React-Redux` | Global data management and progress tracking. |
| **Styling** | `Tailwind CSS` | Utility-first CSS framework for responsive design. |
| **Language** | `JavaScript ES6+` | Core programming language. |
| **Build Tool** | `Vite` | Fast bundler and development server. |

-----

### 📁 Project Structure

A clean, component-based architecture:

```
src/
│
├── components/
│   ├── Sidebar.jsx          # Step navigation + hamburger menu
│   ├── Brief.jsx            # Step 1 – Bounty brief form
│   ├── Rewards.jsx          # Step 2 – Rewards & SDGs
│   ├── Backer.jsx           # Step 3 – Backer info + logo upload
│   ├── Confirm.jsx          # Step 4 – Review all details
│   └── Result.jsx           # Step 5 – Success GIF page
│
├── store/
│   └── store.js             # Redux slices & global state configuration
│
├── utils/
│   └── validators.js        # Reusable form validation helpers
│
├── hooks/
│   └── useForm.js           # Custom logic for form handling
│
├── App.jsx                  # Main component controlling step flow
└── main.jsx                 # Vite entry point
```

-----




