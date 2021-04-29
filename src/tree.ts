/**
 * list转tree结构
 * 
 * 
 * @param list         // list数组
 * @param pid          // 父级ID的值
 * @param nodeIdName   // 当前节点ID的字段名
 * @param nodePidName  // 当前节点父级ID的字段名
 * @param childName    // 返回组装的子集字段名
 * @returns 
 */

export const list2Tree = (list:Array<any>,pid:string,nodeIdName:string,nodePidName:string,childName:string) =>{
  let treeData:any = [];

  list.forEach((item:any)=>{
    if(item[nodePidName] === pid){
      let child = list2Tree(list,item.id,nodeIdName,nodePidName,childName);
      if(child && child.length>0){
        item[childName] = child;
      }
      treeData.push(item);
    }
  });

  return treeData;
}

/**
 * 树形结构里面查找匹配的字段的值，然后返回对应字段的值
 * 
 * 
 * @param tree                // 树形结构数据
 * @param searchFieIdValue    // 搜索字段的值
 * @param searchFieId         // 搜索的字段名
 * @param returnFieId         // 返回的字段名
 * @param childName           // 子集字段名
 * @returns 
 */

export const searchTreeFieIdValue = (tree:Array<any>,searchFieIdValue:any,searchFieId:string,returnFieId:string,childName:string) =>{
  let revertValue:any = null;
  if(tree && tree.length > 0){
    tree.forEach((item:any)=>{
      if(revertValue){
        return revertValue;
      }
      if(item[searchFieId] === searchFieIdValue){
        revertValue = item[returnFieId];
        return revertValue;
      } else {
        if(item[childName] && item[childName].length > 0){
          revertValue = searchTreeFieIdValue(item[childName],searchFieIdValue,searchFieId,returnFieId,childName);
        }
      }
    });
    return revertValue;
  } else {
    return '';
  }
}

/**
 * 树形结构拍平成list(保留了child)
 * 
 * 
 * @param tree         // 树形数据 
 * @param childName    // 子集字段名称
 * @returns 
 */
export const tree2List = (tree:Array<any>,childName:string) => {
  let listData:any = [];

  tree.forEach((item:any)=>{
    listData.push(...item);
    if(item[childName] && item[childName].length > 0){
      listData.push(...tree2List(item[childName],childName));
    }
  });
  
  return listData;
}