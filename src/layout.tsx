import { jsxRenderer } from "hono/jsx-renderer";

export const RootLayout = jsxRenderer(({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="description" content="My App" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@2.0.0"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <title>My App</title>
    </head>
    <body>{children}</body>
  </html>
));
