import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from 'next/image';
import React from 'react';
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoDetailsPage = async({params}) => {

    const {id} = await params;

    const res = await fetch('https://image-gen-five-opal.vercel.app/data.json')

    const photos = await res.json()

    // console.log(photos)

    const photo = photos.find(p => p.id == id)

    console.log(photo)




    return (

       
       <div className="flex gap-5 bg-base-100 shadow-sm w-2xl mx-auto p-5 my-15    ">


  <div className="w-80 relative">
    <Image className="rounded-xl object-cover" src={photo.imageUrl} fill
    
    ></Image>
  </div>

  <div className="card-body space-y-4">
    <h2 className="card-title font-bold text-2xl">{photo.title}</h2>
    <p>{photo.prompt}</p>
    <p><span className='font-semibold'>Model</span>  :{photo.model}</p>
    <p><span className='font-semibold'>category:</span> <Button variant="secondary">{photo.category}</Button> </p>



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
    


  </div>


</div>


    );
};

export default PhotoDetailsPage;