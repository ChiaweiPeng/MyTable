import React from 'react';
import {Select, Space } from 'antd';

const { Option } = Select

class SelectBox extends React.Component {
    constructor(props) {
      super(props);

      this.state = {}
  
    }
  
    // TODO?: event改名为value是否更符合语义？
    // handleSelect(event) {
    //   const type = this.props.type
    //   this.props.onSelectChange(event,type)
    // }

    handleSelect = (val) => {
      const type = this.props.type
      this.props.onSelectChange(val,type)
    }
  
    render() {
      const options = this.props.options;
      const title = this.props.title
      const value = this.props.value
      return (
        <Space className="select-box" size="large">
          <span className="select-title">{title}</span>
          <Select style={{ width: 180 }} value={value} onChange={this.handleSelect} allowClear>
            {options.map(opt => <Option key={opt.val} value={opt.val}>{opt.name}</Option>)}
          </Select>
        </Space>
      )
    }
  }
  

  export default SelectBox