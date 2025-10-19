
//import function from global 
const { createApp } = Vue;

//create new vue instance
const app = createApp({
  data() {
    //data returns all variables that i have put
    return {
      site: 'Vue.js School Lessons',
      lessons: [ //presenting all the lessons
        { id: 10, title: 'Maths', availability: 5, location: 'London', price: 10 },
        { id: 11, title: 'English', availability: 5, location: 'London', price: 11 },
        { id: 12, title: 'Science', availability: 5, location: 'London', price: 12 },
        { id: 13, title: 'History', availability: 5, location: 'London', price: 13 },
        { id: 14, title: 'Computing', availability: 5, location: 'London', price: 14 },
        { id: 15, title: 'Business', availability: 5, location: 'London', price: 15 },
        { id: 16, title: 'Art', availability: 5, location: 'London', price: 16 },
        { id: 17, title: 'Geography', availability: 5, location: 'London', price: 17 },
        { id: 18, title: 'Music', availability: 5, location: 'London', price: 18 },
        { id: 19, title: 'Drama', availability: 5, location: 'London', price: 19 }
      ],
      //array stores any lessons that is added to cart
      cart: [],

    //show lessons, if not then take to checkout page
      showLessons: true,

    methods: {
      showCheckout(){
        this.showLessons = this.showLessons ? false: true;
      }
    }
    };
  },

  computed: {
    cartItemAmount() {
      return this.cart.length || ""; //counting length
    }
  },

  //instead of function option api uses the name
  //this method will run when addtocart button is clicked
  methods: {
    addToCart(lesson) {
      if (lesson.availability <= 0) return;
      lesson.availability--;
      this.cart.push(lesson.id); //pushing new id
    }
  }
});
//connecting to vue and html
app.mount('#app');
//window.app = app; //THIS JUST TO CHECK CONSOLE IF WORKING REMOVE AFTER

/* const { createApp } = Vue;

const app = createApp({
data() {
return {
  site: 'Vue.js School Lessons',
  count: 0,
  lesson: {
    title: 'Maths',
    description: 'Math Lessons',
    price: 10,
    id: 10
    //img
    },
    cart: []
  };
}
});

app.mount('#app');

//instead of function option api uses the name
methods: {
  addToCart () 
  {
    this.cart.push(this.product.id);
  }
}
*/