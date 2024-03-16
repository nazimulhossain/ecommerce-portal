import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { IconSizeProvider } from "./contexts/IconContext";

function App(){

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children: [
       
      ]
    }
  ]
    

  )

  return (
    <IconSizeProvider>
<RouterProvider router={router} />
    </IconSizeProvider>
    
  )

}

export default App;