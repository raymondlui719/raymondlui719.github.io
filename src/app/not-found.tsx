import { geistMono, geistSans } from "@/lib/fonts";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <html>
      <title>Page Not Found | Raymond Lui's Portfolio</title>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="text-center">
            <h1 className="mb-4 text-8xl font-bold">404</h1>
            <p className="mb-8 text-2xl">Oops! Page Not Found</p>
            <Link
              href="/"
              className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
