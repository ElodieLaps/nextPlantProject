import image from 'next/image';
import Image from 'next/image';

export interface PlantProps {
   common_name: string;
   image_url: string;
}

export default function Plant({ common_name, image_url }: PlantProps) {
   return (
      <div>
         <h2>{common_name}</h2>
         <img
            src={image_url}
            alt={common_name}
         />
      </div>
   );
}

