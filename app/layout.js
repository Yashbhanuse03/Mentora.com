import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "../containers/theme-provider";
import Header from "../components/header";




import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const inter  = Inter( {subset : ["latin"]});


export const metadata = {
  title: "Mentora.com",
  description: "Mentora is an AI-generated platform for students preparing for interviews",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> 
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen bg-black text-white">
            {children}
          </main>
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with ❤️ by Mentora</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

