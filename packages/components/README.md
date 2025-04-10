# @davidreque/ui

A modern, accessible, and customizable React component library built with TypeScript and Tailwind CSS.

## Installation

### From npm

```bash
npm install @davidreque/ui
# or
yarn add @davidreque/ui
# or
pnpm add @davidreque/ui
```

### From GitHub Packages

1. Create a `.npmrc` file in your project root with the following content:

```
@davidreque:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Set up your GitHub token as an environment variable:

```bash
# For Windows PowerShell
$env:GITHUB_TOKEN = "your_github_token"

# For Windows CMD
set GITHUB_TOKEN=your_github_token

# For Linux/Mac
export GITHUB_TOKEN=your_github_token
```

3. Install the package:

```bash
npm install @davidreque/ui
# or
yarn add @davidreque/ui
# or
pnpm add @davidreque/ui
```

## Usage

```tsx
import { Button, Modal, DatePicker } from "@davidreque/ui";

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
- TextInput

## Requirements

- React 18 or higher
- Tailwind CSS
- TypeScript

## Documentation

For detailed documentation and examples, visit our [Storybook](https://67d6654e18e3f22026359e64-wbgkvwqltm.chromatic.com/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
