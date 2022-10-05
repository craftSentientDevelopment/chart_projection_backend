
class Budget {
    type = "Budget"
    initialCost = 0;
    listOfProduct = [];
    months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    quarters = ["first", "second", "third", "fourth"];


    print(){
        console.log(
        `Id:                ${this.id}
        Name:               ${this.name}
        Number of Units:    ${this.units}
        Manufacuring Cost:  ${this.manufacturingCost}
        Sample Cost:        ${this.samplingCost}
        Shipping Cost:      ${this.shippingCost}
        Storage Cost:       ${this.storageCost}
        Selling Prict:      ${this.sellingPrice}
        Total Revenue:      ${this.getTotalRevenue()}
        Total Cost:         ${this.getTotalCost()}
        Profits:            ${this.getTotalProfits()}`
        )
    }

}