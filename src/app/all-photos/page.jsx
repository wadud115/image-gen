import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotoPage =  async() => {

    const res = await fetch("https://image-gen-five-opal.vercel.app/data.json")

    const photos = await res.json();
    console.log(photos)

    
    return (
        <div>
            <h1 className='font-semibold text-2xl my-4'>All photos </h1>

            <div className='grid grid-cols-4 gap-3'>
                {photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
            
    );
};

export default AllPhotoPage;