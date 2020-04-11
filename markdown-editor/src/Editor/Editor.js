import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ``,
      output: ``,
    }
    this.onChange = this.onChange.bind(this);
  }

  state = {
    text: ``,
    output: ``,
  }

  onChange() {
    const editor = this.ace.editor;
    const mkd = editor.getValue();
    this.setState({ text: mkd });
  }

  handleSubmit(e) {
    e.preventDefault();
    const output = marked(this.state.text, this.props.mkd_render);
    this.setState({output});
  }

  render() {
    return (
      <>
        <ReactAce
          mode="text"
          theme="twilight"
          setReadOnly={false}
          onChange={this.onChange}
          style={{ height: '400px' }}
          ref={instance => { this.ace = instance; }}
        />
        <button
          type="submit"
          onClick={(e) => this.handleSubmit(e)}
        >
          Update
        </button>
        <div>
          {ReactHtmlParser(this.state.output)}
        </div> 
      </>      
    );
  }
}

export default Editor;