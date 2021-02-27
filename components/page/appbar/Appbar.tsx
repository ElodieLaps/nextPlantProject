import Link from "next/link";

export interface AppbarProps {
   title: string;
}

export default function Appbar({ title }: AppbarProps) {
   return (
      <div className="appbar">
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
      </div>
   );
}
