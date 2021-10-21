export default function print() {
  console.log('hello world')
  // 异步加载
  import('./async').then((a) => {
    console.log(a)
  })
}
