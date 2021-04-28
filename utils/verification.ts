/**
 * 判断是否为邮箱格式
 * @param email 
 */
export const isEmail = (email:string) => {
  var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断是否为6-12位并由英文字母开头的密码
 * @param passWord 
 */
export const isPassWord = (passWord:string) =>{
  var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
  if(re.test(passWord)){
    return true;
  } else {
    return false;
  }
}

/**
 * 判断是否为11位手机号码
 * @param phone 
 */
export const isPhone = (phone:string) => {
  var re = /^1\d{10}$/;
  if (re.test(phone)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断是否为座机号码
 * @param telPhone 
 */
export const isTelPhone = (telPhone:string) => {
  var re = /^0\d{2,3}-?\d{7,8}$/;
  if (re.test(telPhone)) {
    return true;
  }
  else {
    return false;
  }
}
