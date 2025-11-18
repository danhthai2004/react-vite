import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';
import { Outlet } from 'react-router-dom';

// arrow function syntax
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
