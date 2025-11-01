const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      site: 'School Lessons',
      //presenting all the lessons
      lessons: [
        { id: 10, title: 'Maths', availability: 6, location: 'London', price: 100, icon: "fa-solid fa-calculator"},
        { id: 11, title: 'English', availability: 23, location: 'London', price: 10, icon: "fa-solid fa-book-open"},
        { id: 12, title: 'Science', availability: 2, location: 'London', price: 12,  icon: "fa-solid fa-microscope"},
        { id: 13, title: 'History', availability: 3, location: 'London', price: 13, icon: "fa-solid fa-landmark" },
        { id: 14, title: 'Computing', availability: 7, location: 'London', price: 14, icon: "fa-solid fa-display"},
        { id: 15, title: 'Business', availability: 5, location: 'London', price: 15, icon: "fa-solid fa-user-tie"},
        { id: 16, title: 'Art', availability: 31, location: 'London', price: 16, icon: "fa-solid fa-palette"},
        { id: 17, title: 'Geography', availability: 5, location: 'London', price: 17, icon: "fa-solid fa-earth-americas"},
        { id: 18, title: 'Music', availability: 5, location: 'London', price: 18, icon:"fa-solid fa-music"},
        { id: 19, title: 'Drama', availability: 5, location: 'London', price: 19, icon:"fa-solid fa-masks-theater"}
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

      lessons.sort((a, b) => a.locale)
    },
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
    isCheckDisabled() {
      var firstRegex = /^[A-Za-z\s]+$/;
      var lastRegex = /^[A-Za-z\s]+$/;
      var phoneRegex = /^[0-9+\-\s()]+$/;

      if (
        firstRegex.test(this.firstName) &&
        lastRegex.test(this.lastName) &&
        phoneRegex.test(this.phoneNumber)
      ) {
        return false;
      } else {
        return true;
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
