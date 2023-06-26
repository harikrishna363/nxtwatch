import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import AppContext from './Context/AppContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeMenuId: 'HOME'}

  toggleTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  addToSavedVideos = newVideo => {
    const {savedVideos} = this.state
    const existedVideo = savedVideos.find(
      eachItem => eachItem.id === newVideo.id,
    )
    if (existedVideo === undefined) {
      this.setState({savedVideos: [...savedVideos, newVideo]})
    }
  }

  removeFromSavedVideos = existedVideo => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(
        eachItem => eachItem.id !== existedVideo.id,
      ),
    }))
  }

  updateActiveMenuId = id => this.setState({activeMenuId: id})

  render() {
    const {isDarkTheme, savedVideos, activeMenuId} = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
          activeMenuId,
          updateActiveMenuId: this.updateActiveMenuId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <NotFound />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
