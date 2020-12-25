import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import TopBlock from './Components/Projects/TopBlock';
import ChevronBlock from './Components/Projects/ChevronBlock';
import FooterBlock from './Components/Projects/FooterBlock';
import ProjectBlock from './Components/Projects/ProjectBlock';


function App() {
  return (
    <div className="body">
        <TopBlock/> 
        <ChevronBlock/>
        <ProjectBlock/>
        <FooterBlock/>
    </div>
  );
}

export default App;
