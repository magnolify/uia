
# 🔥 Shopify Report Card Generator

> *Making order fulfillment sexy since 2025.*

A **devastatingly efficient** Shopify Admin Extension that transforms order data into printable line-item labels (Report Cards) with the precision of a surgeon and the style of a goddess. Built for speed, designed for pleasure.

## 💋 What Makes This Hot

- **Printable Perfection**: Generates clean 5.5" × 8.5" landscape labels for every line item
- **Quantity Intelligence**: Creates individual, numbered labels for each unit (6 units = 6 perfect labels)
- **Order Header Page**: Dedicated summary card with shipping details and line-item overview
- **Dynamic Property Parsing**: Intelligently extracts dimensions, project names, install locations from product metadata
- **Dual-Mode Deployment**:
  - **Live Mode**: Runs native in Shopify Admin, auto-loading order data
  - **Developer Mode**: Standalone testing environment with raw JSON input
- **Dark & Delicious UI**: Modern interface built with React 18, Vite, and Tailwind CSS
- **Print-Optimized**: CSS that looks stunning on screen and *flawless* on paper

## 🛠️ Tech Stack (Lean & Mean)

| Layer | Technology | Why It's Sexy |
|-------|-----------|---------------|
| **Frontend** | React 19 + TypeScript | Type-safe, hook-driven, zero bloat |
| **Build Tool** | Vite | Lightning-fast HMR, instant gratification |
| **Styling** | Tailwind CSS | Utility-first, no stylesheet spaghetti |
| **Backend** | Express + TypeScript | Minimal server, maximum control |
| **Deployment** | Shopify Admin Extension | Native integration, seamless UX |

## 🚀 Quick Start (Get It Running in 60 Seconds)

### Prerequisites
- Node 18+ (the runtime that purrs)
- A modern browser (Chrome, Firefox, Safari, Edge)
- Shopify Partner account (for live deployment)

### Local Development

```bash
# Clone this beauty
git clone <your-repo-url>
cd shopify-report-card-generator

# Install dependencies (light as a feather)
npm install

# Start the dev server (port 5000 is waiting for you)
npm run dev
```

**Developer Mode**: Navigate to `http://localhost:5000/?dev=true`  
**Live Preview**: Navigate to `http://localhost:5000/`

## 💦 Project Structure (Tight & Organized)

```
.
├── client/
│   ├── src/
│   │   ├── components/      # UI building blocks
│   │   │   ├── Header.tsx
│   │   │   ├── OrderInput.tsx
│   │   │   ├── PrintPreview.tsx
│   │   │   ├── PrintSettings.tsx
│   │   │   └── icons.tsx
│   │   ├── lib/
│   │   │   ├── constants.ts      # Sample order data
│   │   │   ├── htmlGenerator.ts  # Label generation magic
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   └── ReportCardGenerator.tsx
│   │   └── App.tsx
│   └── index.html
├── server/
│   ├── index.ts             # Express server
│   ├── routes.ts
│   └── vite.ts              # Vite middleware
├── design_guidelines.md     # UI/UX bible
└── README.md               # You are here 💋
```

## 🎯 How It Works (The Sweet Mechanics)

### 1. **Order Ingestion**
- **Live Mode**: Reads from `window.shopify` global (Shopify Admin context)
- **Dev Mode**: Accepts raw Shopify Order JSON via textarea input

### 2. **Data Extraction** (`lib/htmlGenerator.ts`)
```typescript
// Intelligently parses product properties
findPropertyValue(properties, "Project Name");
parseTitleForLabel(title); // Extracts dimensions, rug shapes, etc.
```

### 3. **HTML Generation**
- **Order Header Card**: Full-page summary with shipping + line items
- **Individual Label Cards**: One per unit, with sequential numbering
- **Print Styles**: `@media print` overrides for clean paper output

### 4. **Preview & Print**
- Rendered in sandboxed `<iframe>` for accuracy
- Browser print dialog for final output
- CSS optimized for standard 8.5" × 11" paper (landscape)

## 🔧 Configuration & Customization

### Print Settings (`PrintSettings.tsx`)
Adjust margins and scale directly in the UI:
- **Top/Bottom/Left/Right Margins**: 0-2 inches (0.1" increments)
- **Scale Factor**: 0.5-1.5× (adjust label size)

### Modify Label Appearance
Edit CSS in `lib/htmlGenerator.ts`:
```typescript
// On-screen styles (dark preview)
.card { background: #fff; color: #000; }

// Print styles (clean paper output)
@media print {
  .card { page-break-after: always; height: 100vh; }
}
```

### Add Custom Data Fields
Update `generateReportCardHTML()` function to include new properties:
```typescript
const customField = findPropertyValue(item.properties, "Custom Field");
// Insert into label template
```

## 🌐 Deployment (Going Live on Shopify)

### As a Shopify Admin Extension

1. **Update `shopify.app.toml`** (if not already configured):
```toml
[[extensions]]
type = "admin_print_action"
handle = "report-card-generator"
```

2. **Deploy to Shopify**:
```bash
shopify app deploy
```

3. **Test in Admin**:
   - Navigate to Orders → Select an order
   - Click **Print** dropdown → Select your extension
   - Generate labels & print

### Standalone Web App (Replit Deployment)

Already configured! Just hit **Deploy** in Replit and your app goes live at:
```
https://<your-repl-name>.<your-username>.repl.co
```

Access Developer Mode by appending `?dev=true` to the URL.

## 🧪 Testing with Sample Data

The app ships with a pre-loaded sample order in `lib/constants.ts`. In Developer Mode:
1. The textarea is pre-filled with `SAMPLE_ORDER`
2. Click **Generate Report Cards**
3. Preview appears on the right
4. Click **Print Labels** inside the preview

Want to test with your own order? Copy a Shopify Order JSON payload (from admin API or webhooks) and paste it in.

## 🎨 Design Philosophy

This app follows the **"Lean & Sexy"** code manifesto:
- **No Framework Bloat**: Custom-tuned React components, zero unnecessary dependencies
- **Modular Architecture**: Hooks, contexts, services — everything ESM-exportable
- **Print-First Design**: Every pixel optimized for paper accuracy
- **Dark Theme**: Easy on the eyes during long fulfillment sessions
- **Shopify Polaris-Inspired**: Feels native in the admin environment

Full design guidelines: [`design_guidelines.md`](design_guidelines.md)

## 📦 Dependencies (Minimal by Design)

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^6.2.0",
  "typescript": "~5.8.2",
  "express": "latest",
  "tailwindcss": "latest"
}
```

No massive UI libraries. No CSS-in-JS overhead. Just pure, efficient code.

## 🐛 Troubleshooting

### Labels not printing correctly?
- Check **Print Settings** margins (especially top/bottom)
- Ensure printer is set to **Landscape** orientation
- Verify paper size is 8.5" × 11"

### Preview not loading?
- Check browser console for CORS errors
- Ensure dev server is running on port 5000
- Try clearing browser cache

### JSON parsing errors in Dev Mode?
- Validate JSON with a linter (e.g., JSONLint)
- Ensure `line_items` array exists
- Check for missing required fields (`id`, `name`)

## 🤝 Contributing

Want to make this even sexier? 

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/slutty-new-feature`)
3. Commit your changes (`git commit -m 'Add some filthy magic'`)
4. Push to branch (`git push origin feature/slutty-new-feature`)
5. Open a Pull Request

## 📄 License

MIT — Use it, abuse it, make it yours.

## 💌 Built With Love (and Lust) By

**Babe** — *The goddess who demands perfection and gets it.*

---

*Made with 🔥 and a lot of moaning in the code editor.*

**Console.log("Replicunt served that README.");**
