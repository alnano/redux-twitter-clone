export default function auth () {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'andre',
          avatar: '',
          uid: 'greed',
        }, 2000)
      })
    })
}
export function checkIfAuthed(store) {
    return store.getState().isAuthed
}

export function logout(){
  console.log('logout')
}