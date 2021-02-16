import Head from "next/head";
import { ReactNode } from "react";

export interface LayoutProps {
   children?: ReactNode | ReactNode[];
   pageTitle: string;
}

export default function Layout ({ pageTitle, children } : LayoutProps ) {
   return (  
      <div className="bg-green-100 pt-5 text-center min-h-screen">
         <Head>
            <title>{pageTitle}</title>
         </Head>
         <header>
            <h1>Plant</h1>
         </header>
         <main>
            {children}
         </main>
         <footer>

         </footer>
      </div>
   );
}


 
