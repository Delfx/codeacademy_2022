// Filtrus, kurie padės vartotojams filtruoti prekes pagal:



// Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:



//  kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)

//  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos

//  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;



// Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);

// Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;


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


function getProductsFilterPrice(products, filterSum, fromTo) {


    for (let index = 0; index < products.length; index++) {
        const p = products[index];
        if (p.salePrice == null) {
            if (fromTo == null) {
                return products.filter(pfilter => pfilter.price == filterSum)
            }
        }
    }

    products.forEach(p => {
        if (p.salePrice == null) {
            if (fromTo == null) {
                return products.filter(pfilter => pfilter.price == filterSum)
            } 
        }

    });

}


function createProductsCards(products) {
    return products.map(element => element.getNameAndPrice());
}

function showNameAndSalePercent(products) {
    return products.map(p => p.getNameAndSalePercent())
}

function filterHaveDiscount(products) {
    return products.filter(p => p.isSalePrice())
}



// function getNameAndSalePercent() {
//     return currentProducts.map(product => new ProductsClass(product.name, product.price, product.salePrice).getNameAndSalePercent());
// }


console.log(getProductsFilterPrice(currentProducts, 20));

// console.log('labas');

// console.log(createProductsCards(currentProducts));

// console.log(filterHaveDiscount(currentProducts));

// console.log(showNameAndSalePercent(currentProducts));





