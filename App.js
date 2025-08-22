// import logo from './logo.svg';
import './App.css';
import InvitationCard from './Component/InvitationCard';
import  {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    
   <>
     <div 
      style={{
        display: "flex",
        justifyContent: "center",  // horizontal center
        alignItems: "center",      // vertical center
        flexDirection: "column",   // stack items vertically
        minHeight: "100vh",        // full page height
        textAlign: "center"        // center text inside
      }}
    >
   
  <Router>
      <div>
        <nav>
          {/* Shareable link */}
          <Link to="/invitation" className="text-blue-500"></Link>
        </nav>
        
        <Routes>
          <Route path="/invitation" element={<InvitationCard />} />
        </Routes>
      </div>
    </Router>

  <InvitationCard/>
  </div>
   </>
  );
}

export default App;
