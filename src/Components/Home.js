import { useEffect, useState } from 'react';
import '../App.css';

const imageUrl = 'https://transitionbydesign.org/wp-content/uploads/2020/06/manorfarm-base.png'

const Home = () => {
    return (
        <>
            <img className='center' src={imageUrl} alt='backgroundImg' />

        </>
   );
}

export default Home