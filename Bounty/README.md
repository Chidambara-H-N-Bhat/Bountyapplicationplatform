Bounty Creation Platform – README


This project is a multi-step Bounty Creation platform where users can create and publish a bounty by filling out structured steps:

Brief – Add title, description, project, mode, and impact category.

Rewards – Including currency, total reward, winners, impact certificate, SDGs.

Backer – Optional backer name, message, logo upload.

Review & Confirm – Displays all details.

Result Page – Shows final published bounty + success GIF.

The app uses Redux to manage the progress and data across steps.

A responsive sidebar with a hamburger menu allows step navigation on desktop and mobile.

Users can upload images, view live previews, and see a final confirmation page with all entered data.


Technology Stack

Frontend

React.js (Vite) – UI framework

Redux Toolkit – Global state management

React-Redux – Redux integration

Tailwind CSS – Styling and responsive UI

JavaScript ES6+

Public Assets Handling – Image & GIF loading

Build Tools

Vite – Fast bundler and dev server


📁 Code Structure Explanation
src/
│
├── components/
│   ├── Sidebar.jsx          # Sidebar with step navigation and hamburger menu
│   ├── Brief.jsx            # Step 1 – Bounty brief form
│   ├── Rewards.jsx          # Step 2 – Rewards & SDGs
│   ├── Backer.jsx           # Step 3 – Backer information & logo upload
│   ├── Confirm.jsx          # Review all details before publishing
│   └── Result.jsx           # Final result page with success GIF
│    
├── store/
│   └── store.js             # Redux Toolkit slices & global step data
│
├── pages/ (Optional in future upgrades)
│   └── index.jsx            # Home layout if routing is added
│
├── utils/ (Future use)
│   └── validators.js        # Form validation helpers 
│
├── hooks/ (Future use)
│   └── useForm.js           # Custom form logic 
│
├── App.jsx                  # Main app wrapper rendering steps conditionally
└── main.jsx                 # Vite entry point

Public Assets
public/
└── images/
    └── success.gif          # GIF shown on final result page

    

Setup & Run Instructions

1️. Install Dependencies
npm install

2️. Run Development Server
npm run dev

3️. Open App in Browser

The terminal will show a URL like:

http://localhost:5173/


 Build & Deployment Instructions


Build for Production
npm run build

Preview Production Build
npm run preview

Deployed to Vercel 

Pushed project to GitHub

Go to → https://vercel.com/new

Import your GitHub repo

Select Framework = Vite


Assumptions & Limitations
 
Assumptions
 

User enters correct information for all steps

Internet connection is required for deployment version

Steps flow sequentially (Brief → Rewards → Backer → Confirm → Result)


Limitations


No backend is implemented (data is not saved permanently)

Images uploaded by users are not stored, they only preview locally

No authentication or login

Page refresh clears all Redux data

