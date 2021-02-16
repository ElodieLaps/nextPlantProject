import Head from "next/head";
import { ReactNode } from "react";
import Appbar from "./Appbar";
import Footer from "./Footer";

export interface LayoutProps {
   children?: ReactNode | ReactNode[];
   pageTitle: string;
}

export default function Layout({ pageTitle, children }: LayoutProps) {
   return (
      <div className="layout min-w-full">
         <Head>
            <title>{pageTitle}</title>
         </Head>

         <header className="">
            <Appbar title={"Plant"} />
         </header>
         <main className="flex flex-col justify-center">{children}</main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
}



