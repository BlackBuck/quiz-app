# Micro-Quiz

A lightweight quiz web app built with **Next.js App Router** designed to deliver shor and topic-specific quizzes with clean UI and optimal performance.

---

## Features

- Dynamic quiz category routing
- Statically generated homepage (SSG)
- Server-side rendering for quiz categories and individual quizzes (SSR)
- API Routes using mock data
- Responsive and professional UI using Tailwind CSS
- next/image optimization for icons
- Client-side state for tracking quiz progress and score
- TypeScript + strict typing

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/micro-quiz-platform.git
cd micro-quiz-platform
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

### 4. Run tests and lint

```bash
npm run lint
npm test
```

---

## Design Decisions

### App Directory

We used **Next.js App Router (`app/`)**, allowing:

* Server Components by default
* Cleaner layout and route structure
* Better async support for SSR and SSG

### Static Site Generation (SSG)

* **Homepage (`/`)** is statically generated using `fetch()` from an API route with `{ cache: 'force-cache' }` for build-time fetching (since `getStaticProps` isn't supported in NextJS >= 13).

### Server-Side Rendering (SSR)

* **Category Page (`/quizzes/[category]`)** uses dynamic routing and server fetch (`fetch(..., { cache: 'no-store' }`) for fresh content.
* **Quiz Page (`/quiz/[id]`)** also uses SSR for immediate access to quiz data.

### API Routes

* All quizzes and category data are served via **Next.js API Routes** using mock JSON objects (no real DB).
* Structured as:

  * `/api/category`
  * `/api/quizzes/[category]`
  * `/api/quiz/[id]`

### Image Optimization

* All category icons are loaded using `next/image` for automatic compression and responsive support.

### UI/UX

* Built with **Tailwind CSS**, following clean design principles.
* Mobile-friendly with intuitive layout.
* Interactive quiz runner with stateful transitions.

---

## Challenges & Learnings

* **SSG via `getStaticProps` was not supported in NextJS >= 13**, so instead I used the `fetch()` method with `{ cache: 'force-cache' }` to mimic static generation behavior for the homepage.
* Implementing SSR required careful control over cache and revalidation headers.
* Prevented hydration errors by ensuring server-client HTML match, e.g., correctly using `return` inside `map()` in JSX.
* Mock data was structured modularly for easy category-based access.
* Learned Jest from scratch to implement functional testing since I didn't have much experience with it.
* Used AI to refine README.md and a small bit of refactoring here and there.
---

## Tech Stack

* Framework: **Next.js 14+ App Router**
* Language: **TypeScript**
* Styling: **Tailwind CSS**
* Image: **next/image**
* Testing: **Jest** + **React Testing Library**
* CI: GitHub Actions

---

## Tests

Basic unit and integration tests included using:

```bash
npm test
```

---

## License

MIT