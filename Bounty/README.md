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

### ⚙️ Setup & Local Development

Follow these steps to get the project running locally.

#### 1\. Clone the repository

```bash
git clone [https://github.com/Chidambara-H-N-Bhat/Bountyapplicationplatform/tree/main/Bounty]
cd [bounty]
```

#### 2\. Install Dependencies

```bash
npm install
# or
yarn install
```

#### 3\. Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at the URL displayed in your terminal (typically `http://localhost:5173/`).

-----

### 📦 Building and Deployment

#### Build for Production

```bash
npm run build
```

This command bundles the app into static files in the `dist` directory.

#### Preview Production Build (Local Test)

```bash
npm run preview
```

#### Deployment (Example: Vercel)

The project can be deployed easily to platforms like Vercel:

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/new) and import your repository.
3.  Vercel will automatically detect the **Vite** framework and set up the correct build commands.

-----

### Assumptions and Current Limitations

| Category | Detail |
| :--- | :--- |
| **Flow** | Assumes users will follow the strict sequential flow (`Brief` → `Rewards` → `Backer` → `Confirm` → `Result`). |
| **Backend** | **Data is not saved permanently.** This is a frontend-only platform; it lacks a persistent backend. |
| **State** | The Redux state **clears on page refresh**. |
| **Authentication** | No user login or authentication system is implemented. |
| **Assets** | Uploaded images are only handled locally for preview and are not stored/uploaded to a server. |
<img width="925" height="3240" alt="image" src="https://github.com/user-attachments/assets/3a410acd-3890-4b2f-b274-c8194a105d82" />

