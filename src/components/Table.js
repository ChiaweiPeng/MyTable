import React from 'react'
import { Table, Space } from 'antd'

import {tableHeaders} from '../assets/tableHeaders.json'

const { Column } = Table

class MyTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchData: this.props.searchData
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevprops) {
        if (this.props.searchData !== prevprops.searchData) {
            this.setState({
                searchData: this.props.searchData
            })
        }
    }

    render() {
        return (
            <Space className="table-area" direction="vertical">
                <Table dataSource={this.state.searchData} bordered pagination={false} style={{ border: 'solid 2px #999' }}>
                    {tableHeaders.map(item =>
                        <Column key={item.key} title={item.title} dataIndex={item.dataIndex} />
                    )}
                </Table>
            </Space>
        )
    }
}

export default MyTable