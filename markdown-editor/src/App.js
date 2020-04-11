import React from 'react';
import Editor from './Editor/Editor';
import marked from 'marked';

// todo:
// make markdown displayer
// wire up displayer to editor
// pretty up app

function App() {
  return (
    <main className='App'>
      <Editor 
        mkd_render={new marked.Renderer()}
      />
    </main>
  );
}

export default App;