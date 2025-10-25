const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      site: 'School Lessons',
      //presenting all the lessons
      lessons: [
        { id: 10, title: 'Maths', availability: 6, location: 'London', price: 100 },
        { id: 11, title: 'English', availability: 23, location: 'London', price: 101 },
        { id: 12, title: 'Science', availability: 2, location: 'London', price: 12 },
        { id: 13, title: 'History', availability: 3, location: 'London', price: 13 },
        { id: 14, title: 'Computing', availability: 7, location: 'London', price: 14 },
        { id: 15, title: 'Business', availability: 5, location: 'London', price: 15 },
        { id: 16, title: 'Art', availability: 31, location: 'London', price: 16 },
        { id: 17, title: 'Geography', availability: 5, location: 'London', price: 17 },
        { id: 18, title: 'Music', availability: 5, location: 'London', price: 18 },
        { id: 19, title: 'Drama', availability: 5, location: 'London', price: 19 }
      ],
      //array stores any lessons that is added to cart
      cart: [],
      //for my sorting
      sortBy: '',
      sortOrder: '',
      showDrop: false,
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
      if (this.sortBy === "price") {
        return [...this.lessons].sort((a, b) => a.price - b.price);
      }
      //sorting by availiablity
      if (this.sortBy === "availability") {
        return [...this.lessons].sort((a, b) => a.availability - b.availability);
      }
      return this.lessons;
    }

  },
  methods: {
    addToCart(lesson) {
      //if there are no avaliblity left return
      if (lesson.availability <= 0) return;
      //if there availiablity then take one
      lesson.availability--;
      this.cart.push(lesson.id); //push lesson id to the cart
    },
    goToCheckout() {
      //between pages
      this.showLessons = this.showLessons ? false : true;
    },
    checkoutInfo() {
      //display after button is clicked in checkout 
      alert("Checkout completed")
    },
  }
});
//vue connect js to html
app.mount('#app');
