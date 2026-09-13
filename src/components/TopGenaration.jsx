import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenaration = async() => {
    const res = await fetch('https://image-gen-five-opal.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos)

    const topPhotos = photos.slice(0,8)

    console.log(topPhotos)
    return (
        <div>
            <h1 className='font-bold text-2xl my-5'>Top Genaration</h1>

            <div className='grid grid-cols-4 gap-3'>
                {topPhotos.map( photo => <PhotoCard key={photo.id}  photo={photo}></PhotoCard>  )}
            </div>

            
        </div>
    );
};

export default TopGenaration;