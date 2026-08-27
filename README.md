# Cute Invitation to a date

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.0-DD2C00?style=flat-square&logo=firebase&logoColor=white)

An interactive web application designed as a date invitation — instead of a regular message, the recipient goes through a series of animated screens, fills out a form with their preferred dates, and selects a gift, with the response sent directly to a database where it can be viewed in an admin panel.

## Features
- **5 interactive views** leading the user through the entire process — from the initial question, through confirmation, date selection form, gift choice, to the final screen
- **"No" button that responds to cursor movement** — smoothly dodges across the screen, making it impossible to click
- **Form with date validation** — fields for selecting arrival and departure dates; the next step unlocks only after correct completion
- **Gift selection** — a set of selectable tiles, including an intentionally locked option
- **Real-time response saving** to Firebase Firestore
- **Admin panel** — a separate view that fetches and displays stored data directly from the database, eliminating the need to check the Firebase console
- **Smooth animations and transitions** between steps, accompanied by subtle background effects (floating hearts)
- **Fully responsive design** optimized for mobile devices

##  Stack
| Layer | Technology |
|---|---|
| Frontend | React.js |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| Build tool | Vite |

### Installation
 
```bash
git clone https://github.com/David-Mastalski/Invitation-to-a-date.git
cd nazwa-repo
npm install
```

### Environment Setup

Create a `.env` file in the root directory of the project based on `.env.example` and fill it in with your Firebase project details (Your project → Project settings → General):
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

### Firestore Rules
 
In the Firebase Console, under Firestore Database → Rules, set the rules to match the name of the collection you are using, for example:
```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /DE_date/{doc} {
      allow read, write: if true;
    }
  }
}
```

### Starting the Application
 
```bash
npm run dev
```

<img src="https://github.com/David-Mastalski/Invitation-to-a-date/blob/main/preview/preview.gif" alt="Invitation to a date preview" width="100%">
