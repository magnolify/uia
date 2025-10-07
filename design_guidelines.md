# Shopify Report Card Generator - Design Guidelines

## Design Approach: Shopify Admin Integration (Design System)

**Selected Framework**: Shopify Polaris Design System adapted for dark theme
**Rationale**: As a Shopify Admin Extension, the interface should feel native to the Shopify admin environment while maintaining utility-focused design principles for efficient order fulfillment workflows.

## Core Design Principles

1. **Functional Clarity**: Every element serves a clear purpose in the label generation workflow
2. **Data Visibility**: Order information and JSON input are immediately scannable
3. **Print Accuracy**: Preview must precisely represent final printed output
4. **Mode Differentiation**: Clear visual distinction between Live and Developer modes

## Color Palette

### Dark Mode (Primary Interface)
- **Background Base**: 17 7% 15% (deep charcoal)
- **Surface**: 17 7% 20% (elevated panels)
- **Surface Elevated**: 17 7% 25% (cards, modals)
- **Border**: 17 7% 30% (subtle divisions)
- **Text Primary**: 0 0% 98% (high contrast white)
- **Text Secondary**: 0 0% 71% (muted text)
- **Text Tertiary**: 0 0% 55% (labels, captions)

### Accent Colors
- **Primary Action**: 142 76% 36% (Shopify green for generate/print actions)
- **Primary Hover**: 142 76% 32%
- **Success State**: 142 71% 45% (successful generation)
- **Error State**: 0 84% 60% (JSON parsing errors)
- **Warning**: 38 92% 50% (validation warnings)
- **Info**: 217 91% 60% (dev mode indicators)

### Print Preview Context
- **Preview Background**: 0 0% 12% (screen preview dark bg)
- **Label Cards**: 0 0% 100% (pure white for print accuracy)
- **Print Text**: 0 0% 0% (pure black for print output)

## Typography

### Font Stack
- **Primary**: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif
- **Monospace**: 'SF Mono', 'Roboto Mono', 'Consolas', monospace (for JSON input)

### Type Scale
- **Display/Order Header**: 24px / 600 weight / -0.02em tracking
- **Section Headers**: 18px / 600 weight / -0.01em tracking  
- **Body Text**: 14px / 400 weight / normal tracking
- **Labels/Captions**: 12px / 500 weight / 0.01em tracking
- **JSON Input**: 13px / 400 weight / monospace (for code readability)

## Layout System

### Spacing Primitives
**Consistent Units**: Use Tailwind spacing of 2, 3, 4, 6, 8, 12, 16 for all layouts
- `p-4`: Standard padding for cards and containers
- `gap-6`: Default gap between related elements
- `space-y-8`: Vertical rhythm between sections
- `m-2`: Tight spacing for inline elements

### Grid Structure

**Developer Mode Layout** (Split View):
- Left Panel (JSON Input): 40% width, fixed on large screens
- Right Panel (Preview): 60% width, flexible
- Responsive: Stack vertically on mobile (< 768px)

**Live Mode Layout** (Single Column):
- Full-width preview container
- Centered controls (max-w-7xl)

### Component Spacing
- Header height: 64px (h-16)
- Panel padding: 24px (p-6)
- Card padding: 16px (p-4)
- Button spacing: 12px gap (gap-3)

## Component Library

### Header Component
- **Structure**: Full-width dark bar with app title and mode indicator
- **Title**: 18px semibold, Shopify green accent
- **Mode Badge**: Rounded pill with info blue (Dev Mode) or green (Live Mode)
- **Height**: 64px with flex centering

### Developer Mode Panel (OrderInput)
- **Container**: Dark surface card (bg-slate-800) with rounded corners (rounded-lg)
- **JSON Textarea**: 
  - Monospace font, 13px
  - Min-height: 400px on desktop, 300px on mobile
  - Dark background (bg-slate-900) with light gray text
  - Border: 1px subtle (border-slate-700)
  - Focus state: 2px Shopify green border
- **Generate Button**: 
  - Full-width on mobile, auto-width on desktop
  - Shopify green background with white text
  - 40px height, rounded-md

### Settings Panel
- **Toggle Switches**: Shopify-style toggles with green active state
- **Compact Layout**: Minimal vertical space, aligned labels
- **Positioned**: Top-right corner or collapsible sidebar

### Print Preview (Iframe Container)
- **Container**: Full height with dark preview background
- **Iframe**: 
  - Border: 1px border-slate-700
  - Rounded corners: rounded-lg
  - Shadow: lg shadow for depth
  - Width: 100% with max constraints
- **Loading State**: Centered spinner with "Generating preview..." text

### Label Cards (Generated HTML)
- **Dimensions**: 5.5" × 8.5" landscape orientation
- **Screen Styles**:
  - White background on dark preview
  - 16px padding, rounded corners
  - Drop shadow for elevation
  - Black text for contrast
- **Print Styles** (@media print):
  - Remove all backgrounds
  - Force black text, white background
  - Height: 100vh per card
  - page-break-after: always
  - Remove shadows and borders

### Error/Success Messages
- **Error Toast**: Red background (error-state color), white text, rounded corners
- **Success Indicator**: Green background, checkmark icon, brief animation
- **Validation Messages**: Below input field, 12px red text

### Icons
- **Library**: Heroicons (outline style for actions, solid for states)
- **Size**: 20px for buttons, 16px for inline indicators
- **Color**: Inherit from parent or explicit state colors

## Print-Specific Design

### Order Header Card
- **Layout**: Full-page summary with order details
- **Sections**: Order info, shipping address, line items summary
- **Typography**: Clear hierarchy with bold order numbers
- **Whitespace**: Generous padding for scannability

### Individual Label Cards  
- **Number Badge**: Top-right corner, circled, showing "1 of 6" format
- **Product Info**: Large, bold product title
- **Properties Grid**: 2-column layout for dimensions/attributes
- **Install Location**: Prominent placement, italic style
- **Project Name**: Top section, uppercase, tracked spacing

## Interaction States

### Buttons
- **Default**: Solid green background, white text
- **Hover**: Darken 8%, subtle scale (1.02)
- **Active**: Darken 12%, scale (0.98)
- **Disabled**: 50% opacity, no pointer events

### Input Fields
- **Default**: Dark background, subtle border
- **Focus**: 2px Shopify green border, remove shadow
- **Error**: Red border with shake animation
- **Disabled**: 60% opacity, muted text

### Loading States
- **Button**: Replace text with spinner, maintain dimensions
- **Preview**: Skeleton screen with pulsing animation
- **Overlay**: Semi-transparent backdrop with centered spinner

## Accessibility Considerations

- **Contrast Ratios**: Minimum 4.5:1 for body text, 7:1 for headers
- **Focus Indicators**: Visible 2px green outline on all interactive elements
- **Keyboard Navigation**: Tab order follows logical flow (JSON input → Generate → Preview)
- **Screen Reader Labels**: Descriptive aria-labels for mode toggles and actions
- **Error Announcements**: Live region updates for validation errors

## Responsive Behavior

### Mobile (< 768px)
- Stack panels vertically (JSON input above preview)
- Full-width buttons
- Reduce padding (p-3 instead of p-6)
- Hide secondary controls, show in hamburger menu

### Tablet (768px - 1024px)
- Maintain split layout at 50/50
- Slightly reduced preview size
- Preserve all functionality

### Desktop (> 1024px)
- Optimal 40/60 split for Dev Mode
- Full-height preview iframe
- Side-by-side controls and actions