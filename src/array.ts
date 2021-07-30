/**
 * 单个或多个数字或字符串数组合并去重
 */
export function arraysDuplicationRemove () {
	let arr = Array.from(arguments).flat(Infinity);
	return Array.from(new Set([...arr]))
}

/**
 * 单个或多个对象数组合并去重
 * @param findName 匹配名称
 */
export function arraysItemObjectDuplicationRemove (findName:string) {
	let arr = Array.from(arguments).slice(1);
	let returnArr:Array<any> = [];

	arr.forEach(i=>{
		i.forEach((j:any)=> {
			const findIndex = returnArr.findIndex(element => element[findName] === j[findName]);
			if(findIndex===-1){
				returnArr = [...returnArr,j]
			}
		})
	});

	return returnArr;
}

/**
 * 单个对象数组返回符合匹配字段的新数组
 * @param findName 匹配名称
 */
export const searchArrayItemValue = (findName:string,value:string,searchArray:Array<any>) => {	
	return searchArray.map(i=> i[findName] === value);
}