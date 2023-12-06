let product = {
    company: "apple",
    itemName: "Cotton shirt",
    price: 861,
    rating: {
        stars: 4.5,
        noOfReviews: 87
    },
    displayPrice: function () {
        return `${this.price}.00`;
    }
};

// Uncomment the next line to test the displayPrice method
// console.log(product.displayPrice()); // Output: 861.00

// Example of using the replace method
let chinu = "hi bro how are you hi alisha";
console.log(chinu.replace(/hi/g, "hello"));
