import React, { Component } from 'react';
import './styles.css'
import { MailIcon } from '../../constant/svg';
import { facebook, insta, twitter, youtube, profile } from '../../constant/images';
import { isNullRetNull, isObjEmpty } from '../../utils';
import AuthModal from '../AuthModal';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/Actions/userActions';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const { userData, setLoginStatus, setUserData, setNotify } = this.props;
        return (<>
            <div className="header-main">
                <div className="row header-inner-div">
                    <a href="mailto:info@discoverpakistan.tv" className="row mail-address-a">
                        <MailIcon /><h6 className="mail-address">info@discoverpakistan.tv</h6>
                    </a>

                    <div className="row right-side-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/DiscoverPakistan.TV" className="">
                            <img src={facebook} alt="?" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/discoverpakistan.tv/" className="">
                            <img src={insta} alt="?" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/discoverpaktv?lang=en" className="">
                            <img src={twitter} alt="?" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCFgNFVvOtVRg5Zgn2xGJQcw" className="">
                            <img src={youtube} alt="?" />
                        </a>

                        {
                            isObjEmpty(userData) &&
                            <AuthModal desktop={true} />
                        }
                        {
                            !isObjEmpty(userData) &&
                            <div className="dropdown">
                                <button className="p-0 m-0 profile-icon-btn profile-icon-btn-header" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                    <span style={{ marginRight: 5, color: 'white' }}>{userData.name}</span><img src={isNullRetNull(userData.image_url, false) ? isNullRetNull(userData.image_url, 'https://') : profile} alt="?" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link style={{ marginRight: 0, textDecoration: 'none' }} to="/user-profile?tabName=profile">
                                        <button type="button" className="dropdown-item">Profile</button>
                                    </Link>
                                    <Link style={{ marginRight: 0, textDecoration: 'none' }} to="/user-profile?tabName=favorite">
                                        <button type="button" className="dropdown-item">Favorite</button>
                                    </Link>
                                    <Link style={{ marginRight: 0, textDecoration: 'none' }} to="/user-profile?tabName=watchlater">
                                        <button type="button" className="dropdown-item">Watch Later</button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="dropdown-item"
                                        onClick={() => {
                                            setLoginStatus();
                                            setUserData();
                                            setNotify({ isShow: true, msg: 'Logout Successfully!', title: 'Success' })

                                        }}>Logout</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);