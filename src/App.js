import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
     <Contact name="Mary Pops" avatar="https://randomuser.me/api/portraits/women/83.jpg" online/>
     <Contact name="Carole Murphy" avatar="https://randomuser.me/api/portraits/women/8.jpg" />
     <Contact name="Christy Lane" avatar="https://randomuser.me/api/portraits/women/23.jpg" online/>
    </div>
  );
}

export default App;
