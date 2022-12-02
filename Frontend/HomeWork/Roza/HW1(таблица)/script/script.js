// 1) Создать пронумерованные списки с товарами (на основе массива с объектами);
let object = [
{
    title: "BMW",
    price: "40000",
    count: "15" 
},
{
    title: "Toyota",
    price: "20000",
    count: "13"
},
{
    title: "Ford",
    price: "30000",
    count: "20"
},
{
    title: "Chevrolet",
    price: "60000",
    count: "9"
},
{
    title: "Volkswagen",
    price: +"30000",
    count: +"13"
},
]
let div = document.createElement('div');
let ul = document.createElement('ol');
let body = document.querySelector('body')
for (let i = 0; i < object.length; i++){
    let li = document.createElement('li');
const {title, price, count} = object[i]; 
    
    li.innerText = 'Марка автомобиля - ' + `${title}  Цена одной еденицы =  ${price} Кол-во автомобилей на складе - ${count}`;
ul.append(li);

}
div.appendChild(ul)
body.appendChild(div);

// //__________________________________________________
// //for (let i = 0; i < object.length; i++){
//         //const {title, price, count} = object[i]; 
//         //console.log(object[i].title) 
//         //console.log('Марка автомобиля - ' + `${title}  Цена одной еденицы =  ${price} Кол-во автомобилей на складе - ${count}`)
//      //}
// //__________________________________________________




// //2) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива  с объектами с прошлой задачи), а внизу выводится итоговая сумма товаров и их количество.

let sum = 0;
let counts = 0;
for (let i = 0; i < object.length; i++){
    sum += +object[i].price;
    counts += +object[i].count; 
}
    let div1 = document.createElement('div')   
    let p1 = document.createElement('p');
    let p = document.createElement('p');
      
    p1.textContent= 'Итоговая сумма товаров = ' + sum + " валюта";
    p.textContent= 'Итоговое колличество товара = ' + counts + ' шт' ;

    div1.append(p);
    div1.append(p1);
    
body.appendChild(p);
body.appendChild(p1);



// //__________________________________________________
// let sum = 0;
// let counts = 0;
// for (let i = 0; i < object.length; i++){
//     sum += +object[i].price;
//     counts += +object[i].count;
//    }
// console.log('Итоговая сумма товаров = ' + sum + " валюта")
// console.log('Итоговое колличество товара = ' + counts + " шт")
// //__________________________________________________



//3)Напишите скрипт, который выводит в интерфейс следующую таблицу:


//let body = document.querySelector('body'); // создаем тело Т
let title = [ "No", "Full Name", "Positions", "Salary",]
let obj = [
    {num: "1", name: "Bill Gates", position: "Microsoft", salary: "$1000"},
    {num: "2", name: "Stive Jobs", position: "Aplle", salary: "$1200"},
    {num: "3", name: "Larry Page", position: "Google", salary: "$1100"},
    {num: "4", name: "Mark Zuckerberg", Position: "Facebook", salary: "$1300"}
]
let table = document.createElement('table');
let thead = document.createElement('tr');
for(let i = 0; i <title.length; i++ ){
    const th = document.createElement('th');
    th.innerText = title[i];
    thead.append(th);
  }   
    table.append(thead)

    for (let i = 0; i < obj.length; i++){
    const tr = document.createElement('tr');

        const num = document.createElement('td');
        const name = document.createElement('td');
        const position = document.createElement('td');
        const salary = document.createElement('td');

    num.innerText= obj[i].num
    name.innerText= obj[i].name
    position.innerText= obj[i].position
    salary.innerText= obj[i].salary

        tr.append(num);
        tr.append(name);
        tr.append(position);
        tr.append(salary);

    table.appendChild(tr);
    body.appendChild(table);
    name.setAttribute('class', 'name')
    position.setAttribute('class', 'test')

}


// как не делать
// let table = document.createElement('table'); //  создаем таблицу
// let thead = document.createElement('thead'); // создаем заголовок Т
// let tbody = document.createElement('tbody'); // создаем тело Т

//     let row1 = document.createElement('tr'); // создали строку 1
//     let heading_1 = document.createElement('th');
//     heading_1.innerHTML = " No.";
//     let heading_2 = document.createElement('th');
//     heading_2.innerHTML = "Full Name";
//     let heading_3 = document.createElement('th');
//     heading_3.innerHTML = "Position"; //
//     let heading_4 = document.createElement('th');
//     heading_4.innerHTML = "Sallary"; //
// row1.appendChild(heading_1);
// row1.appendChild(heading_2);
// row1.appendChild(heading_3);
// row1.appendChild(heading_4)
// thead.appendChild(row1);
// table.appendChild(thead);
// body.append(table)


//     let row2 = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.innerText = ' 1 ';
//     let td2 = document.createElement('td');
//     td2.innerText = ' Bill Gates ';
//     let td3 = document.createElement('td');
//     td3.innerText = ' Founder Apple ';
//     let td4 = document.createElement('td');
//     td4.innerText = ' $1000 ';

// row2.appendChild(td1)
// row2.appendChild(td2)
// row2.appendChild(td3)
// row2.appendChild(td4)
// tbody.appendChild(row2)
// table.appendChild(tbody);
// body.append(table)


//     let row3 = document.createElement('tr');
//     let td5 = document.createElement('td');
//     td5.innerText = ' 2 ';
//     let td6 = document.createElement('td');
//     td6.innerText = ' Steve Jobs ';
//     let td7 = document.createElement('td');
//     td7.innerText = ' Founder Aplle ';
//     let td8 = document.createElement('td');
//     td8.innerText = ' $1200 ';

// row3.appendChild(td5)
// row3.appendChild(td6)
// row3.appendChild(td7)
// row3.appendChild(td8)
// tbody.appendChild(row3)
// table.appendChild(tbody);
// body.append(table)


//     let row4 = document.createElement('tr');
//     let td9 = document.createElement('td');
//     td9.innerText = ' 3 ';
//     let td10 = document.createElement('td');
//     td10.innerText = ' Larry Page ';
//     let td11 = document.createElement('td');
//     td11.innerText = ' Founder Google ';
//     let td12 = document.createElement('td');
//     td12.innerText = ' $1100 ';

// row4.appendChild(td9)
// row4.appendChild(td10)
// row4.appendChild(td11)
// row4.appendChild(td12)
// tbody.appendChild(row4)
// table.appendChild(tbody);
// body.append(table)

//     let row5 = document.createElement('tr');
//     let td13 = document.createElement('td');
//     td13.innerText = ' 3 ';
//     let td14 = document.createElement('td');
//     td14.innerText = ' Larry Page ';
//     let td15 = document.createElement('td');
//     td15.innerText = ' Founder Google ';
//     let td16 = document.createElement('td');
//     td16.innerText = ' $1100 ';

// row5.appendChild(td13)
// row5.appendChild(td14)
// row5.appendChild(td15)
// row5.appendChild(td16)
// tbody.appendChild(row4)
// table.appendChild(tbody);
// body.append(table)


//   table.setAttribute('id', 'root');
//==================================================






