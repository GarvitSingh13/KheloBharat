# Khelo Bharat 🇮🇳 🏃

Khelo Bharat is an AI-powered physical fitness and sports initiative platform built with Next.js. It features automated motion tracking, Genkit AI workflows, and Firebase integration to evaluate test submissions, track fitness progress, and maintain a competitive leaderboard.

## Features
- **AI-Powered Evaluation**: Utilizes Google Genkit and MediaPipe Tasks Vision to analyze user submissions (such as physical tests or exercises) in real-time.
- **Real-Time Leaderboard**: Compete with others and track scores or submissions using Firebase Firestore.
- **Authentication**: Firebase Authentication for seamless user login and profile management.
- **Modern UI**: Styled with Tailwind CSS and Radix UI components for a responsive, interactive, and accessible user experience.
- **Progressive Web App (PWA)**: Installable as a web app on mobile devices for an application-like experience.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18)
- **AI & Vision**: [Google Genkit](https://firebase.google.com/docs/genkit) and [MediaPipe Vision](https://developers.google.com/mediapipe/solutions/vision)
- **Backend & Database**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **State Management & Forms**: [React Hook Form](https://react-hook-form.com/) & Zod
- **PWA**: `next-pwa`

## Getting Started

### Prerequisites
- Node.js (v20+)
- Firebase Project with Auth, Firestore, and Storage enabled.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GarvitSingh13/KheloBharat.git
   ```

2. Navigate to the core application directory:
   ```bash
   cd "Khelo Bharat"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the Next.js app directory (`Khelo Bharat`) and add your Firebase and Genkit configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY="..."
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="..."
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
   NEXT_PUBLIC_FIREBASE_APP_ID="..."
   
   # Add any other required API keys
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Structure
The core application code is located in the `Khelo Bharat` subdirectory:
- `src/ai/`: Genkit setup, AI logic, and evaluation flows.
- `src/app/`: Next.js App Router covering routes like `dashboard`, `leaderboard`, `submissions`, `profile`, and `auth`.
- `src/components/`: Reusable UI components including form UI, dialogs, and splash screens.

## Deployment
This project is configured out-of-the-box for serverless hosting using `apphosting.yaml`. You can deploy this easily to Firebase App Hosting, Vercel, or any other hosting provider that supports Next.js.
