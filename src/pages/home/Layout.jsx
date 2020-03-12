import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { TabBar } from 'antd-mobile';
import Img from 'assets/images/img.svg'
import ImgActive from 'assets/images/img-active.svg'
import CinemaL from 'assets/images/cinema.svg'
import CinemaActive from 'assets/images/cinema-active.svg'
import My from 'assets/images/my.svg'
import MyActive from 'assets/images/my-acitve.svg'

import Movie from './Movie/Movie'
import Cinema from './Cinema/Cinema'
import MyCenter from './MyCenter/MyCenter'
// import City from './City/City'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'movie',
      hidden: false,
      fullScreen: true,
    };
  }


  getPath(props) {
    let path = props.location.pathname.substr(1).split("/").shift()
    // console.log(path);

    return path === '' ? 'movie' : path
  }

  handleClick = (selectedTab) => {
    return () => {
      this.setState({
        selectedTab,
      })
      // console.log(this.props);
      this.props.history.push(`/home/${selectedTab}`)
      // console.log(this.state.selectedTab,this);
    }
  }

  //渲染完再改一次
  componentDidMount() {
    this.setState((state, props) => { return { selectedTab: this.getPath(this.props), } });
    if (this.props.location.pathname === '/home/Movie' || '/home/movie') {
      this.setState({
        selectedTab: 'movie'
      });
      this.props.history.push('/home/movie/hot')
    }
  }

  render() {

    return (
      // <Switch>
      //   <Route
      //     path="/movie/hot"
      //     render={() => (
            <div  style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                unselectedTintColor="#777"
                tintColor="#f03d37"
                barTintColor="white"
                hidden={this.state.hidden}
              >
                <TabBar.Item
                  title="电影"
                  key="movie"
                  icon={<div style={{
                    width: '25px',
                    height: '25px',
                    background: `url(${Img}) center center /  25px 25px no-repeat`
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '25px',
                    height: '25px',
                    background: `url(${ImgActive}) center center /  25px 25px no-repeat`
                  }}
                  />
                  }
                  selected={this.state.selectedTab === 'movie'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'movie',
                    });
                    this.props.history.push('/home/movie/hot')
                  }}
                >
                  <Switch>
                    <Route
                      path="/home/movie"
                      render={(props) => (
                        <Movie {...props}></Movie>
                      )}
                    />
                    <Redirect
                      exact
                      from="/"
                      to="/home/movie/hot"
                    />
                  </Switch>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '25px',
                      height: '25px',
                      background: `url(${CinemaL}) center center /  25px 25px no-repeat`
                    }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '25px',
                      height: '25px',
                      background: `url(${CinemaActive}) center center /  25px 25px no-repeat`
                    }}
                    />
                  }
                  title="影院"
                  key="cinema"
                  selected={this.state.selectedTab === 'cinema'}
                  onPress={this.handleClick('cinema')}
                >
                  <Switch>
                    <Route
                      path="/home/cinema"
                      render={(props) => (
                        <Cinema {...props}></Cinema>
                      )}
                    />
                  </Switch>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '25px',
                      height: '25px',
                      background: `url(${My}) center center /  25px 25px no-repeat`
                    }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '25px',
                      height: '25px',
                      background: `url(${MyActive}) center center /  25px 25px no-repeat`
                    }}
                    />
                  }
                  title="我的"
                  key="my"
                  selected={this.state.selectedTab === 'my'}
                  onPress={this.handleClick('my')}
                >
                  <Switch>
                    <Route
                      path="/home/my"
                      render={() => (
                        <MyCenter></MyCenter>
                      )}
                    />
                  </Switch>
                </TabBar.Item>
              </TabBar>
            </div>
      //     )}
      //   />
      //    <Route
      //     path="/city"
      //     render={() => (
      //       <City></City>
      //     )}
      //   />
      //   <Redirect
      //     exact
      //     from="/"
      //     to="/movie/hot"
      //   />
      // </Switch> 
    );
  }
}

export default withRouter(Layout)
