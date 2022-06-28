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
        categories: [
            'Pants', 'Nike'
        ]
    },
    {
        name: 'Nike T-shirts',
        price: 40,
        salePrice: null,
        categories: [
            'T-shirts', 'Nike'
        ]
    },
    {
        name: 'Nike Shoes',
        price: 140,
        salePrice: 30,
        categories: [
            'Shoes', 'Nike'
        ]
    },
    {
        name: 'Adidas Pants',
        price: 20,
        salePrice: null,
        categories: [
            'Pants', 'Adidas'
        ]
    },
    {
        name: 'Adidas T-shirts',
        price: 30,
        salePrice: 10,
        categories: [
            'T-shirts', 'Adidas'
        ]
    },
    {
        name: 'Adidas Shoes',
        price: 100,
        salePrice: 50,
        categories: [
            'Shoes', 'Adidas'
        ]
    },
].map(product => new ProductsClass(product.name, product.price, product.salePrice, product.categories))


function getProductsFilterPrice(products, filterSum, fromTo) {


    for (let index = 0; index < products.length; index++) {
        const p = products[index];
        if (p.salePrice == null) {
            if (!isNaN(fromTo)) {
                return products.filter(pfilter => pfilter.price >= fromTo)
            } else if (fromTo == 'from') {
                return products.filter(pfilter => pfilter.price <= filterSum)
            } else if (fromTo == 'to') {
                return products.filter(pfilter => pfilter.price >= filterSum)
            } else {
                return products.filter(pfilter => pfilter.price == filterSum)
            }
        } else {
            if (!isNaN(fromTo)) {
                return products.filter(pfilter => pfilter.salePrice >= fromTo)
            } else if (fromTo == 'from') {
                return products.filter(pfilter => pfilter.salePrice <= filterSum)
            } else if (fromTo == 'to') {
                return products.filter(pfilter => pfilter.salePrice >= filterSum)
            } else {
                return products.filter(pfilter => pfilter.salePrice == filterSum)
            }
        }
    }

}


function getProductsFilterByCategory(products, filterName){

    if(filterName){
        return products.filter(p => p.category.some(c => c == filterName))
    }else{
        return 505
    }

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

console.log(getProductsFilterByCategory(currentProducts, 'Pants'));

console.log(getProductsFilterPrice(currentProducts));

console.log(createProductsCards(currentProducts));

console.log(filterHaveDiscount(currentProducts));

console.log(showNameAndSalePercent(currentProducts));




// function getNameAndSalePercent() {
//     return currentProducts.map(product => new ProductsClass(product.name, product.price, product.salePrice).getNameAndSalePercent());
// }




