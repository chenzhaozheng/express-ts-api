/*
 * @Author: chenzhaozheng
 * @Date: 2019-12-02 10:17:13
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2020-02-05 17:55:31
 * @Description: file content
 */

/**
 * 加上前缀0
 * @param num
 * @returns
 */
export const addPreZero = (num: any) => {
    if (num < 10){
        return '0' + num;
    }
    return num.toString();
};

/**
 * 获取范围内的时间【天】
 * @param start_time
 * @param end_time
 * @returns
 */
export const getEveryDayArr = (start_time: any, end_time: any) => {
    let temp_start_time = start_time;
    let i = 1;
    let data = [start_time];

    if (end_time > start_time) {
        while (i < 1000){
            let next_time = new Date(temp_start_time).setDate(new Date(temp_start_time).getDate() + 1);
            let t = new Date(next_time);

            temp_start_time = t.getFullYear() + '-' + addPreZero(t.getMonth() + 1) + '-' + addPreZero(t.getDate());
            console.log(temp_start_time);
            if (new Date(temp_start_time).getTime() > new Date(end_time).getTime()) {
                break;
            }
            data[i] = temp_start_time;
            i++;
        }
        return data;
    }
    return [];
};


/**
 * @param item
 * @param size
 * @returns {*}
 */
export function chunk(item: any, size: any) {
    if (item.length <= 0 || size <= 0){
        return item;
    }

    let chunks = [];

    for (let i=0;i<item.length;i=i+size){
        chunks.push(item.slice(i, i+size));
    }

    return chunks;
}

/**
 * @param item
 * @param num
 * @returns {*}
 */
export function split(item: any, num: any) {
    if (item.length <= 0){
        return item;
    }

    let groupSize = Math.ceil(item.length / num) ;

    return chunk(item, groupSize);
}

/**
 * 随机文件名称
 * @returns
 */
export function randFileName() {
    const t = new Date();

    return String(t.getFullYear()) + String(t.getMonth() + 1) + String(t.getSeconds()) + parseInt((Math.random() * 10000000).toString(), 10);
}

export default { addPreZero, split, getEveryDayArr, randFileName };

