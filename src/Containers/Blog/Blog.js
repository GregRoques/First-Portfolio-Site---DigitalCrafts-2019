import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './Blog.css'
import axios from 'axios';
import { blogBackend } from '../../AxiosOrders'

//for parsing text
import ReactHtmlParser from 'react-html-parser';

// Redux
import { connect } from "react-redux";
import SetHeader from '../../Actions/SetHeader'

class Blog extends Component{

    //=========================================================
    // State

    state = {
        entries:'',
        currentEntry: ''
    }

    //=========================================================
    // componentDidMount

    componentDidMount() {
        this.props.Header('Blog')
        const link = (window.location.pathname === '/blog' || window.location.pathname === '/blog/') ? "" : (decodeURI(window.location.pathname)).split('/blog/').pop().trim();
        console.log(link)
        axios.get(blogBackend, {
            params:{
                link
            }
        })
        .then(response=>{
            console.log(response)
            this.setState({
                entries: response.data.fiveLatest, 
                currentEntry: response.data.currBlog
            })
            window.history.pushState(null, null, `/blog/${response.data.currBlog.date}`);
        })
        .catch(error=> {
            this.props.Header('Error');
        })
        window.scrollTo(0, 0);
    }

    //=========================================================
    // Event Listener

    click =(newPublish, date)=>{
        const currentEntryValue = this.state.entries[newPublish]
        window.history.pushState(null, null, `/blog/${date}`)
       this.setState({
           currentEntry: currentEntryValue
       })
    }

    //=========================================================
    //  Render/Return

    render(){
        return(
            <div className='fadeIn'>
                <div className='blogAlign'>
                    <div className='articleColumn'>
                        <div className='articlePadding'>
                            <div className ='blogEntryContainer'>
                                <div className ='blogEntryHeader'>{this.state.currentEntry.title}</div>
                                <div className ='blogEntryDate'>{this.state.currentEntry.date}</div>
                                <div className ='blogEntryParagraph'>{ ReactHtmlParser(this.state.currentEntry.text)}</div>
                            </div>
                        </div>
                    </div>
                        <div className='previousPostsColumn'>
                            <div className='previousPostsContainer'>
                                <div className='previousPostText'>
                                <h1 className='previousTitle'>Previous</h1>
                                {Object.keys(this.state.entries).reverse().map((post,i)=> {
                                    return(
                                        <div key={i} className="previousMargin" onClick={()=>this.click(post, this.state.entries[post].date)}>
                                            <span className="arrowColor">></span> <span className="selectPreviousHover"><b><i className="titleColor">{this.state.entries[post].date}</i></b></span>
                                        </div>
                                    )
                                })}
                
                                </div>
                            </div>
                        </div>
                </div>
                <div className='redirectLinks'>
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/">Home</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/about"> About</Link> | 
                    <Link style={{ textDecoration: 'none', color: 'rgb(35,64,143)' }} to="/portfolio"> Portfolio</Link>
                </div> 
            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        Header: (page) => dispatch(SetHeader(page))
    }
}

export default connect(null, mapDispatchToProps)(Blog);