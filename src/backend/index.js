import { productData } from "./database/store";

const dataStore = JSON.parse(JSON.stringify(productData));

/** 查询方法
 *  postData postData参数为形如{ product: [xxx, yyy], ... }的查询条件对象
 *  返回值为数组结果
*/
function getDataFromDatabase(postData) {
    return new Promise((resolve, reject) => {
        console.log(dataStore);
    });
}

/**
 * 新增方法
 */
function addDataToDatabase(postData) {
    return new Promise((resolve, reject) => {
        console.log(dataStore);
    });
}

/**
 * 编辑方法
 */
function editData(postData) {
    return new Promise((resolve, reject) => {
        console.log(dataStore);
    });
}

/**
 * 删除方法
 */
function removeData(postData) {
    return new Promise((resolve, reject) => {
        console.log(dataStore);
    });
}

export {
    getDataFromDatabase,
    addDataToDatabase,
    editData,
    removeData
}