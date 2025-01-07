import { Router } from './Router.jsx'
import { lazy, Suspense } from "react"
import './App.css'
import HomePage from './pages/Home.jsx'
import Page404 from './pages/404.JSX'
import SearchPage from './pages/Search.jsx'
import { Route } from './Route.jsx'

const LazyAboutPage = lazy(() => import("./pages/About.jsx"))

const routes = [
  {
    path: "/search/:query",
    Component: SearchPage
  }
]




function App() {
 
  return (
    <main>
     <Suspense fallback={null}>
     <Router routes={routes} defaultConmponent={Page404} >
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={LazyAboutPage} />
      </Router>
     </Suspense>
    </main>
      
  )

  
}

export default App
