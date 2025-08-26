This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**## How to get started and how To Reproduce The Issue**

  1. Clone this repository in your local environment.
  2. After cloning, open up a terminal in the same location and run -> **npm i or npm install**
  3. Install a WordPress instance via Laragon or any preferred method.
  4. From WordPress Dashboard, go to Settings -> Permalinks and Select Post Name (ignore if already the case)
     <img width="1204" height="866" alt="image" src="https://github.com/user-attachments/assets/767952f1-c9b8-48f7-b452-2b0bdbeb6a73" />

  5. In the WordPress dashboard, go to Plugins -> Add New Plugin, then install the GraphQL Plugin and activate it.
  6. Then, go to GraphQL from WordPress Dashboard -> Settings and copy the GraphQL API endpoint.
     <img width="1584" height="784" alt="image" src="https://github.com/user-attachments/assets/c4d6c111-806b-4cf1-bd64-78f5da2eda74" />

  7. This endpoint needs to be pasted in the .env file in NextJS (ignore if already done).
  8. In the same terminal where we ran npm i, after everything's installed, run **npm run dev**
  9. Open the app, i.e **localhost:3000** and you should see the page load like this
     <img width="1920" height="970" alt="image" src="https://github.com/user-attachments/assets/4af974f7-bdbd-44b1-8441-7efde678739f" />

  10. If you see something like the above image, then your setup was set up correctly.



**##1. Scenario Description**

  This is a Next.js 14 blog application powered by a WordPress GraphQL backend.
  The app fetches posts and single-post data via GraphQL queries.

  The communication between NextJS and WordPress is handled via GraphQL.

  The app should:
    Show all posts on the homepage.
    Navigate to a single post page /[slug] when a post is clicked.
    Correctly render the featured images for each post

**##2 Expected Behavior**

✅ Running the app should:

  Correctly load posts list on Homepage.
  Clicking a post should load /[slug] with proper data
  Images load successfully from the WordPress server

**##4. Observed Behavior**

  Currently, in the buggy initial files, the posts on the homepage do not load properly. 
  The images on the posts do not load.

**##5 Hints**

  1. Try to look if the environment variables are set correctly
  2. Try to look if the Data fetching queries work properly

