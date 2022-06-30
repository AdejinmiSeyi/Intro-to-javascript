// let myName = "Seyi";
// let height = 5.6;
// let country = "Nigeria";

function getBiodata(myName, height, country) {
    let biodata;
    biodata = "My name is " +
    myName +
    " I am " +
    height +
    " tall and I am from " +
    country;

    return biodata
}
let biodata = getBiodata('Seyi', '6ft 2', 'Nigeria');
console.log(biodata);
