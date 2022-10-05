import Product from "./product/product";

class FinancialReport {
    initialInvestment = 0;
    initialCost = 0;
    listOfProducts = [];
    ProductMap = {};
    months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    quarters = ["first", "second", "third", "fourth"];

    FinancialReport(initialInvestment = 0, initialCost = 0, listOfProducts = [], ){
        this.initialInvestment = initialInvestment;
        this.initialCost = initialCost;
        this.listOfProducts = listOfProducts;
    }

    createProduct(id=0, name="", units=0, manufacturingCost=0, samplingCost=0, shippingCost=0, sellingPrice=0){
        let product = Product(id, name, units, manufacturingCost, samplingCost, shippingCost, sellingPrice);
        this.listOfProducts.push(product);
        this.productMap[id] = (this.listOfProducts.length - 1);
    }

    readProduct(id){
        return this.listOfProducts[this.productMap[id]]
    }

    updateProduct(id, attributes){

    }

    deleteProduct(){

    }

    getListOfProducts(){

    }

    getNumberOfProducts(){
        return this.listOfProducts.length;
    }

    getTotalCost(){

    }

    getTotalRevenue(){

    }

    getTotalProfit(){

    }
    
    getInitialInvestment(){

    }

    getInitialCost(){

    }

    setInitialInvestment(){

    }

    setInitialCost(){

    }

}