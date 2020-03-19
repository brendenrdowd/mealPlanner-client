import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// taken from codepen, will update later, need to remove styles
import Menu from './Menu'
import MenuButton from './MenuButton'
import MenuItem from './MenuItem'
import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }
  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }
  render() {
    const styles =
    {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        background: 'black',
        width: '100%',
        color: 'white',
      },
      logo: {
        margin: '0 auto',
        fontFamily: 'Pacifico'
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease',
      },
      link:{
        textDecoration:'none',
        color:'white'
      }
    }
    const menu = [<Link style={styles.link} to="/dashboard"><FontAwesomeIcon icon="home" /> Home</Link>,
    <Link style={styles.link} to="/search"><FontAwesomeIcon icon="search" /> Search</Link>,
    <Link style={styles.link} to="/"><FontAwesomeIcon icon="sign-out-alt" /> Logout</Link>
    ]
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick(); }}>{val}</MenuItem>)
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
          <div style={styles.logo}>Nutrionist</div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </div>
    )
  }
}
// render (
//   <nav className="desktop">
//     <button className="toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
//       <FontAwesomeIcon icon="bars" />
//     </button>
//     <div class="collapse" id="navbar">
//       <ul>
//         <li><Link to="/dashboard"><FontAwesomeIcon icon="home" /></Link></li>
//         <li><Link to="/search"><FontAwesomeIcon icon="search" /></Link></li>
//         <li><Link to="/"><FontAwesomeIcon icon="sign-out-alt" /></Link></li>
//       </ul>
//     </div>
//   </nav>
// <nav className="menu-wrap">
//   {/* <label for="hamburger">&#9776;</label> */}
//   <input type="checkbox" class="toggler" />
//   <div className="hamburger"><div></div></div>
//   <div className="menu">
//     <div>
//         <ul>
//           <li><Link to="/dashboard"><FontAwesomeIcon icon="home" /></Link></li>
//           <li><Link to="/search"><FontAwesomeIcon icon="search" /></Link></li>
//           <li><Link to="/"><FontAwesomeIcon icon="sign-out-alt" /></Link></li>
//         </ul>
//     </div>
//   </div>
// </nav>
//   )
// }

export default Nav