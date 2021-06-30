import React from 'react'

import { Form, Modal, Input, Button, Select } from 'antd'

const {TextArea} = Input

class AddForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    onCancel = (e) => {
        this.props.onHandleAddCancel(e)
    }

    render() {
        return (
            <Modal
                visible={this.props.showForm}
                title="新增/编辑"
                okText="保存"
                cancelText="取消"
                onCancel={this.onCancel}
            >
                <Form
                    name="form_in_modal"
                >
                    <Form.Item
                        name="product"
                        label="产品"
                    >
                        <Select
                            placeholder="必选"
                        />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        label="类型"
                    >
                        <Select
                            placeholder="必选"
                        />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        label="账户名称"
                    >
                        <Input placeholder="必填，不允许有空格哦"/>
                    </Form.Item>

                    <Form.Item
                        name="textdesc"
                        label="文案说明"
                    >
                        <TextArea placeholder="非必填，可填任意字符，上限100字" maxLength={100}/>
                    </Form.Item>

                </Form>
            </Modal>
        )
    }

}

export default AddForm