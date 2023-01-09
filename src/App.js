import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import './style/style.scss'
import './style/fish.scss'
import Login from './Pages/Login';
import Fish from "./Pages/Fish";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Notfound from "./Pages/404";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Notfound />}>
        <Route path={'/'} element={
               <Home/>
        }
        />
        <Route path={'/fish'} element={
            <Fish/>
        } />
        <Route path={'/login'} element={
            <Login />
        } />
      </Route>

    )
  )

  return <RouterProvider router={router} />
}

export default App;
