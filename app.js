//import function from global 
const { createApp } = Vue;

//create new vue instance
const app = createApp({
  data() {
    //data returns all variables that i have put
    return {
      site: 'Vue.js School Lessons',
      lessons: [
        { id: 10, title: 'Maths', description: 'Math Lessons', price: '10' },
        { id: 11, title: 'English', description: 'English Lessons', price: '11' },
        { id: 12, title: 'Science', description: 'Science Lessons', price: '12' },
        { id: 13, title: 'History', description: 'History Lessons', price: '13' },
        { id: 14, title: 'Computing', description: 'Computing Lessons', price: '14' },
        { id: 15, title: 'Business', description: 'Business Lessons', price: '15' },
        { id: 16, title: 'Art', description: 'Art Lessons', price: '16' },
        { id: 17, title: 'Geography', description: 'Geography Lessons', price: '17' },
        { id: 18, title: 'Music', description: 'Music Lessons', price: '18' },
        { id: 19, title: 'Drama', description: 'Drama Lessons', price: '19' }
      ],
      //array stores any lessons that is added to cart
      cart: []
    };
  },
  //instead of function option api uses the name
  //this method will run when addtocart button is clicked
  methods: {
    addToCart() {
      this.cart.push(lesson.id); //pushing new id

      // console.log('Cart:', this.cart);
    }
  }
});

//connecting to vue and html
app.mount('#app');