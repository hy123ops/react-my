import React, { Component } from 'react'
import {
  NavWrap
} from './styledMovie'
import { withRouter } from 'react-router-dom'

class Nav extends Component {

  state = {
    // dir: 'hot'
    dir: this.props.location.pathname.split('/')[2] === 'movie' ? 'hot' : this.props.location.pathname.split('/')[2]
  }

  // getPath(props) {
  //   let path =props.location.pathname.substr(1).split('/')
  //   console.log(path);

  //   return (path === '' ? 'hot' : path)==='movie'?'hot' : path
  // }

  handleClick = dir => {
    return () => {
      this.setState({
        dir
      })
      this.props.history.push(`${this.props.match.path}/${dir}`)
      // console.log(this.props,dir);
    }
  }

  // componentDidMount(){this.getPath()}
  //   var nav=document.getElementById('nav-wrap')
  //   if(nav){o
  //     // console.log(nav.offsettop);

  //   }
  //console.log( this.props.location.pathname.split('/')[2]);

  //}
  handCity = (value) => {
    return this.props.history.push(value)
  }
  handSearch = (value) => {
    return this.props.history.push(value)
  }


  render() {

    
    return (
      <>
        <NavWrap
          id="nav-wrap"
        >
          <div onClick={this.handCity.bind(this, '/index/city')}>
            <span>北京</span>
            <i className="yo-ico">&#xf033;</i>
          </div>
          <div>
            <ul>
              <li
                className={this.state.dir === 'hot' ? 'active' : ''}
                onClick={this.handleClick('hot')}
              >
                正在热映
              </li>
              <li
                className={this.state.dir === 'coming' ? 'active' : ''}
                onClick={this.handleClick('coming')}
              >
                即将上映
                  </li>
            </ul>
          </div>
          <div onClick={this.handSearch.bind(this, '/index/movsearch')}>
            <i className="yo-ico">&#xf067;</i>
          </div>
        </NavWrap>
      </>
    )
  }
}

export default withRouter(Nav)
