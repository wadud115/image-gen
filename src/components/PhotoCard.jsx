import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";


const PhotoCard = ({photo}) => {
    return (
       <Card className="border rounded-xl">
        <div className="relative w-full aspect-square">
            <Image src={photo.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width : 1200px) 55vw, 33vw"
            className="rounded-xl object-cover"

            
            
            ></Image>

            <Chip size="sm" className="absolute right-2 top-2">{photo.category}

            </Chip>
        </div>

        <div>

            <h2 className="font-semibold">{photo.title}</h2>

        </div>

      <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p><FaHeart></FaHeart></p>
            <p>{photo.likes}</p>
            
            </div>

            <Separator orientation="vertical"></Separator>

            <div className="flex items-center gap-2">
            <p><BiDownload></BiDownload></p>
            <p>{photo.likes}</p>
            
            </div>
      </div>
       </Card>
    );
};

export default PhotoCard;