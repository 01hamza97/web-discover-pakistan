import React, { Component } from 'react';
import './styles.css'
import { facebookb, instab, twitterb, youtubeb } from '../../constant/images';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/Actions/userActions';
 
class Footer extends Component {
    state = {
        list:[
            { name:"Home", link:"/" },
            { name:"Terms of Use", link:"terms-of-use" },
            { name:"Privacy Policy", link:"privacy-policy" },
            { name:"Disclaimer", link:"disclaimer" },
            { name:"Career", link:"career" },
            { name:"Contact Us", link:"contact-us" },
        ]
    }

    render(){
        const { list } = this.state;
        return (<>
            <div className="sub-footer-main">
                <div className="row sub-footer-inner-div">
                    <div className="row sub-footer-inner-div-01">
                        {
                            list.map((nav, i)=>{
                                return<div key={i} className="h5-div">
                                    <Link to={nav.link} className="footer-link">
                                        <h5 className={`h5`}>{nav.name}</h5>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                    <div className="row footer-icons-div">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DiscoverPakistan.TV">
                            <img src={facebookb} alt="?"/>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/discoverpakistan.tv/">
                            <img src={instab} alt="?"/>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/discoverpaktv?lang=en">
                            <img src={twitterb} alt="?"/>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCFgNFVvOtVRg5Zgn2xGJQcw">
                            <img src={youtubeb} alt="?"/>
                        </a>
                    </div>

                </div>
                <div className="row justify-content-center">
                        <div className="col col-auto">
                            <p>Powered by <a href="http://smartmultimediahouse.com/" target="_blank" rel="noopener noreferrer">Smart Multimedia House</a></p>
                        </div>
                </div>
            </div>
        </>)
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)