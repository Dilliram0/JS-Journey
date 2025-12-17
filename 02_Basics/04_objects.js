// const fbUser = new Object();

const fbUser = {};

fbUser.id = "123abc";
fbUser.name = "Kanha";
fbUser.isLoggedIn = false;

// console.log(fbUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Abhisek",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign(obj1,obj2); => assigns value to obj1
// const obj3 = Object.assign({},obj1,obj2); // assigns value to new object

const obj3 = {...obj1,...obj2};

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "unciscooked@lol.com"
    },
    {
        id: 2,
        email: "harekrishna@lol.com"
    },
    {
        id: 3,
        email: "radheradhe@lol.com"
    }
]

// console.log(users[1].email);

// console.log(fbUser);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));

// console.log(fbUser.hasOwnProperty('id'));


// +++++ Objects destructuring ++++++

const course = {
    coursename: "JS in nepali",
    price: 1099,
    courseTeacher: "Abhisek",
}

// console.log(course.price);

const {coursename: JsNepal} = course

// console.log(coursename);
console.log(JsNepal);


// JSON 

// {
//     "coursename": "JS in nepali",
//     "price": 1099,
//     "courseTeacher": "Abhisek",
// }


[
    {},
    {},
    {}
]