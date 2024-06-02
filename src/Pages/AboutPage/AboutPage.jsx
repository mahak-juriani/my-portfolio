import Tile from '../../components/Tile/Tile';

function AboutPage() {
    return (
        <div className='About'>
            <Tile
            header={"About"}
            subHeader={"This is where you can describe about yourself. The more you describe about yourself, the better it is!"}
            img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
            text={"Extra Information about you, like hobbies and your goals.Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs."}
            position={"img-right"}
            bgColor={"red"}
            />
        </div>
    )

}
export default AboutPage;