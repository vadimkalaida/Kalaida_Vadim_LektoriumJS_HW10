import React, {useState} from 'react';
import './App.scss';
import FormComponentFunc from "./components/FormComponentFunc/FormComponentFunc";
import GameDesignersFunc from "./components/GameDesignersFunc/GameDesignersFunc";
import ToDoComponentFunc from "./components/ToDoComponentFunc/ToDoComponentFunc";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('clear');
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <button className="nav-item" onClick={() => {
            setCurrentPage('clear');
          }}>Clear</button>
          <button className="nav-item" onClick={() => {
            setCurrentPage('gameDevelopersPage');
          }}>Game Developers</button>
          <button className="nav-item" onClick={() => {
            setCurrentPage('formPage');
          }}>Form</button>
          <button className="nav-item" onClick={() => {
            setCurrentPage('toDoPage');
          }}>ToDo</button>
        </div>
      </header>
      {currentPage === 'clear' ? null : null}
      {currentPage === 'gameDevelopersPage' ? <GameDesignersFunc /> : null}
      {currentPage === 'formPage' ? <FormComponentFunc /> : null}
      {currentPage === 'toDoPage' ? <ToDoComponentFunc /> : null}
    </div>
  );
}

export default App;
