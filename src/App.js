import React from 'react';
import { Space } from 'antd';
import './App.css';

import MyTable from './components/Table';
import ChooseArea from './components/ChooseArea';
// import { productData } from './assets/productData.json'
import getData from './utils/getData';

class DemoTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchArr: []
    }

    // TODO: 改用ES6语法定义handleButtonSearch方法，避免使用bind绑定this（项目内其他方法定义也这么改）
    // this.handleButtonSearch = this.handleButtonSearch.bind(this)
  }

  
  componentDidMount() {
    const isInit = {}

    // TODO1: 改用async/await方式处理Promise结果
    // TODO2: 思考：如果接口报错，该怎么处理？
    this.fetchDataFromRemote(isInit)
  }

  // TODO1: 改用async/await方式处理Promise结果
  // TODO2: 此区域代码是不是跟componentDidMount区域内的代码作用一样？能否提取成可复用的公用方法？
   handleButtonSearch = (e,searchData) => {
    this.fetchDataFromRemote(searchData)
  }

   // 抽取异步获取数据方法
   fetchDataFromRemote = async(searchData) => {
    try {
      const data = await getData(searchData)
      this.setState({
        searchArr: data
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const searchProps = this.state.searchArr
    return (
      <Space className="demo-Table" direction="vertical" style={{ width: '100%' }}>
        <ChooseArea onHandleSearchBtn={this.handleButtonSearch} />
        <MyTable searchData={searchProps} />
      </Space>
    )
  }
}


function App() {
  return (
    <div className="App">
      <DemoTable></DemoTable>
    </div>
  );
}

export default App;
