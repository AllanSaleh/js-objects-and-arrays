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