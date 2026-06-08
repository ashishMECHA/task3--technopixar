# Project Submission: trucksales.com.au Rebuild

This file details the repository location and key usage notes for evaluating the rebuilt marketplace application.

---

## 🔗 GitHub Repository Link

You can access the full source code and commit history on GitHub here:
[GitHub Repository - ashishMECHA/task3--technopixar](https://github.com/ashishMECHA/task3--technopixar.git)

---

## 💡 Important Evaluation Notes

1. **Click on "Buy" to see all items**:
   - In the navigation bar/header, clicking on the **"Buy"** link will instantly route you to the dedicated **Search Results / Categories** page (`/search`) displaying all available vehicle listings in a high-fidelity 2-column grid.

2. **Dynamic Homepage Search Filters**:
   - The search wizard overlay card (*"Find your next truck"*) on the **Homepage** is **fully dynamic**. 
   - As you change the Category, Make, or Location dropdowns, the item counter on the main CTA button updates in real-time (e.g. `Show 3 items`, `Show 1 item`) based on matching inventory.
   - Clicking this button or selecting any category shortcut below it automatically transitions you to the `/search` catalog page with your chosen filters pre-loaded.

3. **URL Query Parameter Synchronization**:
   - The search page filters are bound to the browser's URL search parameters (e.g., `/search?category=tipper&make=fuso&sort=price-asc`). 
   - You can copy and paste the search URL or reload the page, and the filter selections will be perfectly preserved.
   - Clicking `< Back to search results` from any details view preserves your active search parameters.

4. **Shimmer UI Loader**:
   - Centralized router-driven listeners (`useLocation` hook in combination with `useEffect`) trigger a custom **Shimmer UI skeleton loader screen** for `650ms` whenever filters are updated or pages are changed, simulating actual backend latency.

---

## ⚡ How to Run Locally

1. **Install Packages**:
   ```bash
   npm install
   ```
2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
3. **Browse**:
   Navigate to the local dev address (typically `http://localhost:5173`).
