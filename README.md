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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
"# Contact-FrontEnd" 
# Contact Signup Frontend

This is a Next.js frontend project that provides a user interface for managing contact signups.

## Requirements

- Node.js
- npm (or yarn)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/contact-signup-frontend.git
    cd contact-signup-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your backend API URL:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

5. The application should now be running at `http://localhost:3001`.

## Pages

### Sign Up Page

Accessible at `/signup`. This page allows users to sign up for the contact list. The form includes fields for:
- Name
- Address
- Phone number
- Email
- Hobbies (with a searchable dropdown)

### Admin Contacts Page

Accessible at `/admin/contacts`. This page displays a list of all contacts in the database.

## Custom Components

### HobbiesInput

A custom input component for selecting hobbies. Features include:
- Searching through a predefined list of hobbies
- Allowing arbitrary values
- Keyboard navigation
- Deleting selected hobbies with backspace

## License

This project is licensed under the MIT License.


