This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Debugging Sever Component in Chrome Devttools

Okay, here's a concise summary and a clear note for your `README.md` about debugging server-side Next.js components, specifically tailored for Windows/PowerShell and Chrome DevTools, incorporating the common challenges we discussed.

---

## Debugging Server-Side Next.js Components

Debugging Server Components in Next.js requires connecting a Node.js debugger to the Next.js development server. Unlike client-side components, server components execute on the Node.js server, not directly in the browser's JavaScript engine.

This guide outlines how to set up server-side debugging using Chrome DevTools, addressing common pitfalls on Windows/PowerShell.

### Setup for Debugging

1.  **Install `cross-env` (Development Dependency):**
    `cross-env` allows setting environment variables uniformly across different operating systems in your `package.json` scripts.

    ```bash
    npm install cross-env --save-dev
    # OR
    yarn add cross-env --dev
    ```

2.  **Update `package.json` Script:**
    Modify your `dev` script to start the Next.js server with the Node.js inspector enabled. Use `SET` for Windows compatibility within `package.json`.

    ```json
    // package.json
    {
      "scripts": {
        "dev": "SET NODE_OPTIONS='--inspect' && next dev"
      }
    }
    ```

    - **Note:** If port `9229` (default for inspector) is in use, Node.js will automatically try the next available port (e.g., `9230`). Pay attention to your terminal output for the exact port.

3.  **Start the Development Server:**
    Run your development server as usual.

    ```bash
    npm run dev
    ```

    You should see output similar to this in your terminal, indicating the debugger port:

    ```
    Debugger listening on ws://127.0.0.1:9230/...
    For help, see: https://nodejs.org/en/docs/inspector
    ```

    _(The port might be 9229 or another available port if 9229 is in use.)_

### Connecting Chrome DevTools

1.  **Open Chrome DevTools for Node.js:**

    - In a new Chrome tab, navigate to: `chrome://inspect`
    - **Crucially, ensure you are on the main `chrome://inspect` page, NOT `chrome://inspect/#devices` or `#pages`.**

2.  **Configure Network Targets:**

    - In the "Remote Target" section on `chrome://inspect`, click the **"Configure..."** button.
    - In the "Target discovery settings" dialog, ensure `localhost:9230` (or whatever port was shown in your terminal) is added under "Discover network targets". Click "Done".
    -
    - Chrome inspect options:

![Image](https://github.com/user-attachments/assets/dbfcba5f-c620-4c9a-a81d-3efe67921cc7)

3.  **Inspect Your Application:**

    - Your Next.js application should now appear under "Remote Target" (e.g., "Next.js Page Routing & Rendering").
    - Click the **"inspect" link/button** next to your application. This will open a **new, dedicated DevTools window**.

### Debugging Your Server-Side Code

1.  **Navigate to the "Sources" Tab:**

    - In the _new_ DevTools window (the one opened by clicking "inspect"), go to the **"Sources"** tab.

2.  **Find Your Server Components:**

    - Press **`Ctrl + P` (or `Cmd + P` on Mac)** to open the "Go to file" search bar.
    - Type the name of your server-side component file (e.g., `page.js`, `layout.js`, `route.js`, etc.).
    - **Look for entries that start with `webpack://`** (e.g., `webpack://_N_E/./app/your-path/page.js`). These are your original source files mapped by Webpack for server-side debugging.
    - Do **not** look for them under `localhost:3000` in the file tree, as that primarily represents client-side bundles.

3.  **Set Breakpoints:**

    - Once your server component file is open, click on a line number in the gutter (to the left of the code) to set a breakpoint.

4.  **Trigger the Debugger:**

    - Refresh the corresponding page in your browser (e.g., `http://localhost:3000/archive`).
    - When the server processes the request and executes the code at your breakpoint, the DevTools window will automatically pause, allowing you to inspect variables, step through code, and diagnose issues.

---

Output:

![Image](https://github.com/user-attachments/assets/8ca702f5-f430-4df8-8ac9-f750834b49b5)

## Notes

# 03_Routing_Rendering

### 140. Handling Not Found Errors and Showing Not Found pages

```
- Here, Next.js is not showing the Not-found page because we are actually find the news item if not it will return undefined, need to add a if(!newsItem) notFound(), then next.js will automatically render the closest not-found page.

- The not-found.js file can be placed for different levels of nesting - at root level and at nested levels.
```

### 141. Setting up & Using Parallel Routes

- `layout.js` will automatically receive the children prop.
- For parallel routes

```
app/
├── layout.js
├── @main/
│   └── page.js  // Content for the 'main' slot
└── @sidebar/
    └── page.js // Content for the 'sidebar' slot
```

```
// app/layout.js
export default function RootLayout({ children, sidebar, main }) {
  return (
    <html>
      <body>
        <aside>{sidebar}</aside>
        <main>{main}</main>
        {children} {/* This is the default slot */}
      </body>
    </html>
  );
}
```

### 142 Working with parallel routes & nested routes

- Next.js shows NotFound page for the parallel setup related folders, when we don't as fallback dynamic route for one (@latest/default.js, page.js), if provided to another (@archive/[year]/page.js)

- @latest/default.js is enough if page.js inside latest and default are same.

### 143. Catch All Route Segments

[Catch-All-Route-Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)

| Route Example                  | URL Path      | `slug` Parameter Value |
| ------------------------------ | ------------- | ---------------------- |
| `app/shop/[[...slug]]/page.js` | `/shop`       | `undefined`            |
| `app/shop/[[...slug]]/page.js` | `/shop/a`     | `['a']`                |
| `app/shop/[[...slug]]/page.js` | `/shop/a/b`   | `['a', 'b']`           |
| `app/shop/[[...slug]]/page.js` | `/shop/a/b/c` | `['a', 'b', 'c']`      |
