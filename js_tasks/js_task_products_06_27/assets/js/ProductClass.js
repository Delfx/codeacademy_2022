
class Products {
    constructor(name, price, salePrice, category) {
        this.name = name;
        this.price = price;
        this.salePrice = salePrice;
        this.category = category
    }

    getNameAndPrice() {
        return (this.salePrice == null) ? `Product: ${this.name} Price: ${this.price}` : `Product: ${this.name} Sale Price: ${this.salePrice}`
    }

    getNameAndSalePercent(){
        return (this.salePrice == null) ? `Product: ${this.name} Discount: Product do not have discount` : `Product: ${this.name} discount is ${((100 * this.salePrice)/this.price).toPrecision(2)}%`
    }

    isSalePrice(){
        return this.salePrice
    }


}




export default Products;