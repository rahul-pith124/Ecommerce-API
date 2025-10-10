# Ecommerce-API

Simple ecommerce backend built with NestJS and Prisma. This repository focuses on building a REST API first and can be extended with a frontend (EJS/React/Vue) later.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Quickstart](#quickstart)
- [Environment variables](#environment-variables)
- [Database / Prisma](#database--prisma)
- [API overview](#api-overview)
- [Running tests & lint](#running-tests--lint)
- [Publish your solution](#publish-your-solution)
- [Contributing & Developer guide](#contributing--developer-guide)
- [Code of Conduct](#code-of-conduct)
- [Contact](#contact)

## Features

- User authentication (signup, login) with JWT
- Product listing, search and detail
- Cart: add product, remove product, view cart
- Checkout flow (order creation) and placeholder for payment integration
- Admin endpoints for managing products, prices and inventory (protected)
- API served under a versioned prefix: `/api/v1`

## Tech stack

- Node.js + NestJS
- TypeScript
- Prisma (recommended DB: PostgreSQL)
- class-validator / class-transformer for request validation

## Quickstart

Prerequisites: Node 18+ (or LTS), npm, PostgreSQL (or another supported DB)

1. Install dependencies

```powershell
npm install
```

2. Create `.env` in the project root and set the variables (see below)

3. Generate Prisma client and run migrations

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

4. Start the app

```powershell
npm run start:dev
```

The API will be available at: http://localhost:3000/api/v1

## Environment variables

Create a `.env` file in the project root with at least:

```
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
PORT=3000
JWT_SECRET=your_jwt_secret_here
```

Do not commit `.env` to source control. Add it to `.gitignore`.

## Database / Prisma

- Prisma schema: `prisma/schema.prisma`
- Generate client: `npx prisma generate`
- Create migrations during development: `npx prisma migrate dev --name <name>`
- View DB data: `npx prisma studio`

## API overview

All routes are prefixed with `/api/v1`.

Auth

- POST /api/v1/auth/signup — create a new user
- POST /api/v1/auth/login — login and receive JWT

Products

- GET /api/v1/products — list products (supports `?q=` search)
- GET /api/v1/products/:id — product details
- (admin) POST /api/v1/admin/products — create product
- (admin) PUT /api/v1/admin/products/:id — update product
- (admin) DELETE /api/v1/admin/products/:id — delete product

Cart

- POST /api/v1/cart — add product to cart (body: { productId, quantity })
- DELETE /api/v1/cart/:itemId — remove product from cart
- GET /api/v1/cart — view current user's cart

Checkout / Orders

- POST /api/v1/checkout — create order from cart and trigger payment (placeholder)
- GET /api/v1/orders — list user orders

Admin

- Admin endpoints are protected with role-based guards or admin-only JWT claims.

Payment

- Placeholder for payment integration (e.g., Stripe). Implement in the `checkout` flow.

## Running tests & lint

```powershell
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Lint
npm run lint

# Format
npm run format
```

## Publish your solution (step-by-step)

Follow these steps to create a public GitHub repository, push this project, add the project page URL to the README, and share your solution for review.

1. Quick local checks

```powershell
git status
git branch --show-current
git remote -v
```

If your branch is not `main`, rename or switch to it:

```powershell
git branch -M main
```

2. Create a public GitHub repo and push (two options)

- Option A — GitHub CLI (recommended if you have `gh` installed and authenticated):

```powershell
# login if needed
gh auth login

# create a public repository from the current folder and push
gh repo create <your-username>/<repo-name> --public --source . --remote origin --push
# example:
gh repo create rahul-pith124/Ecommerce-API --public --source . --remote origin --push
```

- Option B — GitHub web UI:

1. Open https://github.com/new and create a new public repo (name it e.g. `Ecommerce-API`).
2. On the new repo page GitHub shows commands to push an existing repo. Run the shown commands (example):

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. Add the project page URL to `README.md`

After pushing, the repo URL will be https://github.com/<your-username>/<repo-name>. Add that URL near the top of `README.md` so visitors can find the project page.

Commit and push the README change:

```powershell
git add README.md
git commit -m "docs: add project page URL"
git push
```

4. Submit / Share your solution

- Create a release: GitHub → Releases → Draft a new release, add notes and publish.
- Or share the repository link in relevant communities, Slack channels, or class portals so others can review it.

Security reminder

- Ensure your `.env` and any secrets are in `.gitignore` before pushing. Do not commit API keys or credentials.
- If secrets were accidentally committed, rotate them immediately and follow GitHub's guidance to remove them from history.

## Contributing & Developer guide

Thank you for your interest in contributing! This section explains how to set up the project locally, run tests, contribute changes, and follow repository conventions so your pull requests are easy to review.

If you are new to the project, please open an issue first describing the feature or bug you want to work on — this helps avoid duplicate work.

### 1) Quick-start: get the project running locally

Prerequisites:

- Node 18+ (or project-supported LTS)
- npm
- PostgreSQL (recommended) or another DB supported by Prisma

Steps:

```powershell
# Clone the repo (if you haven't already)
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Create .env file and set DATABASE_URL, PORT, JWT_SECRET, etc.
# Example .env:
# DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
# PORT=3000
# JWT_SECRET=replace_with_secure_secret

# Generate Prisma client and run migrations
npx prisma generate
npx prisma migrate dev --name init

# Start the app in dev mode
npm run start:dev
```

The API will be available at http://localhost:3000/api/v1 by default.

### 2) Database & Prisma notes

- Schema lives in `prisma/schema.prisma`.
- Use `npx prisma migrate dev --name descriptive_name` to create migrations during development.
- Use `npx prisma studio` to inspect DB data in a browser.
- Remember to run `npx prisma generate` after schema changes.

### 3) Running tests and lint

```powershell
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run lint
npm run lint

# Check formatting
npm run format
```

Add tests for new features and ensure existing tests pass before opening a PR.

### 4) Branching and commit conventions

- Use a feature branch for work: `git checkout -b feat/<short-description>` or `git checkout -b fix/<short-description>`.
- Keep branches small and focused. Rebase or squash as needed.
- Use Conventional Commits for messages, e.g.:

```
feat(auth): add signup route and password hashing
fix(cart): handle zero-quantity removal
docs: update README with publish instructions
```

### 5) Code style and linters

- This repo uses ESLint and Prettier. Please run linters/formatters before committing.
- Consider installing editor extensions for ESLint and Prettier and enable the workspace settings in `.vscode`.

Suggested local checks before committing:

```powershell
npm run lint
npm run format
```

### 6) Pull Request process / checklist

When your change is ready, open a PR against `main`. Include a clear description and reference any related issues.

PR checklist for contributors:

- [ ] The branch is up-to-date with `main`.
- [ ] Tests added/updated and passing.
- [ ] Linting and formatting issues resolved.
- [ ] Database migrations included (if schema changes).
- [ ] Relevant documentation (README, comments) updated.
- [ ] No secrets or credentials committed.

Reviewers will request changes or merge the PR once it's approved.

### 7) Reporting issues

- Open an issue with a clear title, steps to reproduce (if bug), and expected vs actual behavior.
- Add logs, stack traces or screenshots when appropriate.

### 8) Security

- Do not commit `.env` files or secrets. Add them to `.gitignore`.
- If you accidentally commit secrets, rotate them immediately and follow GitHub's guide to remove secrets from history.

### 9) Code of Conduct

Be respectful and constructive. If you plan to contribute, you agree to follow the project's Code of Conduct. If you'd like, we can add a CONTRIBUTING.md and CODE_OF_CONDUCT.md to this repo.

### 10) Help/Contact

If you need help getting started, comment on an issue or open a discussion in the repository. You can also request that maintainers assign the issue to you.

