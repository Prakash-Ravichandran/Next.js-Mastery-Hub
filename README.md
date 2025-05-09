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

### 89. Adding Another Route via the File - [Notes](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/41159644#notes)

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

| FileName     |                                                        Description                                                         |
| :----------- | :------------------------------------------------------------------------------------------------------------------------: |
| page.js      |                       Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)                       |
| layout.js    |                                  Create a new layout that wraps sibling and nested pages                                   |
| not-found.js |                    Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)                     |
| error.js     |                    Fallback page for other errors (thrown by sibling pages or nested pages or layouts)                     |
| loading.js   |                 Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data                 |
| route.js     | Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format) |

### 94. Configuring Dynamic Routes & Route Parameters

/blog/a = /blog/[slug] </br>
/blog/b = /blog/[slug] </br>

- with the help of [slug/id]/page.js we canable to setup dynamic routes.
- all the page.js components will defautly receive a prop called `params.slug` can access dynamic route segment.

### 95. Exercise with 3 routes

- 3 routes /meals, /community, /meals/share has been created
- The Name of the Component isn't important, but you must export a component with the page.js file.
- Next.js is very brillant with finding dyanamic routes/static routes.

### 98. The concept of Layout

- The layout.js in the app/ will act as wrapper for the whole app.
- The layout.js in the meals/ will act as a inner wrapper for the meals/ route.
- These things happen with the help of `children` prop.

#### Note: we are not instanciating <MealsLayout>, <Layout>, Next.js will do it for us, other contents will act as a child.

### 99. Adding a custom component Layout

- According to the next.js project organization, its better to keep the components/ folder outside of the app/ because let next.js app/ deals only with routing alone.
- In next.js we can directly import images from the assets/, and its imported as an object (logoImg) and we can start assigning it to the src attribute of image.

### 100. Style your Next.js App

- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css)

- Next.js has built-in support for CSS Modules using the `.module.css` extension.

- CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions. This behavior makes CSS Modules the ideal way to include component-level CSS.

### 101. optimizing images with Next.js Image Component.

- [optimize-next-image](https://nextjs.org/docs/pages/building-your-application/optimizing/images)

```
 Native:  <img src={logoImg.src} alt="A Plate with food on it"/>
 Next.js: <Image src={logoImg} alt="A Plate with food on it"/>

```

- Advantages of `<Image/>` in Next.js:

1. set the lazy loading automatically
2. sets width, height based on the viewport size.
3. serves images in the best format that the individual browsers understand (For eg: .webp in chrome).
4. Priority attribute lets the browser to render the image as soon as possible.

- View the browser console:
  ![image](https://github.com/user-attachments/assets/6d663ca7-ca15-474b-9437-406db703b574)

- Use `priority` attribute to tell the browser that the image should be rendered as much as soon.
  ![image](https://github.com/user-attachments/assets/051d9f71-ac9e-41b8-91a7-1b4a1843b5d9)

### 105. React server components vs client components

Advantages of server components/Next.js:

1. Less size of client-side javascript code.
2. Best for SEO operation, the google web search page crawlers see the complete finished content on the web.

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

### 110. Adding a Loading Page

- This below line is responsible for creating a delay while we reload the browser refresh

```
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve,10000)) // a simple arbitrary delay - just to simulate an action that takes longer.
    return db.prepare('SELECT * FROM meals').all();
}
```

Next.js by default shows the data from the cached memory when we are switching between multiple routes, it does shows the data from the response only when we are hard reloading the page.

- loading.js is a reserved filename that provides a fallback until the data is loaded.

[Loading-reference](https://nextjs.org/docs/app/api-reference/file-conventions/loading)

### 111. Add Suspense

- we can also add suspense for specific parts of the page so that it can be shown for that portion alone.

### 112. Handling Errors

- We can have the error.js file in the specific folder so that it handles the error occured in that folder alone. Even if we add the error.js in the root it catches the error occured in the root directories.

- The Error.js will handle the layers of erros depending on where we are placing the error.js component.
- The Actual error is by default hidden by Next.js to the users to protect any information that shouldn't be exposed at any cost.

### 114. - Fix suspense not working in next.js

[fix-nextjs-suspense](https://nextjs.org/docs/app/building-your-application/deploying#streaming-and-suspense)

### 115. Throwing Not Found Errors For Individual Meals

- The notFound() from the spark-navigation calls the closest not-found.js and shows them upon the not-found meal.

```
  meal ? null : notFound();

```

### 118. Adding an Image Preview to the picker

[image-preview-reference](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)

The readAsDataURL() - doesn't return anything - not a promise, not a file but instead we get an hold of that URL thats being generated by assigning a value to onload property of the filereader object.

### 120. Introducing and server actions for handling form submisions

[Form-server-actions: reference](https://react.dev/reference/react-dom/components/form)

For a function to be named as server function we have to use it explicitly inside the first line of the function.

```
title : formData.get('title'), // the attribute here specifies the name of the html attribute

```

### 121. Storing Server Actions in separate Files

- The Next.js builder while building the project, it can't separate the client component and server component.
- we actually separated it and using them, but still after separating the server component we still use both in the same file.

### 122. Slugify to protect dangerouslySetInnerHtml

- Use XSS package to protect the scripts from cross-site scripting issues.

### 123. Add SaveMeal using Server Actions

- Meals can be saved in both the file and in database.

### 124. Managing FormSubmission status with useFormStatus() hook

```
 We are going to update the button text from submit to submitting...
 It can be done using useFormStatus() from "react-dom", but to use this we have useFormStatus to be in "use client directive".
 To implement that submit button, we should use them as a separate component with conditional rendering..
```

After this implementation, the button text changes from share meals to submitting... based on the pending status from useFormStatus hook.
![image](https://github.com/user-attachments/assets/82704ae2-9dab-4038-a9de-254e82e770e1)

### 125. Adding server side validation - useActionState

```
useActionState is a Hook that allows you to update state based on the result of a form action.

Project usage:

Client-side validation (required attribute is removed and then we can submit errors data's to backend) isn't enough because of this we need serverside validation as well.

```

Note: useActionState is used as an update version of useFormState
We will be using useFormState() hook to hold user data if any error happens

For Some Reasons React changed the useFormState() - from 'react-dom' hook to useActionState() - from 'react'.

![Image](https://github.com/user-attachments/assets/7ffa66ff-d558-4249-bf06-515e381dcbbc)

![Image](https://github.com/user-attachments/assets/d0b1951c-2c4d-4d92-aa5a-e1ce556057be)

![Image](https://github.com/user-attachments/assets/486dc62f-295c-4296-9f56-c1b0da9ebb0d)

useActionState ref: [useActionState](https://react.dev/reference/react/useActionState)

### 126, 127 - Build for Production and revalidatePath

- While running `npm run build`, next.js pre-renders all the pages which can be pre-fetched during the build process.
- Next.js then caches the pages and never revalidates that pages unless we say next.js using - [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- By Default the revalidatePath() function only validates pages directly childrens, to validate nested pages add 'layout' as a second argument.

![Image](https://github.com/user-attachments/assets/79034259-1f30-45ba-a884-a0d69a72447f)

- After adding revalidatePath('/meals'), the console.log('fetching') gives output, now it refetches.
