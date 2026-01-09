
---

```md
# Contributing to Modern Kitchen 🍽️

Thank you for your interest in contributing to **Modern Kitchen**!  
We welcome contributions that help improve features, fix bugs, enhance performance, or improve documentation while maintaining high code quality and security standards.

---

## 📌 Project Overview

**Modern Kitchen** is a web-based platform that connects professional chefs with housewives and home cooks.  
It enables chef booking, scheduled cooking sessions, and AI-powered on-call recipe assistance.

The platform uses:
- **Clerk** for authentication, user management, webhooks, and payments
- **Prisma ORM** for database access
- **PostgreSQL** hosted on **NeonDB**

---

## 🛠 Tech Stack

- **Frontend**: React / Next.js
- **Backend**: Node.js
- **Authentication & Payments**: Clerk
- **Database**: PostgreSQL (NeonDB)
- **ORM**: Prisma
- **AI Assistant**: Riley (AI Chef Assistant)

---

## 📂 Repository Structure

```

/app or /src        → Frontend and API routes
/prisma             → Prisma schema and migrations
/webhooks           → Clerk webhook handlers
/components         → Reusable UI components
/lib                → Shared utilities and helpers

````

---

## 🚀 Getting Started

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/your-username/modern-kitchen.git
cd modern-kitchen
````

---

### 2. Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

### 3. Environment Variables Setup

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://<neondb-connection-url>
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
```

⚠️ **Never commit `.env` files or secrets to the repository.**

---

### 4. Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev
```

To view the database:

```bash
npx prisma studio
```

---

## 🔐 Clerk & Webhook Guidelines

* Always verify webhook signatures using `CLERK_WEBHOOK_SECRET`
* Ensure webhook handlers are **idempotent**
* Do not expose Clerk secrets on the client side
* Test webhook flows locally before merging changes

---

## 🧑‍🍳 AI Chef Assistant (Riley)

When contributing to AI-related logic:

* Keep prompts clear and deterministic
* Avoid hardcoding sensitive data
* Ensure responses are safe and user-friendly
* Handle edge cases and ambiguous inputs gracefully

---

## 🧪 Testing Guidelines

Before submitting a Pull Request:

* Test user authentication flows (signup, login, logout)
* Verify chef booking and scheduling flows
* Confirm Prisma migrations work correctly
* Validate webhook handling logic
* Ensure no runtime or console errors

---

## 🧼 Code Style & Best Practices

* Use meaningful variable and function names
* Keep components small and reusable
* Follow separation of concerns
* Use Prisma for **all** database access
* Handle async errors properly
* Avoid business logic inside UI components

---

## 🌱 Branching Strategy

* `main` → Production-ready code
* `feature/*` → New features
* `fix/*` → Bug fixes
* `refactor/*` → Code improvements

Example:

```bash
git checkout -b feature/chef-availability
```

---

## 📥 Pull Request Guidelines

1. Keep PRs focused and small
2. Clearly describe the changes made
3. Reference related issues if applicable
4. Ensure the project builds successfully
5. Do not include secrets, logs, or test data

### PR Title Format

```
feat: add chef availability filter
fix: resolve Clerk webhook duplication issue
refactor: improve booking service logic
```

---

## 🐛 Reporting Issues

When opening an issue, include:

* Clear description of the problem
* Steps to reproduce
* Expected vs actual behavior
* Screenshots or logs if available

---

## 🔒 Security Policy

* Do not disclose security issues publicly
* Avoid exposing sensitive data
* Follow Clerk and NeonDB security best practices
* Report vulnerabilities responsibly

---

## 🤝 Code of Conduct

* Be respectful and constructive
* No harassment or abusive behavior
* Maintain a professional environment
* Collaborate openly and responsibly

---

## 🙌 Thank You

Thank you for helping improve **Modern Kitchen**!
Your contributions make the platform better for chefs and home cooks alike. 🚀

```

