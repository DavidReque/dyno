# @dyno/ui

A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.

## Installation

### From npm

```bash
npm install @dyno/ui
# or
yarn add @dyno/ui
# or
pnpm add @dyno/ui
```

### From GitHub Packages

1. Create a `.npmrc` file in your project root with the following content:

```
@dyno:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Set up your GitHub token as an environment variable:

```bash
export GITHUB_TOKEN=your_github_token
```

3. Install the package:

```bash
npm install @dyno/ui
# or
yarn add @dyno/ui
# or
pnpm add @dyno/ui
```

## Usage

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

## Features

- 🎨 Modern and clean design
- ♿ Accessible components following WCAG guidelines
- 📱 Fully responsive
- 🎯 TypeScript support
- 🎨 Customizable with Tailwind CSS
- 📚 Comprehensive documentation
- 🧪 Tested components
- 🔧 Easy to integrate

## Components

### General

- Accordion
- Badge
- Button
- Calendar
- DatePicker
- Modal
- Input

## Requirements

- React 18 or higher
- Tailwind CSS
- TypeScript

## Documentation

For detailed documentation and examples, visit our [Storybook](https://67d6654e18e3f22026359e64-wbgkvwqltm.chromatic.com/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
