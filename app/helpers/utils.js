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

export function formatTimestapm (timestamp) {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}