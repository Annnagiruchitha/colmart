// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function OnlyAdminPrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);

//   // Check if the user is logged in and is an admin
//   if (currentUser && currentUser.isAdmin) {
//     return <Outlet />;
//   } else {
    
//     return <Navigate to="/login" />;
//   }
// }
