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