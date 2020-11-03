import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./HeadFoot.css";
import ResumeModal from './ResumeModal';

const Contact = ({ isEmailToggled, isShown  }) => {
    return(
        <div className="contact socialIcon" onClick={isEmailToggled}>
            <img className="contact1"  src= '/images/socialIcons/contact2.jpg' alt='greg@gregroques.com'/> 
            { !isShown ?  <img className="contact2" src= '/images/socialIcons/contact1.jpg' alt='greg@gregroques.com'/>: null}
        </div>
    )
}

const LinkedIn = () => {
    return(
        <div className="li socialIcon">
            <a href='https://www.linkedin.com/in/gregroques/' rel="noopener noreferrer" target="_blank">
                <img className="li1"  src= '/images/socialIcons/li2.jpg' alt='LinkedIn: @GregRoques'/>
                <img className="li2" src= '/images/socialIcons/li1.jpg' alt='LinkedIn: @GregRoques'/>
            </a>
        </div>
    )
};

const GitHub = () => {
    return(
        <div className="gh socialIcon">
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/GregRoques' >
                <img className="gh1"  src= '/images/socialIcons/gh2.jpg' alt='GitHub: @GregRoques'/>
                <img className="gh2" src= '/images/socialIcons/gh1.jpg' alt='GitHub: @GregRoques'/>
            </a>
        </div>
    )
};

const Resume = () => {
    return(
        <div className="resume socialIcon">
            <Link onClick={e =>{ e.preventDefault(); window.open("https://www.gregroques.com/images/socialIcons/Resume.pdf")}}>
                <img className="resume1"  src= '/images/socialIcons/pdf2.jpg' alt='2019 Resume'/>
                <img className="resume2" src= '/images/socialIcons/pdf1.jpg' alt='2019 Resume'/>
            </Link>
        </div>
    )
};

const Insta = () => {
    return(
        <div className="insta socialIcon">
            <a href='https://www.instagram.com/qtrmileatatime' rel="noopener noreferrer" target="_blank">
                <img className="insta1"  src= '/images/socialIcons/insta2.jpg' alt='Insta: @qtrmileatatime'/>
                <img className="insta2" src= '/images/socialIcons/insta1.jpg' alt='Insta: @qtrmileatatime'/>
            </a>
        </div>
    )
}

class Footer extends Component{

    state ={
        email: false
    }

    toggleEmail=()=>{
        const doesShow = this.state.email
        this.setState({email: !doesShow})
    }
    
    render(){
        const isMedia = window.location.pathname === "/media" || window.location.pathname.includes("/photography");
    return(
            <div>
                <ResumeModal
                    isShown={this.state.email}
                    close= {this.toggleEmail}
                /> 
                <div className="footer">
                    <Contact 
                        isEmailToggled={this.toggleEmail}
                        isShown={this.state.email}
                    />
                    {!isMedia ?
                        <>
                            <LinkedIn/>
                            <GitHub/>
                            <Resume/>
                        </> :
                            <Insta/>
                }
                </div>
            </div>
        )
}
}

export default Footer;