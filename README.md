# trucksales.com.au Rebuild

A simplified, high-fidelity React application clone of the **trucksales.com.au** marketplace. 

---

## ⚡ How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```
3. **Open Browser**:
   Navigate to the local dev address (typically `http://localhost:5173`).

---

## 🔑 Environment Variables (.env)

No `.env` variables are required to run this application. It uses a self-contained, high-fidelity mock dataset with realistic specifications and generated image assets.

For future API integration, you can define:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🛠️ Approach & Architecture

1. **Routing & URL Synchronization**:
   Implemented client-side routing (`react-router-dom`). Filters on `/search` are dynamically synchronized with the browser's URL search queries (`?category=tipper&location=NSW`), making the search state bookmarkable and shareable. Back button states preserve previous search configurations.
2. **Page Decoupling**:
   Created three dedicated views:
   - **Home (`/`)**: Hero banner search wizard, quick category SVG shortcut buttons, and editorial review/news cards.
   - **Search Results (`/search`)**: Collapsible accordion filters and responsive 2-column truck results list.
   - **Details (`/truck/:id`)**: Specifications sheets, media carousels, and sticky sidebar enquiry forms.
3. **Tailwind CSS v4 & Google Font Inter**:
   Configured custom HSL-based brand colors (brand blue, navy, red, light-blue) and typography matching the carsales design system.
4. **Shimmer UI (Skeleton Screens)**:
   Added centralized route-driven listeners (`useLocation` hook in a `useEffect` trigger) that render pulsing placeholders during filter updates to simulate actual network fetch latency.
5. **Robust Forms & Safety UX**:
   Includes full email/phone pattern validations for enquiry submission and "Click to reveal phone number" safety logs.
