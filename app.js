"use strict";
// let a: number = 12;
// let b: string = "ka";
// let c: number = 4;
// console.log(a + b + c);
Object.defineProperty(exports, "__esModule", { value: true });
let carObj = {
    name: "Honda Civic",
    model: 10 + "hc",
    color: "blue",
};
function result(carObj) {
    console.log(carObj.name);
    console.log(carObj.model);
    console.log(carObj.color);
}
result(carObj);
function argu(obj) {
    console.log(obj.email);
    console.log(obj.password);
    console.log(obj.superadmin);
}
argu({
    email: "abdulrehmanar1996@gmail.com",
    password: 1234,
    superadmin: true,
});


