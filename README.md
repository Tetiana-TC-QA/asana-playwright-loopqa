# Asana Demo App – Playwright Assessment

Data-driven Playwright test suite in TypeScript for **The Loop QA Engineer** evaluation.

## Project Overview
This project demonstrates a clean, maintainable end‑to‑end testing framework built with:

- **Playwright** for browser automation  
- **TypeScript** for type‑safe test development  
- **Page Object Model (POM)** for reusable UI interactions  
- **JSON‑based test data** for scalable data‑driven testing  

The test suite validates that tasks appear in the correct project board column and contain the expected tags.

## Project Structure

```text
asana-pw-loopqa/
├── data/
│   └── testCasesData.json    # All 6 test scenarios as data — no test code duplication
├── pages/
│   ├── DashboardPage.ts      # Page Object: dashboard navigation + assertions
│   └── LoginPage.ts          # Page Object: login form interactions
├── tests/
│   └── board.spec.ts         # Single spec file — data-driven loop generates all 6 tests
├── playwright.config.ts
├── tsconfig.json
└── package.json
└── README.md
```

## Setup

```bash
npm init playwright@latest
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (Y/n) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

```
## Run Tests

```bash
# Headless
npx playwright test

# Headed (watch the browser)
npx playwright test --headed

# UI mode
npx playwright test --ui

# View HTML report after a run
npx playwright show-report

```
