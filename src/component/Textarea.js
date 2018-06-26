import React from 'react'
import PropTypes from 'prop-types';
import classname from 'classname'

import './Textarea.css'

class Textarea extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    onChange: ()=>{},
  };

  constructor(props){
    super(props)

    this.state = {
      content: this.props.value,
    }
    this.onInput = this.onInput.bind(this)
  }

  onInput (e) {
    let val = e.target.value

    this.setState({
      content: val
    })

    this.props.onChange(e)
  }

  renderContent (text) {
    let str = text.replace(/\r\n/g, "<br/>")
    str = str.replace(/\n/g, "<br/>")
    str = str.replace(/\s/g,"&nbsp;")

    return {__html: str}
  }

  render () {
    let containerClass = classname('textarea_wrapper', this.props.className)
    return (
      <div className={containerClass}>
        <div className="textarea_content" dangerouslySetInnerHTML={this.renderContent(this.state.content)}></div>
        <textarea className="textarea_input" onChange={this.onInput.bind(this)}  value={this.state.content} />
      </div>
    )
  }
}

export default Textarea