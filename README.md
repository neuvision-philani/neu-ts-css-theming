# neu-ts-css-theming

Reusable **TypeScript and CSS theming utilities** for Angular and similar applications.  
This package provides a collection of helper functions and styles designed to streamline theming, promote consistency, and ensure best practices in UI development.

---

## 📦 Installation

```bash
npm install neu-ts-css-theming
```

```typescript
import * as themeUtils from 'neu-ts-css-theming';
```

Example usage:
```typescript
themeUtils.applyTheme('dark'); // Applies the dark theme across your app
```

## 📖 Introduction

This library contains reusable TypeScript functions and CSS utilities commonly used for theming in JavaScript and Angular projects.  
They are designed to:

- Simplify theme management and switching
- Improve consistency in UI appearance
- Ensure maintainability and scalability of styles

## 🧩 Function & Utility Categories

1. Theme Management Functions
  - Description: Helpers for switching, applying, and managing themes.
  - Usage: Easily toggle between light, dark, or custom themes.

2. CSS Utility Classes
  - Description: Predefined CSS classes for common UI patterns.
  - Usage: Apply consistent styles across components.

3. Dynamic Style Functions
  - Description: Functions for generating and applying dynamic styles.
  - Usage: Customize UI elements based on user preferences or app state.

4. Validation Functions
  - Description: Validate theme configurations and CSS variables.
  - Usage: Ensure robust and error-free theming.

5. Event Handling Functions
  - Description: Manage theme-related events and user interactions.
  - Usage: Respond to theme changes and update UI accordingly.

## ✅ Best Practices

- Reusability: Write generic theming utilities to maximize cross-app reusability.
- Naming Conventions: Use descriptive names for readability and easier debugging.
- Testing: Always create unit tests to ensure reliability and prevent regressions.

## 🔧 Troubleshooting

- Common issues you may encounter:
  - Scope problems: Ensure utilities are imported/exported correctly.
  - CSS conflicts: Verify class names and variable usage.
  - Debugging tips: Use browser dev tools to inspect applied styles and theme changes.

## 📌 Versioning

- This package follows semantic versioning (SemVer).
- Breaking changes will be documented in release notes.
- Keep utilities updated when upgrading Angular, TypeScript, or CSS frameworks to maintain compatibility.

## 💬 Contact & Support

- Issues / Bugs: Open a GitHub Issue
- Contributions: Fork the repo and submit pull requests
- Community: Join the discussions in the repository

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

