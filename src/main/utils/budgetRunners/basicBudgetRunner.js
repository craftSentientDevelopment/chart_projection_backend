import FinancialReport from "./../../finances/FinancialReport.js";

export default function basicBudgetRunner(print){
    // initialize
    let productList                 = [];
    let storeFrontPercentageCost    = .35;
    let productId                   = 1230;
    let productName                 = 1;
    let totalUnits                  = 150;
    let priceBoughtAt               = 6;
    let samplingCost                = 250;
    let shippingHandlingAndMiscCost = 200;
    let productSoldAt               = 39.99;
    let percentageSold              = .40;
    let additionalInvestmentCost    = 1000;

    // start
    let report = new FinancialReport(productList, storeFrontPercentageCost);

    report.addProduct(
        productId, 
        `Product_${productName}`, 
        totalUnits, 
        priceBoughtAt, 
        samplingCost, 
        shippingHandlingAndMiscCost, 
        productSoldAt, 
        percentageSold,
        additionalInvestmentCost
    );

    report.getMonths().forEach( (month) => {
        productId   += 1;
        productName += 1;
        report.addProduct(
            productId , 
            `Product_${productName}`, 
            totalUnits, 
            priceBoughtAt, 
            samplingCost, 
            shippingHandlingAndMiscCost, 
            productSoldAt, 
            percentageSold);
        report.recordAndPrintMonthly(month,print);
    });
    return report;
}