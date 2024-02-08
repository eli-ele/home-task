//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: 
// const x = "eli"; //პრიმიტიული

// const araay = ["eli", "kvinikadze",] //არაპრიმიტიული

// const object = {
//     firstName: "eli",
//     lastNmae: "kvinikadze",  //არაპრიმიტიყლი
// }


//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer:

// let x = 10;
// // let x  = 15;  // let ცვლადეს ხელმეორედ  ვერ ავღწრთ,
//  console.log(x);


// let y = 25;
// y = 20;   // ხოლო მნიშვლელობას შევუცვლით.
// console.log(y);


// const x = 25;
// console.log(x);

// x = 30;
// console.log(x);
// const ცვლადს აღწერის შემდეგ ხელმეორედ ვერ მივანიჭებთ მნიშვნელობას, ვერც ხელმეორედ ავღწერთ.

// //let და const არის ბლოკური ტიპი
// const x = 10;
// {
//     const x = 20;   //ეს ბლოკი ცხოვრობს ამ ბლოკში
//     console.log(x); 
// }
// console.log(x);

//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.

// let x = 10;
// let y =20;
// let a = 30;
// y = 15;
// console.log(x, y, a);

// let numbers = x + y + a;
// console.log(numbers);


// let firstName = 'eli';
// let lastName = 'kvinikadze';
// console.log(lastName);
// console.log(firstName);
// // 1_ლი დაიბეჭდება lastName 2_რე დაიბეჭდება firstName რადგან პიველი დალოგილია lastName 


// const firstName = 'eli';
// const lastName = 'kvinkadze';

// console.log(`i'm ${firstName} ${lastName}`);


// const firstName = 'keso';
// const lastName = 'kacitadze';
// let fullName = `i'm ${firstName} ${lastName}`;

// console.log(fullName);


//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
// (firstName,lastName,age,email,address,isStudent) და დალოგეთ

// const person = [
//     {
//         firstName: 'eli',
//         lastNames: 'kvinikadze',
//         age: 30,
//         email: 'elikvinikadze@gmail.com',
//         addres: 'Tbilisi',
//         isStudent: 'she is a stydent',
//     }
// ];
// // console.log(person);
// // console.log(person[0].firstName,person[0].lastNames);

// // for (let i = 0; i < person.length; i++){
// //     console.log(person);
// // };
