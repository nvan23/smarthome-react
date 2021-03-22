import React from 'react';
import HookMqtt from './components/Hook/'
// Hook or Class
// import ClassMqtt from './components/Class/'
import MainLayout from './components/Hook/Layout'
import './App.css';

function App () {
  return (
    <div className="App">
      <MainLayout />
      {/* <HookMqtt /> */}
      {/* Hook or Class */}
      {/* <ClassMqtt /> */}
    </div>
  );
}

export default App;
