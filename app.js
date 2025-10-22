const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      site: 'School Lessons',
      //presenting all the lessons
      lessons: [
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
    
      //user information for checkout
      firstName: '',
      lastName: '',
      phoneNumber: ''
    };
  }
});
//vue connect js to html
app.mount('#app');