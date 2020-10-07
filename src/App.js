import React from 'react';
import List from './List';
import Store from './Store';
import './App.css';

//The App component will accept one prop Store

function App () {
    const lists = Store.lists

    const appLists = lists.map(function(list) {
        return <List key={list.id} header={list.header} cardIds={list.cardIds}
        />
    });

  return (
    <main className="App">
      <header className="App-header">
        <h1 style={{textAlign: "center", fontSize: 40}}>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {appLists}
      </div>
    </main>
  )
  
}

export default App