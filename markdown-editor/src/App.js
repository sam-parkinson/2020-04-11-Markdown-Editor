import React from 'react';
import Editor from './Editor/Editor';
import marked from 'marked';

// Next major TODOs

// break down components

// add actual styling

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