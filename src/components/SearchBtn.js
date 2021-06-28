import React from 'react';
import { Button } from 'antd';

class SearchBtn extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleMultiSearch = this.handleButtonSearch.bind(this)
    }
  
    handleButtonSearch(e) {
      alert('you final select is ')
    }
  
    render() {
      return (
        <Button style={{width:120}} onClick={this.handleButtonSearch}>查询</Button>
      )
    }
  }

export default SearchBtn