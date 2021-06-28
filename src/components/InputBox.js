import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input

class InputBox extends React.Component {
    constructor(props) {
      super(props); //不用props可以不写吗
  
      this.handleSearch = this.handleSearch.bind(this)
      this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e) {
      // 状态提升至父元素
      this.props.onNameChange(e.target.value)
    }
  
    handleSearch(val) {
      alert('在名称内部进行搜索关键字：'+ val)
    }
  
    render() {
      const ProdName = this.props.ProdName
      return (
        <Space className="input-box" direction="horizontal" size="large">
          <span className="input-title">名称</span>
          <Search style={{ width: 200 }} value={ProdName} onSearch={this.handleSearch} onChange={this.handleSearchChange}></Search>
        </Space>
      )
    }
  }

  export default InputBox