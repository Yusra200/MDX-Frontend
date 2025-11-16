const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      site: 'Teachly',
      //presenting all the lessons
      lessons: [
        { id: 10, title: "Maths", availability: 6, location: "Hendon", price: 39, icon: "fa-solid fa-calculator" },
        { id: 11, title: "English", availability: 7, location: "Brentcross", price: 35. },
        { id: 12, title: "Science", availability: 8, location: "Kilburn", price: 40 },
        { id: 13, title: "History", availability: 3, location: "Whitecity", price: 25 },
        { id: 14, title: "Computing", availability: 4, location: "Cricklewood", price: 50 },
        { id: 15, title: "Business", availability: 5, location: "Ealing", price: 45 },
        { id: 16, title: "Art", availability: 9, location: "Camden", price: 25 },
        { id: 17, title: "Geography", availability: 5, location: "Hendon", price: 20 },
        { id: 18, title: "Music", availability: 5, location: "Hammersmith", price: 20 },
        { id: 19, title: "Drama", availability: 5, location: "Harrow", price: 20 }
      ],
      //array stores any lessons that is added to cart
      cart: [],
      //for my sorting
      sortBy: '',
      sortOrder: '',
      //showDrop: false,
      //show lessons, if not then take to checkout page
      showLessons: true,
      //user information for checkout
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  },
  computed: {
    cartItemAmount() {
      //return items in cart or display nothing
      return this.cart.length || "";
    },
    fullName() {
      //combines names and called method to create into single string
      return [this.firstName, this.lastName
      ].join(' ');
    },
    sortedLessons() {
      //sorting by price
      if (this.sortBy === "priceAsc") {
        return [...this.lessons].sort((a, b) => a.price - b.price);
      }
      if (this.sortBy === "priceDes") {
        return [...this.lessons].sort((a, b) => b.price - a.price);
      }
      //sorting by availiablity
      if (this.sortBy === "availabilityDes") {
        return [...this.lessons].sort((a, b) => a.availability - b.availability);
      }
      if (this.sortBy === "availabilityAsc") {
        return [...this.lessons].sort((a, b) => b.availability - a.availability);
      }
      return this.lessons;

    },
  },
  methods: {
    addToCart(lesson) {
      //if there are no avaliblity left return
      if (lesson.availability <= 0) return;
      //if there availiablity then take one
      lesson.availability--;
      this.cart.push(lesson); //push lesson id to the cart
    },
    removeFromCart(lesson) {
      //find where the lesson id is
      const index = this.cart.indexOf(lesson.id)
      //if cant find then return ()
      if (index === -1) return
      //find exact index and remove 1
      this.cart.splice(index, 1)
      //back to availability stock
      lesson.availability++
    },

    goToCheckout() {
      //between pages
      this.showLessons = this.showLessons ? false : true;
    },
    isFormValid() {
      //only allows certain regex
      var firstRegex = /^[A-Za-z\s]+$/;
      var lastRegex = /^[A-Za-z\s]+$/;
      //only allows numbers
      var phoneRegex = /^[0-9+\-\s()]+$/;
      //check if fields match all of their inputs
      //uses AND so all conditions must be true before it can work
      if (
        firstRegex.test(this.firstName) &&
        lastRegex.test(this.lastName) &&
        phoneRegex.test(this.phoneNumber)
      ) {
        return false //no so button is disbaled
      } else {
        return true; //yes so button is enabled
      }
    },
    //get to retrieve lessons
    async getLessons() {
      try {
        //fetch request to get lessons
        const response = await fetch("/lessons");
        //make into json format
        const result = await response.json();
        //log results
        console.log(result);
        //store
        this.lessons = result;
        //catching error if failure
      } catch (error) {
        console.log("Unable to fetch lessons")
      }
    },
    //Post for new orders
    async saveOrders() {
      try {
        //fetch post to save orders
        const response = await fetch("/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          //make strings into json format as post requires
          body: JSON.stringify({})
        });

        //make response into json format
        const result = await response.json();
        //log result
        console.log(result);
        //catch errors
      } catch (error) {
        console.log("Unable to save order")
      }
    },
 
    checkoutInfo() {
      //display after button is clicked in checkout 
      alert("Checkout completed")
    },
  }
});
//vue connect js to html
app.mount('#app');


