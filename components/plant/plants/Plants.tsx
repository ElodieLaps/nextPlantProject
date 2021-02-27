import Plant from '../plant/Plant';

export interface PlantType {
   id: number;
   common_name: string;
   image_url: string;
}

export interface PlantsProps {
   plants: Array<PlantType>;
}

export default function Plants({ plants }: PlantsProps) {
   return (
      <div className="plants">
         {plants.map((plant: PlantType) =>
            <Plant
               key={plant.id}
               common_name={plant.common_name}
               image_url={plant.image_url}
            />
         )}
      </div>
   );
}

