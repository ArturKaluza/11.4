function Phone(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}

Phone.prototype.printInfo = function() {
    console.log("Phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

const galaxyS6 = new Phone('Samsung', 'grey', 2000);
const iPhone6s = new Phone("Apple", "silver", 2250);
const nokia3310 = new Phone('Nokia', 'black', 10);

galaxyS6.printInfo();
iPhone6s.printInfo();
nokia3310.printInfo();