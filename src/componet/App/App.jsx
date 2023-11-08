import All from "../All/All";
import Categonies from "../Categories/Categonries";
import Login from "../Login/Login";
import Reagaister from "../Reagaister/Reagaister";
import Platforms from "../platforms/platforms";
import Sort_by from "../sort_by/Sort_by";
import Masterlayout from "../Masterlayout/Masterlayout";
import Home from "../Home/Home";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Details from "../Details/Details";
import Notfound from "../Notfound/Notfound";
import jwtDecode from "jwt-decode";
import  { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";






function App() {
  const [userData, setuserData] = useState(null)
  
  let saveData=()=>{
    let endDecode=localStorage.getItem('token');
    let decode=jwtDecode(endDecode);
    setuserData(decode);
  }
  let logout=()=>{
    localStorage.removeItem('token');
    saveData(null)
    return <Navigate to='login' />

  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      saveData();
    }

   
   
  }, [])
  

  let route=createBrowserRouter([{
    path:'/',element:<Masterlayout userData={userData} logout={logout}/>,errorElement:<Notfound/>,children:
    [

      {index:true,element: <ProtectedRoute  userData={userData}><Home/></ProtectedRoute>},
      {path:'all',element:<ProtectedRoute  userData={userData}><All/></ProtectedRoute>},
      {path:'platform/:path',element:<ProtectedRoute  userData={userData}> <Platforms /></ProtectedRoute>},
     {path:'sort-by/:path',element:<ProtectedRoute  userData={userData}><Sort_by/></ProtectedRoute>},
     { path:'categories/:path',element:<ProtectedRoute  userData={userData}><Categonies/></ProtectedRoute>},
     {path:'Details/:id',element:<ProtectedRoute userData={userData} ><Details/></ProtectedRoute>},
      {path:'login',element:<Login saveData={saveData} />},
      {path:'regaister',element:<Reagaister/>},
    ]
  }])
  return (
   <>
   <RouterProvider router={route}/>
   </>
  );
}

export default App;
