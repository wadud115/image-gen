

import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotoPage =  async({searchParams}) => {

    const {category} = await searchParams;

    console.log(category)

    const res = await fetch("https://image-gen-five-opal.vercel.app/data.json")

    const photos = await res.json();


    const filterCategory = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos;
    console.log(photos)

    
    return (

        
        <div>
            <h1 className='font-semibold text-2xl my-4'>All photos </h1>

            <Category></Category>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filterCategory.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
            
    );
};

export default AllPhotoPage;