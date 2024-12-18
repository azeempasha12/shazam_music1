import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import GetApp from './pages/navbarLinks/getApp';
import ShazamPromo from './pages/ShazamPromo';
import LoginForm from './pages/user/login';
import Signup from './pages/user/signup';
import MusicChart from './pages/music/musicTop';
import MusicDetails from './pages/music/musicDetails';
import Home from "./pages/home"
import store from './component/reduxToolkit/store/store';
import Album from './pages/album/album'; 
import Artists from './pages/artists/artists';
import Bookmark from './component/bookMark/bookmark';


function App() {
  console.log("store", store)
  return (
    <div>
      
      <Routes>
       
        <Route path="/" element={<Navbar />}>
       
        <Route path="getapp" element={<GetApp />} />
        <Route path='album' element={<Album/>}/>
        <Route path='artists' element={<Artists/>}/>
        <Route path='bookmark' element={<Bookmark/>}/>
       <Route path='/' element ={<Home/>}/>
       
       </Route>
        {/* Other routes */}
        <Route path="/trialPage" element={<ShazamPromo />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/loginpage" element={<LoginForm />} />
        <Route path="/chart" element={<MusicChart />} />
        <Route path="/musicDetails" element={<MusicDetails />} />
        
        
      </Routes>
       

      
    </div>
  );
}

export default App;
