Promise.resolve(1)
    .then(value => console.log(value))  // 1

Promise.resolve('hello')
    .then(value => console.log(value))  // hello

Promise.resolve([1, 2, 3])
    .then(value => console.log(value))  // [1 2 3]

Promise.reject(new Error('에러 발생'))
    .catch((err: Error) => console.log('error:', err.message))