import {reactive} from "vue"

export const storeUserInfo = reactive({
  user: undefined,
  token: undefined,
  redirect: undefined,
  // expire: undefined,
  // setting: undefined,
})

export function checkPrivilege(ps, isAnd){
  if(ps && ps.length>0){
    if(storeUserInfo.user && storeUserInfo.user.role && storeUserInfo.user.role.privileges){
      if(isAnd){
        // 并的关系
        for (let p of ps){
          if(storeUserInfo.user.role.privileges.indexOf(p)<0) return false
        }
        return true
      }else{
        // 或的关系
        for (let p of ps){
          if(storeUserInfo.user.role.privileges.indexOf(p)>=0) return true
        }
        return false
      }
    }else{
      return false
    }
  }else{
    return true
  }
}
