import Tile from '../../components/Tile/Tile';
import img from './Screenshot from 2024-06-02 23-48-16.png';
import './About.css'
function AboutPage() {
    return (
        <div className='about'>
            <div className='about-wrapper'>
            <Tile
            header={"About"}
            subHeader={"Something about me!"}
            img={img}
            text={"My name is Mahak Juriani, a passionate individual deeply immersed in the world of coding. Currently in my first year at Scaler School of Technology located in Bangalore, I am pursuing a Bachelor's degree in Computer Science. Beyond the realms of technology, I find solace and inspiration in painting, letting my creativity flow on canvas, and indulging in the refreshing waters of swimming and travelling"}
            position={"img-right"}
            bgColor={"red"}
            />
            </div>
        </div>
    )

}
export default AboutPage;