import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ``,
    }
    this.onChange = this.onChange.bind(this);
  }

  state = {
    text: ``,
  }

  onChange() {
    const editor = this.ace.editor;
    const mkd = editor.getValue();
    this.setState({ text: mkd });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <>
        <ReactAce
          mode="javascript"
          theme="twilight"
          setReadOnly={false}
          onChange={this.onChange}
          style={{ height: '400px' }}
          ref={instance => { this.ace = instance; }} // Let's put things into scope
        />
        <button
          type="submit"
          onClick={(e) => this.handleSubmit(e)}
        >
          Update
        </button>
      </>      
    );
  }
}

export default Editor;