export function formatUserInfo(name, avatar, uid){
  return{
    name,
    avatar,
    uid,

  }
}

export function formatDuck (text, {name, avatar, uid}) {
  avatar ? avatar : null
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now()
  }
}