console.log(document);

let products = [
  {
    id: 1,
    product_name: "Men solid neck green T-shirt",
    price: 299,
    category: "T-shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/kz8qsnk0/t-shirt/j/f/s/l-db1024-38-3bros-original-imagbawjfyhkduxd.jpeg?q=70",
  },
  {
    id: 2,
    product_name: "Men Slim Fit Solid Cut Away Collar Formal Shirt",
    price: 400,
    category: "Formal Shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/l/h/j/s-um0017-chenecloth-original-imagkxbrfdxkzvw2.jpeg?q=70",
  },
  {
    id: 3,
    product_name: "Men Skinny Mid Rise Blue Jeans",
    price: 899,
    category: "jeans",
    pic: "https://rukminim1.flixcart.com/image/612/612/ktd9mkw0/jean/b/1/q/32-36087-0359-levi-s-original-imag6q2t2g3kjr2f.jpeg?q=70",
  },
  {
    id: 4,
    product_name: "Men solid neck green T-shirt",
    price: 399,
    category: "T-shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70",
  },
  {
    id: 5,
    product_name: "Men Skinny Mid Rise Blue Jeans",
    price: 800,
    category: "jeans",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/f/a/-original-imaghej6bprgjzdz.jpeg?q=70",
  },
  {
    id: 6,
    product_name: "Striped Men Round Neck Dark Green T-Shirt",
    price: 350,
    category: "T-shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/n/a/x/s-tsrt-catalog-03-kajaru-original-imaghgenghcqe2um.jpeg?q=70",
  },

  {
    id: 7,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 500,
    category: "Shorts",
    pic: "https://rukminim1.flixcart.com/image/612/612/kshtxu80/short/q/m/u/m-ksh1702-kraasa-original-imag62fc7kztt4a4.jpeg?q=70",
  },
  {
    id: 8,
    product_name: "Men Color Block Polo Neck Black T-Shirt",
    price: 299,
    category: "T-shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/kl6wx3k0/t-shirt/y/n/i/s-bbt-try-this-original-imagydarhsryeahn.jpeg?q=70",
  },
  {
    id: 9,
    product_name: "Men Skinny Mid Rise Blue Jeans",
    price: 749,
    category: "jeans",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/s/0/w/32-36087-0697-levi-s-original-imagkgv9rgnsjgkh.jpeg?q=70",
  },
  {
    id: 10,
    product_name: "Men Slim Fit Solid Cut Away Collar Formal Shirt",
    price: 300,
    category: "Formal Shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/g/p/xl-for-half-lichk-green-base-41-original-imagn3aqfkbv2sdf.jpeg?q=70",
  },
  {
    id: 11,
    product_name: "Men Striped Polo Neck Multicolor T-Shirt",
    price: 250,
    category: "T-shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/2/w/7/xxl-126468465-try-this-original-imaghgzrg8wgpypb.jpeg?q=70",
  },

  {
    id: 12,
    product_name: "Men Slim Fit Solid Cut Away Collar Formal Shirt",
    price: 350,
    category: "Formal Shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/x/6/q/m-kcsh-fo-1647-ma-fubar-original-imaghg9qdht3ghgn.jpeg?q=70",
  },
  {
    id: 13,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 329,
    category: "Shorts",
    pic: "https://m.media-amazon.com/images/I/71qf68jIAjL._AC_UL600_FMwebp_QL65_.jpg",
  },

  {
    id: 14,
    product_name: "Men Slim Fit Solid Cut Away Collar Formal Shirt",
    price: 399,
    category: "Formal Shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/5/w/d/l-frml-st2-vebnor-original-imag7bdtc5zzx25v-bb.jpeg?q=70",
  },
  {
    id: 15,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 400,
    category: "Shorts",
    pic: "https://m.media-amazon.com/images/I/71glmyH2JRL._AC_UL600_FMwebp_QL65_.jpg",
  },
  {
    id: 16,
    product_name: "Men Skinny Mid Rise Blue Jeans",
    price: 999,
    category: "jeans",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/x/w/t/32-9698-slm-slmft-midbk-killer-original-imagnrpehtp6zzhf.jpeg?q=70",
  },
  {
    id: 17,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 350,
    category: "Shorts",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/short/v/k/c/l-tnv-rdshortabs1-tripr-original-imagby6ywq87gxgg-bb.jpeg?q=70",
  },
  {
    id: 18,
    product_name: "Men Skinny Mid Rise Blue Jeans",
    price: 650,
    category: "jeans",
    pic: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/g/e/u/-original-imaghejgkzbv8kqh.jpeg?q=70",
  },
  {
    id: 19,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 299,
    category: "Shorts",
    pic: "https://m.media-amazon.com/images/I/814rpp-AYUL._AC_UL600_FMwebp_QL65_.jpg",
  },
  {
    id: 20,
    product_name: "Men Slim Fit Solid Cut Away Collar Formal Shirt",
    price: 450,
    category: "Formal Shirt",
    pic: "https://rukminim1.flixcart.com/image/612/612/kst9gnk0/shirt/c/c/h/l-frml-st2-vebnor-original-imag6apmjzyehu6p.jpeg?q=70",
  },
  {
    id: 21,
    product_name: "Pack of 2 Printed Men Dark Blue, Red Regular Shorts",
    price: 400,
    category: "Shorts",
    pic: "https://rukminim1.flixcart.com/image/612/612/kshtxu80/short/f/u/v/s-ksh1702-kraasa-original-imag62fcnzbzkdxw.jpeg?q=70",
  },
];

function displayData(arr) {
  document.getElementById("card_product").innerHTML = "";

  arr.forEach((product, index) => {
    // dynmically code for card_product. 

    let card = document.createElement("div");
    card.classList.add("card_item");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img_container");

    // adding img:
    let img = document.createElement("img");
    img.setAttribute("src", product.pic);
    imgContainer.appendChild(img);

    let product_info = document.createElement("div");
    product_info.classList.add("product_info");

    let h2 = document.createElement("h2");
    h2.append(product.product_name);
    product_info.appendChild(h2);

    let para = document.createElement("p");
    para.append("₹" + product.price);
    product_info.appendChild(para);

    card.appendChild(imgContainer);
    card.appendChild(product_info);

    document.getElementById("card_product").appendChild(card);
  });
}
displayData(products);

// --------------------------------------------------

let filterStatus = false;

function openFilter() {
  if (filterStatus === false) {
    document.getElementById("filter").style.marginLeft = "0%";
    filterStatus = true;
  } else {
    document.getElementById("filter").style.marginLeft = "-30%";
    filterStatus = false;
  }
}
// --------------------------------------------------------
let filters = {
  product_name: null,
  category: null,
  minPrice: null,
  maxPrice: null,
};

function setFilter(property, value) {
  if (value !== "") {
    filters[property] = value;
    // filters.product_name = "sumedh"
  } else {
    filters[property] = null;
  }
}

// let Arr = [23, 45, 17, 18, 22]

function filterData() {
  let filterArr = JSON.parse(JSON.stringify(products));

  // cheak name
  if (filters.product_name !== null) {
    filterArr = filterArr.filter((product, index) => {
      return product.product_name
        .toLowerCase()
        .includes(filters.product_name.toLowerCase());
    });
  }
  // cheack category
  if (filters.category !== null) {
    filterArr = filterArr.filter((product, index) => {
      return product.category.toLowerCase() === filters.category.toLowerCase();
    });
  }

  if (filters.minPrice !== null) {
    filterArr = filterArr.filter((product, index) => {
      return Number(product.price) >= Number(filters.minPrice);
    });
  }

  if (filters.maxPrice !== null) {
    filterArr = filterArr.filter((product, index) => {
      return Number(product.price) <= Number(filters.maxPrice);
    });
  }
  displayData(filterArr);
  // console.log(filterArr);
}

// ----------------------------------------------------------------------------------------------------------

// let user = {
//     user_name: "Sumedh",
//     age: 24,
//     city: "Nagpur"
// }

// // 2 Types fatch of Object data
// console.log(user);
// console.log(user.city);
// console.log(user["user_name"]);

// // Similar Data Fatch krna..

// let arr = [23, 45, 18, 20, 43, 23];
// arr.forEach((element, index) => {
//     if (element === 23) {
//         console.log(element);
//     }
// })
// console.log("\n")

// // New Array
// let peoples = [
//     {
//         name: "Sumedh",
//         age: 22,
//         city: "Nagpur"
//     },
//     {
//         name: "Rahul",
//         age: 24,
//         city: "Pune"
//     },
//     {
//         name: "Aayush",
//         age: 22,
//         city: "Seoni"

//     },
//     {
//         name: "Himanshu",
//         age: 24,
//         city: "Seoni"
//     },
// ]

// console.log(peoples);
// console.log(peoples[0]);
// console.log(peoples[0].name);
// console.log(peoples[3].name);
// console.log(peoples[3]["age"])
// console.log("\n")

// //  get all users name:   {IMP}

// peoples.forEach((ele, index) => {
//     // console.log(ele);
//     console.log(ele.name);
// })

// // Object With Same age
// peoples.forEach((ele, index) => {
//     if (ele.age === 24) {
//         console.log(ele);
//         // console.log(ele.age);

//     }
// })
// console.log("\n")

// // Object With Same City : IMPORTANT !
// let result = peoples.filter((ele, index) => {
//     return ele.city === "Seoni"
// });
// console.log(result);
// console.log("\n")

// // Input tags values fatching : IMPORTANT !

// let username = "";
// function readValue(user) {
//     this.username = user;
// }

// function printValue() {
//     console.log(this.username);
// }

// // Making Dynamically Html in js:
// let ele1 = document.createElement("div");
// ele1.classList.add("main");

// let ele2 = document.createElement("h2");
// ele2.innerHTML = "Hello Devlopers";

// let ele3 = document.createElement("p");
// ele3.innerHTML = "How are you ?";

// ele1.appendChild(ele2);
// ele1.appendChild(ele3);

// document.getElementById("ele").appendChild(ele1);
