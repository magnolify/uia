
# Shopify Report Card Generator

This application is a Shopify Admin Extension designed to streamline the fulfillment process by generating printable "Report Cards" (line-item labels) from a Shopify order. It can run in a live Shopify environment or in a standalone "Developer Mode" for testing with raw JSON data.

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Core Logic Explained](#core-logic-explained)
  - [Application Flow](#application-flow)
  - [HTML Generation](#html-generation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Usage](#usage)
  - [Live Mode](#live-mode)
  - [Developer Mode](#developer-mode)
- [Customization](#customization)

## Key Features

- **Printable Labels**: Generates 5.5" x 8.5" landscape-oriented labels for each line item in an order.
- **Quantity Handling**: Creates a separate, numbered label for each unit of a line item (e.g., quantity of 6 yields 6 distinct labels).
- **Order Summary**: Includes a dedicated header page with overall order and shipping details.
- **Dynamic Data Parsing**: Intelligently extracts custom product properties (like dimensions, project names, and install locations) to populate label details.
- **Dual-Mode Operation**:
  - **Live Mode**: Designed to run inside the Shopify Admin panel, automatically loading the selected order.
  - **Developer Mode**: A standalone mode for development and testing, allowing users to paste raw Shopify Order JSON.
- **Modern UI**: A clean, dark-themed interface built with React and Tailwind CSS for a great user experience.
- **Print-Optimized**: CSS is specifically designed to be clean and legible on screen and automatically reformats for standard paper when printing.

## Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v19) with Hooks
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN) for the main UI, with inline CSS in the generated HTML for the labels themselves.
- **Modules**: Uses modern ES Modules with an `importmap` in `index.html`, eliminating the need for a complex build step during development.
- **Environment**: Designed to run as a [Shopify Admin Extension](https://shopify.dev/docs/apps/app-extensions) or in any modern web browser.

## Project Structure

```
.
├── App.tsx                   # Main React application component, manages state and logic.
├── components/
│   ├── Header.tsx            # The top header bar of the application.
│   ├── OrderInput.tsx        # Text area and generate button for Dev Mode.
│   ├── PrintPreview.tsx      # iframe container to display the generated HTML.
│   ├── SettingsPanel.tsx     # Settings UI for Dev Mode.
│   └── icons.tsx             # SVG icon components used throughout the UI.
├── constants.ts              # Contains the sample Shopify order data for testing.
├── index.html                # The main entry point of the application.
├── index.tsx                 # Mounts the React application to the DOM.
├── metadata.json             # Configuration file for the Shopify Admin Extension.
├── types.ts                  # TypeScript interfaces for the Shopify Order API objects.
└── utils/
    └── htmlGenerator.ts      # Core logic for generating the printable HTML from order data.
```

## Core Logic Explained

### Application Flow

1.  **Initialization (`App.tsx`)**: The app first checks the URL query parameters for `?dev=true`. This determines whether to launch in Developer Mode or Live Mode.
2.  **Live Mode**: If not in dev mode, a `useEffect` hook attempts to read order data from the `window.shopify` global object, which is injected by the Shopify Admin environment. The current implementation is mocked to always load the `SAMPLE_ORDER` from `constants.ts`.
3.  **Developer Mode**: The UI displays an `OrderInput` panel. The user can paste a Shopify order JSON payload and click "Generate."
    - The `handleGenerate` function parses the JSON string. It's smart enough to accept JSON with or without a root `{"order": ...}` key.
    - Basic validation ensures essential fields like `id` and `line_items` exist.
    - On successful parsing, the JSON is set to the `order` state.
4.  **HTML Generation Trigger (`App.tsx`)**: A `useEffect` hook is set to watch for changes to the `order` state. Whenever the `order` is successfully set (in either mode), it calls `generateReportCardHTML(order)`.
5.  **Preview Rendering (`PrintPreview.tsx`)**:
    - The HTML string returned by the generator is encoded into a `data:` URL.
    - This URL is passed as the `src` attribute to an `<iframe>`, providing a sandboxed and accurate print preview.

### HTML Generation (`utils/htmlGenerator.ts`)

This is the heart of the application. The `generateReportCardHTML` function orchestrates the creation of the final document.

-   **Data Extraction**: Helper functions like `findPropertyValue` and `parseTitleForLabel` are used to dig into the `line_item.properties` array. They find specific values like "Project Name ", "Choose Rug Shape ", and dimensions, cleaning up whitespace and known suffixes (e.g., "ft", "in").
-   **Structure**:
    1.  An **Order Header Card** is generated first using `generateOrderHeaderHTML`, providing a summary of the entire order.
    2.  The `line_items` array from the order is iterated over. The `flatMap()` method is used in conjunction with `Array.from({ length: item.quantity })` to create one card for each individual unit, ensuring that an order for 6 units of the same item results in 6 separate cards.
-   **Styling**: The generated HTML includes a `<style>` block with all necessary CSS.
    -   **On-Screen**: Uses a dark gray background (`#1f2937`) to match the app's UI, with white cards that are easy to read.
    -   **On-Print (`@media print`)**: The styles are completely overridden for printing. The background is removed, text is forced to black, and each `.card` element is configured to take up a full page (`height: 100vh`) with `page-break-after: always` to ensure clean separation.

## Getting Started

The project is configured to run without a build step, making it very simple to get started.

### Prerequisites

-   A modern web browser (Chrome, Firefox, Safari, Edge).
-   A local web server. Python's built-in server is a simple option.

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Start a local web server:**
    If you have Python 3 installed, you can run:
    ```bash
    python -m http.server
    ```
    Alternatively, you can use any other static file server like `npx serve`.

3.  **Access the application:**
    -   Open your browser and navigate to `http://localhost:8000`.
    -   To use **Developer Mode**, append `?dev=true` to the URL: `http://localhost:8000/?dev=true`.

## Usage

### Live Mode

When deployed as a Shopify Admin Extension and an order is opened, the app will automatically load the order data and display the print preview. In the local mock environment, it will always load the `SAMPLE_ORDER`.

### Developer Mode

1.  Navigate to the application with `?dev=true` in the URL.
2.  The left panel will show a text area for JSON input. It is pre-populated with the sample order.
3.  You can paste any valid Shopify Order JSON into this text area.
4.  Click the **"Generate Report Cards"** button.
5.  If the JSON is valid, a print preview will appear on the right. If there are parsing errors, a descriptive message will be shown below the text area.
6.  Inside the preview iframe, click the **"Print Labels"** button to open your browser's print dialog.

## Customization

-   **Label Appearance**: To change the layout, fonts, or colors of the printed labels, edit the CSS inside the `<style>` block in `utils/htmlGenerator.ts`.
-   **Data Fields**: To add, remove, or change the data displayed on the labels, modify the logic within the `generateOrderHeaderHTML` and `generateReportCardHTML` functions in `utils/htmlGenerator.ts`.
-   **Default Sample Data**: To test with a different default order, simply replace the contents of the `SAMPLE_ORDER` object in `constants.ts`.
-   **Type Definitions**: If you encounter data from the Shopify API that is not defined, update the interfaces in `types.ts` to maintain type safety and prevent build errors.
