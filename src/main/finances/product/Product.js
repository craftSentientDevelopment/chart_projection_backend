
export default class Product {
    // attributes
    type               = "Product";
    id                 = "";
    name               = "";
    units              = 0;
    manufacturingCost  = 0;
    samplingCost       = 0;
    shippingCost       = 0;
    sellingPrice       = 0;

    // constructor
    Product(id=0, name="", units=0, manufacturingCost=0, samplingCost=0, shippingCost=0, sellingPrice=0){
        this.id                 = id;
        this.name               = name;
        this.units              = units;
        this.manufacturingCost  = manufacturingCost;
        this.samplingCost       = samplingCost;
        this.shippingCost       = shippingCost;
        this.sellingPrice       = sellingPrice;
    }

    // getters
    getId()                     { return this.id }
    getName()                   { return this.name }
    getUnits()                  { return this.units }
    getManufacturingCost()      { return this.manufacturingCost }
    getSamplingCost()           { return this.samplingCost }
    getShippingCost()           { return this.shippingCost }
    getSellingPrice()           { return this.sellingPrice }
    getType()                   { return this.type }

    // setters
    setId(id)                                   { this.id = id; }
    setName(name)                               { this.name = name; }
    setUnits(units)                             { this.units = units; }
    setManufacturingCost(manufacturingCost)     { this.manufacturingCost = manufacturingCost; }
    setSamplingCost(samplingCost)               { this.samplingCost = samplingCost; }
    setShippingCost(shippingCost)               { this.shippingCost = shippingCost; }
    setSellingPrice(sellingPrice)               { this.sellingPrice = sellingPrice; }

    // methods
    getTotalCost()      { return ( this.manufacturingCost*this.units ) + this.shippingCost; }
    getTotalRevenue()   { return ( this.sellingPrice * this.units ); }
    getTotalProfits()   { return this.getTotalRevenue() - this.getTotalCost(); }
    print(){
        console.log(
        `Id:                ${this.id}
        Name:               ${this.name}
        Number of Units:    ${this.units}
        Manufacuring Cost:  ${this.manufacturingCost}
        Sample Cost:        ${this.samplingCost}
        Shipping Cost:      ${this.shippingCost}
        Selling Prict:      ${this.sellingPrice}
        Total Revenue:      ${this.getTotalRevenue()}
        Total Cost:         ${this.getTotalCost()}
        Profits:            ${this.getTotalProfits()}`
        )
    }
}