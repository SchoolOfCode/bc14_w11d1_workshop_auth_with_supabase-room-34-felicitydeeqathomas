# Supabase Workshop 🔑🔓

## Task 1: Authentication with Supabase

- Sign up for a Supabase account and log in to the Supabase dashboard
- Follow this guide: https://supabase.com/docs/guides/auth/quickstarts/react
- Once you’ve completed the guide, check if the signup, login, logout functionality of your React app works.
- Once you’ve created an account, try to find the newly created user in the Supabase dashboard (you can run a SQL query against the users table, or alternatively view users in your project's Auth section).
- Have a look at: https://supabase.com/docs/guides/auth

## Task 2: Authorisation with Supabase

- Using the following resources as a guide and add authorisation to the React app you created in the previous task:

  - https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts
  - https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security
  - https://supabase.com/docs/learn/auth-deep-dive/auth-policies

- What authorisation rules you choose to set up are up to you and your team.
  - For example, you could set up a "leaderboard" table that every user can read from, but can't write to.
  - Or you could set up a "todos" table and each user can only perform CRUD actions against their own todos. In other words, each user should only be able to read/write their own todos, but they should not be able to read/write another user's todos!
- You can set up tables via the SQL editor (in the Supabase dashboard). For CRUD operations (e.g. adding a new todo for the current user), you can use the Supabase client that you installed earlier ([docs](https://supabase.com/docs/reference/javascript/introduction)).

- Check if things work as expected. For example, see whether a user can read/write anything that they're not meant to be able to.

## Task 3 (optional bonus):

Building something that involves signup/login can often be a stretch goal from project week or a special milestone in your journey as a developer.

If you still have time, start a new React project in this repo (remember to `cd` into the correct directory when initialising the project, so that you don't end up with a React project inside a React project). What you build is up to you and your team, but the only requirement is that it should use authentication and authorisation.

You can treat this as a mini-hackathon 🎉, so be creative and plan/ideate as you normally would.
