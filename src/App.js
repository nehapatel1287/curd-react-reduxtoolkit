
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import UserList from './features/Users/UserList';
import AddUser from './features/AddUser'
import EditUser from './features/EditUser';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserList/>,
    },
    {
      path: "/add-user",
      element: <AddUser/>,
    },
    {
      path: "/edit-user/:id",
      element: <EditUser/>,
    },
  ]);
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
    <h1 className='text-center font-bold text-2xl text-gray-700'>CURD with redux Toolkit</h1>  
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
