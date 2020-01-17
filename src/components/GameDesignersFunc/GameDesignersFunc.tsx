import React, {useState} from 'react'
import './GameDesignersFunc.scss'

const GameDesignersFunc: React.FC = () => {
  const [appGameDevelopersNumber, setAppGameDevelopersNumber] : React.ComponentState = useState('No');
  const gameDevelopers = [
    {
      name : 'Neil Druckmann',
      company : 'Naughty Dog',
      age : 40,
      occupation : 'Vice President',
      isGoodGameDeveloper: 'true',
      id : 0
    },
    {
      name : 'Sam Houser',
      company : 'Rockstar Games',
      age : 48,
      occupation : 'President',
      isGoodGameDeveloper: 'true',
      id : 1
    },
    {
      name : 'Hideo Kojima',
      company : 'Kojima Productions',
      age : 56,
      occupation : 'President',
      isGoodGameDeveloper: 'Genius',
      id : 2
    }
  ];
  
  function renderAppDeveloperBlockClick1() {
    return setAppGameDevelopersNumber('0');
  }

  function renderAppDeveloperBlockClick2() {
    return setAppGameDevelopersNumber('1');
  }

  function renderAppDeveloperBlockClick3() {
    return setAppGameDevelopersNumber('2');
  }

  function renderItem(id : number) {
    return(
      <div className="greenDesign_developerBlock">
        <h5 className="greenDesign_developerBlock-name">{gameDevelopers[id].name}</h5>
        <p className="greenDesign_developerBlock-age">Age: {gameDevelopers[id].age}</p>
        <p className="greenDesign_developerBlock-company">Company: {gameDevelopers[id].company}</p>
        <p className="greenDesign_developerBlock-occupation">Occupation: {gameDevelopers[id].occupation}</p>
      </div>
    );
  }

  function isGoodDeveloper(data : string) {
    alert('Is good developer: ' + data);
  }

  return(
    <div className="Content">
      <div className={'blockDesign greenDesign'}>
        <h2 className="greenDesign-title">Game Developers</h2>
        <div className="greenDesign_buttons">
          <button className="greenDesign-btn" onClick={renderAppDeveloperBlockClick1}>
            {gameDevelopers[0].name}
          </button>
          <button className="greenDesign-btn" onClick={renderAppDeveloperBlockClick2}>
            {gameDevelopers[1].name}
          </button>
          <button className="greenDesign-btn" onClick={renderAppDeveloperBlockClick3}>
            {gameDevelopers[2].name}
          </button>
        </div>
        {(appGameDevelopersNumber === '0') ? renderItem(0) : null}
        {(appGameDevelopersNumber === '1') ? renderItem(1) : null}
        {(appGameDevelopersNumber === '2') ? renderItem(2) : null}
        <div className="greenDesign_goodDevelopers">
          {gameDevelopers.map((developer) => {
            return(
              <p className="greenDesign_goodDevelopers-name" onClick={() => {isGoodDeveloper(developer.isGoodGameDeveloper)}}>
                {developer.name}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default  GameDesignersFunc;