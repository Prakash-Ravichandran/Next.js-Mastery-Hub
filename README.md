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

### 89. Adding Another Route via the File  - [Notes](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41159644#notes)

```
React App:
In a React App, we can't able to see the content of the webpage in the source code displayed 
in the browser this is because the React manipulates the code inside the browser and runs 
inside the browser.

Next App:
In a Next App, the content is visible in the webpage, so that the page scrawler can find the actual content and its good for the SEO purpose.
Here, the entire HTML in rendered in the sever and returned to the client side.

```


### 90. Navigating Between the pages - Wrong & Right Solution

```
<a>:

Using <a> anchor tags as links, changes our concept of SPA -> Multiple pages, reloads the UI, vanishes the state.

<Link>

Using the <Link> tag it ensures that the browser doesn't reloads, maintains the state.

```

### 91. Working with Pages & Layouts


```

why & how the <head> tag is injected by next.js 

metadata = {
    title: "NextJS Course App",
    description: 'Your first NextJS app !',
    ...other properties,
}

metadata={} is a reserved keyword for setting up heading and metadata related fields that should an object with essential props.
will then applied to all pages that are covered by that layout.

So, that's why we don't have the head section here,simply because all the content that goes into head is set with that metadata,
or automatically behind the scenes by NextJS.

```


### 92. Reserved File Names, Custom Components & How To Organize A NextJS Project
[course - Next.js Filename Conventions](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41161954#notes) <br/>
[Next.js Docs- Filename Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)<br/>
[Project Organization](https://nextjs.org/docs/app/building-your-application/routing/colocation)<br/>

```
page.js, layout.js are the Reserved File Names which has special features like Routable, 
<br>Layouted etc, other than components.

we can have a components folder inside the app folder, so that the header.js file is not 
treated as a routable.
Even we can move them outside of the app folder.

```
Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

| FileName    | Description |
| :---        |    :----:   |  
| page.js     | Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)       | 
| layout.js   | Create a new layout that wraps sibling and nested pages        | 
| not-found.js | Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts) |
| error.js |   Fallback page for other errors (thrown by sibling pages or nested pages or layouts) |
|loading.js | Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data |
|route.js | Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format) |


### 94. Configuring Dynamic Routes & Route Parameters

/blog/a = /blog/[slug] </br>
/blog/b = /blog/[slug] </br>

- with the help of [slug/id]/page.js we canable to setup dynamic routes.
- all the page.js components will defautly receive a prop called ```params.slug``` can access dynamic route segment.


### 95. Exercise with 3 routes

- 3 routes /meals, /community, /meals/share has been created
- The Name of the Component isn't important, but you must export a component with the page.js file.
- Next.js is very brillant with finding dyanamic routes/static routes.

### 98. The concept of Layout

- The layout.js in the app/ will act as wrapper for the whole app.
- The layout.js in the meals/ will act as a inner wrapper for the meals/ route.
- These things happen with the help of ```children``` prop.
#### Note: we are not instanciating <MealsLayout>, <Layout>, Next.js will do it for us, other contents will act as a child.

### 99. Adding a custom component Layout

- According to the next.js project organization, its better to keep the components/ folder outside of the app/  because let next.js app/ deals only with routing alone.
- In next.js we can directly import images from the assets/, and its imported as an object (logoImg) and we can start assigning it to the src attribute of image.


### 100. Style your Next.js App

- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css)


- Next.js has built-in support for CSS Modules using the ```.module.css``` extension.

- CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions. This behavior makes CSS Modules the ideal way to include component-level CSS.

### 101. optimizing images with Next.js Image Component.

- [optimize-next-image](https://nextjs.org/docs/pages/building-your-application/optimizing/images)

```
 Native:  <img src={logoImg.src} alt="A Plate with food on it"/>
 Next.js: <Image src={logoImg} alt="A Plate with food on it"/>

```
- Advantages of ```<Image/>``` in Next.js:

1. set the lazy loading automatically
2. sets width, height based on the viewport size.
3. serves images in the best format that the individual browsers understand (For eg: .webp in chrome).
4. Priority attribute lets the browser to render the image as soon as possible. 

- View the browser console:
![image](https://github.com/user-attachments/assets/6d663ca7-ca15-474b-9437-406db703b574)

- Use ```priority``` attribute to tell the browser that the image should be rendered as much as soon.
![image](https://github.com/user-attachments/assets/051d9f71-ac9e-41b8-91a7-1b4a1843b5d9)

### 105. React server components vs client components

Advantages of server components/Next.js:

1. Less size of client-side javascript code.
2. Best for SEO operation, the google web search page crawlers see the complete finished content  on the web.

Note: By default, all React components (in next.js) are react server components.

Client component: (Explicitly tell next.js that its a client component by using "use client" ).

1. Browser API - setInterval, setTimeout>
2. Events - onClick() / other events.
3. useState(), useEffect Hooks must be exevuted on the browser/ client side.

### 107. Outputting Meals Data & Images with Unknown Dimensions.


The Next.js Image tag optimizes the height and width of the image that is available at the build time only. </br>
But during run time it cannot handle the image if it is coming from a database.

Solution: use "fill" as a prop.

In case of not knowing the width and height of the image in advance. The only solution is to use the fill prop.

### 108. Introduce SQLite package 

- [better-sqlite3](https://www.npmjs.com/package/better-sqlite3)


### 109. Fetching Data By Leveraging NextJS & Fullstack Capabilities

- All() is used when your fetching data.
- run() is used when you are modifying data.




