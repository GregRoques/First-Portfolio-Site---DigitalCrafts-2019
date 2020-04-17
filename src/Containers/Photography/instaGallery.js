import React, { Component } from 'react';
import axios from "axios";
import instaCss from './instaGallery.module.css';
import { instaBackend } from "../../AxiosOrders";

class instaGallery extends Component {
    state={
        userName: "qtrmileatatime",
        profilePic: "",
        image: [],
        selectedPic: 0,
        display: false
    }

    componentDidUpdate = () =>{
        this.getInstaGallery()
    }

    getInstaGallery = () =>{
        axios.get(instaBackend)
          .then(res => {
              const { myProfilePic, images } = res.data;
              console.log(myProfilePic, images);
            this.setState({
                profilePic: myProfilePic,
                image: images,
            })
          })
          .catch(error => {
            console.log(error);
          });
    }

    instaPopUp = () =>{
        const { image, selectedPic, profilePic, userName } = this.state;
        return  this.state.display === true ? (
            <div className={instaCss.centerAndBackground}>
                <div onClick={() => this.isPopUpOpen( "", "", "", "")} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt="profile pic" className={instaCss.selectedHeaderImage} src={ profilePic }/>
        <a className={instaCss.selectedHyperlink} href={`https://www.instagram.com/${this.state.userName}`} target="_blank" rel="noopener noreferrer nofollow">{userName}</a> 
                    </div>
                    <div className={instaCss.selectedImageContainer}>
                        <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic }/>
                    </div>
                    <div className={instaCss.selectedCaption}>
                        { image[selectedPic].location ? <b>{image[selectedPic].location}<br/></b> : null}
                        { image[selectedPic].caption }
                    </div>
                </div>
            </div>
        ) : null
    }

    isPopUpOpen = num =>{
        const { display } = this.state;
        this.setState({
            display: !display,
            selectedPic: num
        })
    }

    render(){
        const { image } = this.state;
        return this.state.image.length === 5 ? (
            <div className={instaCss.instaModuleSpacing}>
                <this.instaPopUp/> 
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a title={`Follow Me: @${this.state.userName}`} href={`https://www.instagram.com/${this.state.userName}`} target="_blank" rel="noopener noreferrer nofollow">
                Instagram
            </a> 
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <div className={instaCss.instaImage1}>
                    <img className={instaCss.bigPicture} alt={ "insta1" } onClick={()=> this.isPopUpOpen(0)} src={ image[0].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[0].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[0].date}</div>
                        <div className={instaCss.onHoverTags}>{(image[0].tags.toString()).replace(/,/g, ', ')}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <div className={instaCss.instaImage2}>
                    <img className={instaCss.smallPicture} alt={ "insta2" } onClick={()=> this.isPopUpOpen(1)} src={ image[1].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[1].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[1].date}</div>
                        <div className={instaCss.onHoverTags}>{(image[1].tags[0] + "," + image[1].tags[1] + "," + image[1].tags[2]).toString().replace(/,/g, ', ')}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage3}>
                    <img className={instaCss.smallPicture} alt={ "insta3"  } onClick={()=> this.isPopUpOpen(2)} src={ image[2].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[2].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[2].date}</div>
                        <div className={instaCss.onHoverTags}>{(image[2].tags[0] + "," + image[2].tags[1] + "," + image[2].tags[2]).toString().replace(/,/g, ', ')}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <div className={instaCss.instaImage4}>
                    <img className={instaCss.smallPicture} alt={ "insta4" } onClick={()=> this.isPopUpOpen(3)} src={ image[3].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[3].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[3].date}</div>
                        <div className={instaCss.onHoverTags}>{(image[3].tags[0] + "," + image[3].tags[1] + "," + image[3].tags[2]).toString().replace(/,/g, ', ')}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage5}>
                    <img className={instaCss.smallPicture} alt={ "insta5" } onClick={()=> this.isPopUpOpen(4)} src={ image[4].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[4].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[4].date}</div>
                        <div className={instaCss.onHoverTags}>{(image[4].tags[0] + "," + image[4].tags[1] + "," + image[4].tags[2]).toString().replace(/,/g, ', ')}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
            </div>

        ): null;
    };
}

export default instaGallery;