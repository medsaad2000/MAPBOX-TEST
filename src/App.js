import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'


import Companies from './pages/Companies';
import Company from './pages/Company';
import Map from './pages/Map';



function App() {

return(
<div className="App">

      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/data" element={<Companies />} />
        <Route path="/data/:id" element={<Company />} />
      </Routes>

</div>
);

}

export default App;
