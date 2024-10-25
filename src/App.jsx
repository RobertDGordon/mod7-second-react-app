import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockDisplay from './components/ClockDisplay'
import ActivityFinder from './components/ActivityFinder'
import DogBreeds from './components/DogBreeds'
import RefCounter from './components/RefCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReducerCounter'
// import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'
import { UserProvider } from './context/UserContext'
import LoginFormUncontrolled from './components/LoginFormUncontrolled'
import MyThemeProvider from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <NavBar />
          <AppRoutes />
          {/* <ClockDisplay /> */}
          {/* <DogBreeds count={count} /> */}
          {/* <RefCounter /> */}
          {/* <VideoPlayer /> */}
          {/* <ReducerCounter /> */}
          {/* <PostListReducer /> */}
          {/* <SubscribeForm/> */}
          {/* <LoginFormUncontrolled/> */}
        </MyThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
