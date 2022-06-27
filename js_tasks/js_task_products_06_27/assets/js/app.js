import Products from "./ProductClass.js";
import ProductsClass from "./ProductClass.js";

const currentProducts = [

    {
        name: 'Nike Pants',
        price: 30,
        salePrice: 20,
        category: [
            'Pants', 'Nike'
        ]
    },
    {
        name: 'Nike T-shirts',
        price: 40,
        salePrice: null,
        category: [
            'T-shirts', 'Nike'
        ]
    },
    {
        name: 'Nike Shoes',
        price: 140,
        salePrice: 30,
        category: [
            'Shoes', 'Nike'
        ]
    },
    {
        name: 'Adidas Pants',
        price: 20,
        salePrice: null,
        category: [
            'Pants', 'Adidas'
        ]
    },
    {
        name: 'Adidas T-shirts',
        price: 30,
        salePrice: 10,
        category: [
            'T-shirts', 'Adidas'
        ]
    },
    {
        name: 'Adidas Shoes',
        price: 100,
        salePrice: 50,
        category: [
            'Shoes', 'Adidas'
        ]
    },
].map(product => new ProductsClass(product.name, product.price, product.salePrice, product.category))


function createProductsCards(products) {
    return products.map(element => element.getNameAndPrice());
}

function filterHaveDiscount(products) {
    return products.filter(p => p.isSalePrice())
}

// function getNameAndSalePercent() {
//     return currentProducts.map(product => new ProductsClass(product.name, product.price, product.salePrice).getNameAndSalePercent());
// }

console.log(createProductsCards(currentProducts));

console.log(filterHaveDiscount(currentProducts)[2]);


// console.log(getNameAndSalePercent());


