import React from 'react';

const PhotoDetailsPage = async({params}) => {

    const {id} = await params;

    const res = await fetch('https://image-gen-five-opal.vercel.app/data.json')

    const photos = await res.json()

    // console.log(photos)

    const photo = photos.find(p => p.id = id)

    console.log(photo)




    return (
        <div>
            <h1>Photo</h1>

            <div>title : {photo.title}</div>
            <h2>{photo.prompt}</h2>
            
        </div>
    );
};

export default PhotoDetailsPage;