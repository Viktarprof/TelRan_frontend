let products = [
    {
          id: 1,
          title: 'велосипед',
          price: 45000,
          count: 3, // количество на складе
          marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
      },
      {
          id: 2,
          title: 'ролики',
          price: 25000,
          count: 5,
          marks: [4, 3, 5, 5]
      },
      {
          id: 3,
          title: 'самокат',
          price: 25000,
          count: 5,
          marks: [4, 3, 5, 5]
      },
      {
          id: 4,
          title: 'ракетка',
          price: 25000,
          count: 5,
          marks: [4, 3, 5, 5]
      }
]

// let new_prod = products.map((elem) => ({id: elem.id ** 2, price_dol: elem.price })) 
// console.log(new_prod)


// let filtered = products.filter(elem => elem.id > 2000)
// let finded = products.find(elem => elem.id > 50000)

// console.log(filtered)

// function filter2(array,callback){
//     let new_array = []
//     for (let elem of array){
//         if (callback(elem)){
//             new_array.push(elem)
//         }
//     }
//     return new_array
// }

// function find2(array,callback){
//     for (let elem of array){
//         if (callback(elem)){
//             return elem
//         }
//     }
//     return
// }

// function map2(array,callback){
//     let new_array = []
//     for (let elem of array){
//         new_array.push(callback(elem))
//     }
//     return new_array
// }

// console.log(map2([1,2,3], elem => elem ** 2))


// -----------------
// Посчитать сумму элементов

// let array = [1,2,3,4]

// let sum = 0
// for (let elem of array){
//     sum = elem + sum
// }
// console.log(sum)

// let result = products.reduce((sum,elem) => sum + elem.title[elem.title.length - 1], '')

// console.log(result)
