# React and API Usage

An image search app built with React that fetches photos from the Unsplash API.

## What it demonstrates
- Calling a REST API from React with Axios and `async/await`
- Lifting state up: the search form sends the term to `App`, which stores the results
- Rendering a list of results with small components (`ImageList`, `ImageItem`)

## Features
- Type a search term and press Enter
- Shows the matching Unsplash photos in a grid

## Tech
- React 18
- Vite
- Axios
- Unsplash API

## How to run
The app lives in the `image/` folder. You need your own Unsplash Access Key
(free at https://unsplash.com/developers); put it in the `Authorization` header in `image/src/api.jsx`.

```bash
cd image
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

---

Built by [Mertcan Eren](https://github.com/mertcaneren0) as a learning project.
