import { useEffect, useState } from 'react';
import ProjectList from '../Components/project/ProjectList'
import '../App.css';

const imageUrl = 'https://transitionbydesign.org/wp-content/uploads/2020/06/manorfarm-base.png'

const Home = () => {
    return (
        <>
         <ProjectList />
            <img className='center' src={imageUrl} alt='backgroundImg' />
            {/* {projects.map(project => <ProjectList />)} */}
        </>
   );
}

export default Home