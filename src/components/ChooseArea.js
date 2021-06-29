import React from 'react'
import { Space, Button } from 'antd'

import InputBox from './InputBox'
import SelectBox from './SelectBox'
import { selectData } from '../assets/selectData.json'

class ChooseArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: '',
            type: '',
            prodName: ''
        }
    }

    handleNameChange = (val) => {
        if (val === "") {
            // TODO?: 为什么要设置一个空格？
            val = ""
        }
        this.setState({
            prodName: val
        })
    }

    handleSelect = (e,type) => {
        if (type === 'product') {
            this.setState({
                product: e
            })
        } else {
            this.setState({ type: e })
        }
    }

    handleButtonSearch = (e) => {
        const searchData = this.state
        this.props.onHandleSearchBtn(e, searchData)
    } 

    render() {
        return (
            <Space className="choose-area" direction="vertical" size="large">
                <Space className="select-area" size="large">
                    {selectData.map(data =>
                        <SelectBox key={data.id}
                            type={data.type}
                            title={data.title}
                            options={data.options}
                            onSelectChange={this.handleSelect}
                        />)}
                    <InputBox onNameChange={this.handleNameChange} prodName={this.state.prodName} />
                </Space>

                <Space className="search-btn">
                    <Button style={{ width: 120 }} onClick={this.handleButtonSearch}>查询</Button>
                </Space>
            </Space>
        )
    }
}

export default ChooseArea