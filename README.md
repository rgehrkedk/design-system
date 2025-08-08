# Design System

A modern React design system built with Turborepo, featuring CSS modules and Storybook for component documentation and testing.

## 🚀 Features

- **Turborepo Monorepo**: Efficient build system and dependency management
- **React Components**: Modern React components with TypeScript support
- **CSS Modules**: Scoped styling with CSS modules for maintainable styles
- **Storybook**: Interactive component documentation and testing
- **Remote Access**: Storybook configured for remote localhost testing

## 📦 Project Structure

```
design-system/
├── .storybook/          # Storybook configuration
├── packages/
│   ├── ui/              # UI components library
│   │   ├── src/
│   │   │   ├── button.js       # Button component
│   │   │   ├── styles/         # CSS modules
│   │   │   └── stories/        # Storybook stories
│   │   └── package.json
│   ├── eslint-config/   # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
├── package.json         # Root package.json with workspace config
└── turbo.json          # Turborepo configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start Storybook (available on localhost:6006 and remotely on 0.0.0.0:6006)
npm run storybook

# Build all packages
npm run build

# Run linting
npm run lint

# Type checking
npm run check-types
```

## 🎨 Components

### Button Component

A versatile button component with multiple variants, sizes, and states.

**Variants:**
- `primary` - Blue button for primary actions
- `secondary` - Gray button for secondary actions  
- `outline` - Outlined button for subtle actions
- `ghost` - Transparent button for minimal UI

**Sizes:**
- `small` - Compact button
- `medium` - Default size
- `large` - Prominent button

**Props:**
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'` - Button style variant
- `size?: 'small' | 'medium' | 'large'` - Button size
- `fullWidth?: boolean` - Make button full width
- `disabled?: boolean` - Disable the button
- `className?: string` - Additional CSS classes
- `children: ReactNode` - Button content

**Usage:**

```jsx
import { Button } from '@design-system/ui/button.js';

// Basic usage
<Button>Click me</Button>

// With variants and sizes
<Button variant="secondary" size="large">
  Large Secondary Button
</Button>

// Full width
<Button fullWidth>
  Full Width Button
</Button>
```

## 🎭 Storybook

The design system includes comprehensive Storybook documentation with:

- Interactive component playground
- All component variants and states
- Auto-generated documentation
- Responsive design testing
- Accessibility testing

### Remote Access

Storybook is configured to be accessible remotely:
- Local: `http://localhost:6006`
- Remote: `http://0.0.0.0:6006`

This allows testing from different devices on the same network.

## 🏗️ Building

```bash
# Build all packages
npm run build

# Build Storybook for production
npm run build-storybook
```

## 🎯 CSS Modules

The design system uses CSS modules for component styling:

- Scoped styles prevent CSS conflicts
- Readable class names in development
- Optimized for production builds
- Full TypeScript support

Example CSS module structure:
```css
.button {
  /* Base button styles */
}

.primary {
  /* Primary variant styles */
}

.small {
  /* Small size styles */
}
```

## 🚀 Deployment

The Storybook can be deployed to any static hosting service:

1. Build Storybook: `npm run build-storybook`
2. Deploy the `storybook-static` folder

## 🤝 Contributing

1. Add new components to `packages/ui/src/`
2. Create corresponding CSS modules in `packages/ui/src/styles/`
3. Write Storybook stories in `packages/ui/src/stories/`
4. Update documentation and examples

## 📄 License

This project is licensed under the MIT License.
