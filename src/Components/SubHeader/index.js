import React, { Component } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
 
class SubHeader extends Component {
    state = {
        list:[
            { name:"Home", link:"/" },
            { name:"Shows", link:"/shows" },
            { name:"Discover Shop", link:"/discover-shop" },
            { name:"Partners", link:"/partners" },
            { name:"Advertise", link:"/advertise" },
            { name:"Pakistan", link:"/pakistan" },
            { name:"iTrip", link:"https://itrip.pk/", isLink:true },
            { name:"Tourist Community", link:"/tourist-community" },
            { name:"Become Contributor", link:"/become-contributor" },
        ]
    }

    render(){
        const { list } = this.state;
        return (<>
            <div className="sub-header-main">
                <div className="row sub-header-inner-div">
                    <div className="row sub-header-inner-div-01">
                        {
                            list.map((nav, i)=>{
                                return(
                                    <div key={i} className="h5-div">
                                        { nav.isLink ?
                                            <a href={nav.link} className="sub-header-link">
                                                <h5 className="h5">{nav.name}</h5>
                                            </a>
                                            :
                                            <Link to={nav.link} className="sub-header-link">
                                                <h5 className="h5">{nav.name}</h5>
                                            </Link>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>)
    }   
}

export default SubHeader