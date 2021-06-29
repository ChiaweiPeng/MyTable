import { productData } from '../assets/productData.json'
import { message } from 'antd';

function getData(searchData) {
    let arr = []
    return new Promise((resolve) => {
        if (JSON.stringify(searchData) === '{}') {
            arr = productData
        } else {
            // console.log(searchData)
            for (let val in searchData) {
                let myData = searchData[val]
                if (myData === undefined || myData.length === 0) {
                    continue
                } else if (myData.length > 1) {
                    // 多选情况
                    if (typeof myData === 'string') {
                        myData = [myData]
                    }
                    myData.forEach(opts => {
                        console.log(opts)
                        productData.forEach(item => {
                            console.log(item.product) 
                            if (item.product.includes(opts) || item.type.includes(opts) || item.username.includes(opts)) {
                                arr.push(item)
                            }
                        })
                    })
                } else {
                    arr = productData.filter(item => {
                        return item.product.includes(myData) || item.type.includes(myData) || item.username.includes(myData)
                    })
                }
            }

            if (searchData.username !== "" && arr.length === 0) {
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