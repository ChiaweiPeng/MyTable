import { productData } from '../assets/productData.json'
import { message } from 'antd';

function getData(searchData) {
    let arr = []
    return new Promise((resolve) => {
        if (searchData === 1) {
            arr = productData
        } else {
            productData.forEach(item => {
                // TODO1: 查阅 MDN 文档: Array.includes / String.includes语法，在此场景下代替indexOf方法
                // TODO2: 查阅 MDN 文档: Array.filter语法，代替let arr = [] + arr.forEach + arr.push的写法
                if (item.product.indexOf(searchData.product) >= 0 || item.type.indexOf(searchData.type) >= 0 || item.name.indexOf(searchData.prodName) >= 0) {
                    arr.push(item)
                }
            })
            if (searchData.prodName !== " " && arr.length === 0) {
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