import "./product/Product.js";
import Product from "./product/Product.js";

export default class FinancialReport {
    months              = [
        "January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ];
    monthlyReport       = {
        January:{}, February:{}, March:{}, April:{}, 
        May:{}, June:{}, July:{}, August:{}, 
        September:{}, October:{}, November:{}, December:{}
    }
    quarters            = {first:{}, second:{}, third:{}, fourth:{}};
    fiscalYear          = []
    initialInvestment   = 0;
    initialCost         = 0;
    totalCost           = 0;
    totalRevenue        = 0;
    totalProfit         = 0;
    storeFrontCost      = 0;
    netProfit           = 0;
    totalUnits          = 0;
    averageCost         = 0;
    listOfProducts      = [];
    productMap          = {};

    constructor(listOfProducts = [], storeFrontCost= 0){ 
        this.listOfProducts = listOfProducts; 
        this.storeFrontCost = storeFrontCost; }

    addProduct(id=0, name="", units=0, manufacturingCost=0, samplingCost=0, shippingCost=0, sellingPrice=0, percentageSold=0, additionalInvestmentCost=0){
        let product         = new Product(id, name, units, manufacturingCost, samplingCost, shippingCost, sellingPrice, percentageSold);
        this.listOfProducts.push(product);
        this.totalUnits     += product.units;
        this.productMap[id] = (this.listOfProducts.length - 1);
        this.totalRevenue   += product.getTotalRevenue();
        this.totalCost      += product.getTotalCost() + additionalInvestmentCost + samplingCost;
        this.totalProfit    = this.totalRevenue - this.totalCost;
        this.averageCost    = this.getAverage(); }

    getListOfProducts()     { return this.listOfProducts; }
    getNumberOfProducts()   { return this.listOfProducts.length; }
    getInitialInvestment()  { return this.initialInvestment; }
    getMonths()             { return this.months;}
    getNetProfit()          { return this.netProfit += this.totalProfit; }
    reportFiscalYear(year)  { return this.fiscalYear[year]; }
    
    setNetProfit(amount)    { this.netProfit -= amount; }

    getAverage(){
        let average = 0;
        for(let indexOfProduct = 0; indexOfProduct < this.listOfProducts.length; indexOfProduct++)
            average += this.listOfProducts[indexOfProduct].getManufacturingCost();
        this.averageCost = average/this.listOfProducts.length; 
        return this.averageCost;
    }

    readProduct(id){ return this.listOfProducts[this.productMap[id]] }

    updateProduct(id, attribute, value){
        let product = this.readProduct(id);
        if(product && product[attribute]) 
            product[attribute] = value; 
    }

    deleteProduct(id){ // swap product to delete with last product, then delete product
        let replacementProduct      = this.listOfProducts[this.getNumberOfProducts()-1]
        let productToDeleteIndex    = this.productMap[id];
        let newId                   = replacementProduct.getId();
        this.productMap[newId]      = productToDeleteIndex;
        delete this.productMap[id];
        this.listOfProducts[productToDeleteIndex] = this.listOfProducts.pop();
    }

    getTotalUnitsSold(){
        let totalUnitsSold = 0;
        for(let indexOfProduct = 0; indexOfProduct < this.listOfProducts.length; indexOfProduct++)          
            totalUnitsSold  += this.listOfProducts[indexOfProduct].getUnitsSold();
        this.totalUnitsSold = totalUnitsSold;
        return this.totalUnitsSold;
    }

    getTotalCost(month){
        let totalCost = 0;
        if(month == 'January') totalCost = 1000;
        for(let indexOfProduct = 0; indexOfProduct < this.listOfProducts.length; indexOfProduct++)          
            totalCost += this.listOfProducts[indexOfProduct].getTotalCost();
        this.totalCost = (totalCost + (this.storeFrontCost * this.totalRevenue));
        return this.totalCost;
    }

    getTotalRevenue(){
        let totalRevenue = 0;
        for(let indexOfProduct = 0; indexOfProduct < this.listOfProducts.length; indexOfProduct++)
            totalRevenue += this.listOfProducts[indexOfProduct].getTotalRevenue();
        this.totalRevenue = totalRevenue;
        return this.totalRevenue
    }

    getTotalProfit(){
        this.totalProfit = this.totalRevenue - this.totalCost;
        return this.totalProfit;
    }

    setInitialInvestment(initialInvestment) { 
        this.initialInvestment = initialInvestment;
        this.setNetProfit(initialInvestment);
        this.totalCost += initialInvestment;
    }

    recordAndPrintMonthly(month = ``, print = false){
        let display = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
        this.monthlyReport[month]['totalNumberOfProducts'] = this.getNumberOfProducts();
        this.monthlyReport[month][`totalUnitsSold`] = this.getTotalUnitsSold();
        this.monthlyReport[month][`totalRevenue`] = this.getTotalRevenue();
        this.monthlyReport[month][`totalCost`] = this.getTotalCost(month);
        this.monthlyReport[month][`totalProfits`] = this.getTotalProfit();
        this.monthlyReport[month][`totalNetProfits`] = this.getNetProfit();
        
        if(month == this.months[2]){
            const {January, February, March} = this.monthlyReport;
            this.quarters.first = {January, February, March}
        }
        else if(month == this.months[5]){
            const {April, May, June} = this.monthlyReport;
            this.quarters.second = {April, May, June}
        }
        else if(month == this.months[8]){
            const {July, August, September} = this.monthlyReport;
            this.quarters.third = {July, August, September}
        }
        else if(month == this.months[11]){
            const {October, November, December} = this.monthlyReport;
            this.quarters.fourth = {October, November, December}
            let fiscalYear = [];
            fiscalYear.push(this.quarters.first);
            fiscalYear.push(this.quarters.second);
            fiscalYear.push(this.quarters.third);
            fiscalYear.push(this.quarters.fourth);
            this.fiscalYear.push(fiscalYear);
        }

        if(print){
            console.log('---------------------------------------------------------------');
            console.log(`Month:                      ${month}`); 
            console.log(`Number of Products:         ${this.monthlyReport[month]['totalNumberOfProducts']} products`);
            console.log(`Number of Total Units Sold: ${this.monthlyReport[month]['totalUnitsSold']}/${this.totalUnits} units (${Math.floor(100*(this.monthlyReport[month]['totalUnitsSold']/this.totalUnits))}%)`);
            console.log(`Average Price Per Unit      ${display.format(this.averageCost)}`);
            console.log(`Total Revenue:              ${display.format(this.monthlyReport[month]['totalRevenue'])}`);
            console.log(`Total Cost:                 ${display.format(this.monthlyReport[month]['totalCost'])}`);
            console.log(`Total Profit:               ${display.format(this.monthlyReport[month]['totalProfits'])}`);
            console.log(`Net Annual Profit:          ${display.format(this.monthlyReport[month]['totalNetProfits'])}`);
            console.log('---------------------------------------------------------------\n');
        }
    }

}