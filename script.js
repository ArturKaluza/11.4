function Phone(brand, color, price, screenSize, weight) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.screenSize = screenSize;
    this.weight = weight
}

Phone.prototype.printInfo = function() {
    console.log("Phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.setAlarm = function(time) {
    setTimeout(()=> alert('alarm'), time)
}

Phone.prototype.checkDate = function() {
    let date = new Date;
    console.log('today is ' + date.getDate() + "."+ (date.getMonth() +1) + "."+ date.getFullYear());
}

const galaxyS6 = new Phone('Samsung', 'grey', 2000, 6, 0.2);
const iPhone6s = new Phone("Apple", "silver", 2250, 6, 0.22);
const nokia3310 = new Phone('Nokia', 'black', 10, 2, 0.3);

console.table(galaxyS6);
console.table(iPhone6s);
console.table(nokia3310);

galaxyS6.printInfo();
iPhone6s.printInfo();
nokia3310.printInfo();

galaxyS6.setAlarm(3000);

iPhone6s.checkDate();
