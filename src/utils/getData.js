import { productData } from '../assets/productData.json'
import { message } from 'antd';

function getData(searchData) {
    let arr = []
    return new Promise((resolve) => {
        if (JSON.stringify(searchData) === '{}') {
            // 初始化加载时
            arr = productData
        } else {
            for (let val in searchData) {
                let myData = searchData[val]
                if (myData === undefined || myData.length === 0) {
                    // 选择框或者输入框为空跳出循环
                    continue
                } else if (myData.length > 1) {
                    // 多选情况
                    if (typeof myData === 'string') {
                        // 由于传进来的prodName是一个string，要包成一个数组值才能参与循环
                        myData = [myData]
                    }
                    myData.forEach(opts => {
                        productData.forEach(item => {
                            if (item.product.includes(opts) || item.type.includes(opts) || item.name.includes(opts)) {
                                arr.push(item)
                            }
                        })
                    })
                } else {
                    arr = productData.filter(item => {
                        return item.product.includes(myData) || item.type.includes(myData) || item.name.includes(myData)
                    })
                }
            }

            if (searchData.prodName !== "" && arr.length === 0) {
                arr = productData
                message.info('您搜索的内容不存在,为您展示当前数据')
            }
        }

        resolve(arr)
    }).then((arr) => {
        return arr
    })
}

export default getData