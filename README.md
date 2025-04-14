# Dyno UI Component Library

A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- ♿ Accessible components following WCAG guidelines
- 📱 Fully responsive
- 🎯 TypeScript support
- 🎨 Customizable with Tailwind CSS
- 📚 Comprehensive documentation with Storybook
- 🧪 Tested components
- 🔧 Easy to integrate

## Installation

```bash
npm install @dyno/ui
# or
yarn add @dyno/ui
```

## Quick Start

```tsx
import { Button, Modal, DatePicker } from "@dyno/ui";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <DatePicker label="Select date" />
      <Modal title="Hello" isOpen={true}>
        Content
      </Modal>
    </div>
  );
}
```

## Available Components

### General

- [Accordion](./stories/components/Accordion/Accordion.mdx)
- [Badge](./stories/components/Badge/Badge.mdx)
- [Button](./stories/components/Button/Button.mdx)
- [Calendar](./stories/components/Calendar/Calendar.mdx)
- [DatePicker](./stories/components/DatePicker/DatePicker.mdx)
- [Modal](./stories/components/Modal/Modal.mdx)
- [Input](./stories/components/Input/Input.mdx)

## Development

### Setup

1. Clone the repository:

```bash
git clone https://github.com/your-org/dyno-ui.git
cd dyno-ui
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start Storybook:

```bash
npm run storybook
# or
yarn storybook
```


## Testing

```bash
# Run tests
npm test
# or
yarn test

# Run tests with coverage
npm run test:coverage
# or
yarn test:coverage
```

## Building

```bash
# Build the library
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
