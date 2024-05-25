import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { IconSizeProvider } from "./contexts/IconContext";
import ProductOverview from "./features/products/ProductOverview";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Categories from "./pages/Categories";


function App(){

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      }
    }
  })

  const router = createBrowserRouter([
    {
      element:<AppLayout />,
      children: [

        {
          path:'/',
          element:<Home />
        },

        {
          path:'/:categoryName',
          element:<Categories />

        },
        {

          path:'/:productName/:id',
          element:<ProductOverview />
        },
        {
          path:'/cart',
          element:<Cart />
        },
       
       
      ]
    },
    {
      path:'/checkout',
      element:<Checkout />
    }
  ]
    

  )

  return (
  
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <IconSizeProvider>
      <RouterProvider router={router} />
    </IconSizeProvider>
    </QueryClientProvider>
    
  )

}

export default App;