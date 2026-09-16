import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {

    const res = await fetch('https://image-gen-five-opal.vercel.app/category.json')

    const categories = await res.json();

    // console.log(categories)
    return (
        <div className='mb-5 space-x-2 '>

            {categories.map(category => <Link href={`?category=${category.name.toLowerCase()}`} key={category.id}><Button variant='outline' size='sm'  >{category.name}</Button></Link>)}
        
        </div>
    );
};

export default Category;