import Navbar from "../Navbar/Navbar";
import Home from '../../Assets/Images/Home.png';
import {CalendarCheck,Devices,UsersFour} from '@phosphor-icons/react'
import "./Hero.scss";
import Nutrition from "../Nutrition/Nutrition";
import Footer from "../Footer/Footer";
const Hero = () => {
    return (
        <>
            <Navbar logout="no"/>
            <div className="fitness-home">     
                <div className="fit-home">    
                    <div className="fitness-home-one">
                        <h1 className="font-bold">It&apos;s time to regain your fitness.</h1>
                        <p>Do fitness anywhere and anytime with our fitway Application.</p>
                        <button>Try It For Free</button>
                    </div>
                    <div className="fitness-home-two">
                        <img src={Home} alt="" />
                    </div>
                </div>
                <div className="fitness-home-info">
                    <div>
                        <CalendarCheck size={60} color="#e12866" weight="duotone" />
                        <h4>Daily Workouts 7 Days a Week</h4>
                        <p>Get personalized workouts on a daily basis from professionals.</p>
                    </div>
                    <div>
                        <Devices size={60} color="#e12866" weight="duotone" />
                        <h4>Access From Any Platform</h4>
                        <p>Use all the benefits of the service anywhere and on any device.</p>
                    </div>
                    <div>
                        <UsersFour size={60} color="#e12866" weight="duotone" />
                        <h4>Guides & Community</h4>
                        <p>A private community where we help each other.</p>
                    </div>
                </div>
            </div>
            <Nutrition/>
            <Footer/>
        </>
    )
};

export default Hero;