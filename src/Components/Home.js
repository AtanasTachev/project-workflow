import ProjectList from './project/ProjectList/ProjectList'
import '../App.css';

const imageUrl = 'https://transitionbydesign.org/wp-content/uploads/2020/06/manorfarm-base.png'

const Home = () => {
    return (
        <>
         <ProjectList />
            <img className='center' src={imageUrl} alt='backgroundImg' />
        </>
   );
}

export default Home