import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Admin } from './Admin/Admin'; // Import your Admin component
import Home from './Home/Home'; // Import your Home component if not already imported

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { getAuth, onAuthStateChanged, User } from "firebase/auth";
// import { useEffect, useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});
// function PublicRoute({ element, ...rest }: { element: React.ReactNode }) {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Or your loading component
//   }

//   return currentUser
//     ? <Navigate to="/admin" /> // redirect to admin if user is authenticated
//     : <Route {...rest} element={element} />;
// }
export const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            {/* <PublicRoute element={<Home />} /> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};
export default App;