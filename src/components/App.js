import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WeatherApp from "./WeatherApp";

const App = () =>{
    // Wrap the app’s component tree using a WorkoutContextProvider so all children can access the context.
    return (
     
        <Router>
            <Routes>
                <Route path="/" element={<WeatherApp/>}></Route>
            
            </Routes>
        </Router>
      
    )
}

export default App;