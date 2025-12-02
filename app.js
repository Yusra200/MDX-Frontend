const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      site: 'Teachly',
      //presenting all the lessons
      //showcase images based on request using my static
      lessons: [],
      searchText: "",
      //array stores any lessons that is added to cart
      cart: [],
      //for my sorting
      sortBy: '',
      sortOrder: '',
      showLessons: true,
      //user information for checkout
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  },
  
  mounted() {
    this.getLessons();
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
      //computing good pratice for sorting
      //sorting by price
      if (this.sortBy === "priceAsc") {
        return [...this.lessons].sort((a, b) => a.price - b.price);
      }
      if (this.sortBy === "priceDes") {
        return [...this.lessons].sort((a, b) => b.price - a.price);
      }
      //sorting by availiablity
      if (this.sortBy === "availabilityAsc") {
        return [...this.lessons].sort((a, b) => a.availability - b.availability);
      }
      if (this.sortBy === "availabilityDes") {
        return [...this.lessons].sort((a, b) => b.availability - a.availability);
      }
      //sort by subject/title
      if (this.sortBy === "titleAsc") {
        return [...this.lessons].sort((a, b) => a.title.localeCompare(b.title));
      }
      if (this.sortBy === "titleDes") {
        return [...this.lessons].sort((a, b) => b.title.localeCompare(a.title));
      }
      //sort by location
      if (this.sortBy === "locationAsc") {
        return [...this.lessons].sort((a, b) => a.location.localeCompare(b.location));
      }
      if (this.sortBy === "locationDes") {
        return [...this.lessons].sort((a, b) => b.location.localeCompare(a.location));
      }
      return this.lessons;
    },
  },
  methods: {
    addToCart(lesson) {
      //if there less or equal to - return
      if (lesson.availability <= 0) return;
      //if there availiablity then take one
      lesson.availability--;

      this.cart.push(lesson); //push lessons to the cart
    },
    removeFromCart(lesson) {
      //find where the lesson id is
      const index = this.cart.indexOf(lesson)
      //if cant find then return ()
      if (index === -1) return
      //find exact index and remove 1
      this.cart.splice(index, 1)
      //back to availability stock add 1
      lesson.availability++
    },

    goToCheckout() {
      //between pages if showlesson true it is now false
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
        return false; //not valid so button is not enabled
      } else {
        return true; //is valid so button is enabled
      }
    },
    async getLessons() {
      try {
        //fetch request to get lessons
        const response = await fetch("https://express-backend-0l2f.onrender.com/lessons");
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
    async postNewOrders() {
      try {
        //fetch post to save orders
        const response = await fetch("https://express-backend-0l2f.onrender.com/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          //make strings into json format as post requires
          body: JSON.stringify({
            name: this.name,
            phone: this.phone,
            lessonId: this.lessonId,
            quantity: this.quantity
          })
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
    async updateLessons(lessonId, newAvailability) {
      try {
        //fetch post to save orders
        const response = await fetch(`https://express-backend-0l2f.onrender.com/lessons/${lessonId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          //make strings into json format as post requires
          body: JSON.stringify({ availability: newAvailability })
        });
        const result = await response.json();
      } catch (error) {
        console.log("Failure to update lesson")
      }
    },
    checkoutInfo() {
      //display after button is clicked in checkout 
      alert("Checkout completed")
    },
    async fetchData(title, location) {
      const searchQuery = this.searchText.trim();
      //if search is false return to all lessons
      if(!searchQuery) {
        this.getLessons();
        return;
      }
      const url = `https://express-backend-0l2f.onrender.com/lessons/search?q=${encodeURIComponent(searchQuery)}`;

      const response = await fetch(url);

      const result = await response.json();
      console.log(result);
      this.lessons = result;
    },
  }
});
//vue connect js to html
app.mount('#app');

