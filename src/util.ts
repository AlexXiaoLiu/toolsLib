
/**
 * 存储localstorage
 * @param name 存储的key
 * @param data 存储的value
 */
export const setLocalStorage = (name:string,data:any) =>{
  let str = typeof data === 'string' ? data : JSON.stringify(data);
  localStorage.setItem(name,str);
}

/**
 * 取出localstorage  取出后根据需要进行JSON.parse
 * @param name localStorage中的key
 */
export const getLocalStorage = (name:string) => {
  let data = localStorage.getItem(name);
  return data;
}


/**
 * 删除指定localstorage的key
 * @param name key
 */
export const removeLocalStorageItem = (name:string) => {
  localStorage.removeItem(name);
}

/**
 * 清除全部localStorage
 */
export const removeAllLocalStorage = () => {
  localStorage.clear();
}

/**
 * 设置cookie
 * @param name string类型，cookie的key，必填
 * @param data string类型或number类型，cookie的value，必填
 * @param expire number类型，单位为天，cookie的过期时间，可选，不填则关闭会话就销毁
 * @param path cookie存储路径 默认 /
 */
export const setCookie = (name: string, data:string | number, expire?:number, path:string = '/') =>{
  if(expire){
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + expire);
    document.cookie = name+'='+encodeURIComponent(data)+';expires='+expireDate+';path='+path;
  } else {
    document.cookie = name+'='+encodeURIComponent(data)+';path='+path;
  }
}

/**
 * 获取cookie
 * @param name string类型，需要获取value的cookie的key，必填
 */
export const getCookie = (name:string) => {
  var cookieArr = document.cookie.split('; ');
  let arr = cookieArr.filter(i=>{return i.split('=')[0]== name});
  if(arr){
    let data = arr.map(item=>{return item.split('=')[1]})[0];
    return decodeURIComponent(data);
  }
  return null;
}

/**
 * 删除cookie
 * @param name 删除对应cookie 
 */
export const removeCookieItem = (name:string) => {
  setCookie(name,1,-1);
}

/**
 * 时间戳转字符串
 * @param date 传入值为 new Date(xxx)
 * @param fmt  需要的时间格式 如需要时分秒则为 'YYYY-mm-dd hh-MM-ss'
 */
export const dateFormat = (date:any,fmt:string) => {
  let ret;
  const opt:any = {
    "Y+": date.getFullYear().toString(),       // 年
    "m+": (date.getMonth() + 1).toString(),    // 月
    "d+": date.getDate().toString(),           // 日
    "h+": date.getHours().toString(),          // 时
    "M+": date.getMinutes().toString(),        // 分
    "s+": date.getSeconds().toString(),        // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}
