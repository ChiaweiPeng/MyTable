import React from 'react'
import { Table, Space } from 'antd'

const { Column } = Table

const tableHeaders = [
    {
        key: 'index',
        dataIndex: 'key',
        title: '序号',
    },
    {
        key: 'type',
        dataIndex: 'type',
        title: '类型'
    },
    {
        key: 'product',
        dataIndex: 'product',
        title: '产品'
    },
    {
        key: 'name',
        dataIndex: 'name',
        title: '名称'
    },
    {
        key: 'belongType',
        dataIndex: 'belongType',
        title: '所属分类'
    },
    {
        key: 'defaultText',
        dataIndex: 'defaultText',
        title: '默认文案'
    }
]

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