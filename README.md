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
