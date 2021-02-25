import Link from "next/link";

export interface AppbarProps {
   title: string;
}

export default function Appbar({ title }: AppbarProps) {
   return (
      <div className="appbar shadow-lg h-10 bg-green-500 text-white p-1 min-w-full flex flex-row items-center justify-between">
         <div className="appbar-left">
            <Link href="/">
               {title}
            </Link>
         </div>
         <div className="appbar-right">
            <Link href="/about">
               about
            </Link>
         </div>
         <style jsx> {`
            
            
            
         `} </style>
      </div>
   );
}
