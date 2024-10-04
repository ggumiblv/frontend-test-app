import Link from 'next/link';
import React from  'react'

const Index = () => {
    return (
        <div> 
            <h1>Hello, World!</h1>
            <Link href={'/register'}> Зарегистрироваться </Link>
        </div>
    );
};

export default Index;
