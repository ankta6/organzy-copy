import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import TopBar from './component/TopBar/TopBar';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import FooterBottom from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import Blog from './component/Blog/Blog';
import ContactUs from './component/ContactUs/ContactUsmain';



function App() {
  return (
    <div className="App">

      <TopBar />
        <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/AboutUs" component={AboutUs} />
         <Route exact path="/Blog" component={Blog} />
      </Switch>
       <FooterBottom />

 
    </div>
  );
}

export default App;
