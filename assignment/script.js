const book = {
    title: "Narnia: The Lion, The Witch, and The Wardrobe",
    author: "C.S. Lewis",
    pages: 172,
    isRead: false,
    getBookInfo: function(){
        let read;
        if (this.isRead == true){
            read = "read";
        }else{
            read = "not read";
        };
        return `Title: ${this.title}\n Author: ${this.author}\n Pages: ${this.pages}\n Read: ${this.isRead ? "read": "not read"}`;
    }
};

console.log(book.getBookInfo())




const shoppingCart = {
    items: [],
    addItem: function(name, price, quantity){
        const existingItem = this.items.find(item => item.name === name)
        
        if (existingItem){
            existingItem.quantity += quantity;
            console.log(`${existingItem.name} quantity updated to ${existingItem.quantity}`);
        } else {
            // const item = {
            //     name: name,
            //     price: price,
            //     quantity: quantity
            // };
    
            // this.items.push(item)

            this.items.push({
                name: name,
                price: price,
                quantity: quantity
            });

            console.log(`${name} added to cart!`)
        }

    },

    updateQuantity: function (name, quantity){
        const existingItem = this.items.find(item => item.name === name)

        if (existingItem){
            existingItem.quantity += quantity;
            console.log(`${existingItem.name} quantity updated to ${existingItem.quantity}`);
        } else {
            console.log("This item does not exist")
        }
    },
    // removeItem: function(name){
    //     const existingItemIndex = this.items.findIndex(item => item.name === name);
    //     this.items.splice(existingItemIndex,1);
    // },
    removeItem: function(name) {
        this.items = this.items.filter(item => item.name !== name)
        console.log(`Removed ${name} from the cart`)
    },
    displayCart: function(){
        console.log("============= Display Cart =============")
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }   
        for (let item of this.items){
            console.log(item)
        };
    }
};

shoppingCart.addItem("mouse", 25.99, 1);
shoppingCart.addItem("mouse", 25.99, 1);
// shoppingCart.removeItem("mouse");
shoppingCart.updateQuantity("mouse", 3);
shoppingCart.displayCart();

console.log(shoppingCart)