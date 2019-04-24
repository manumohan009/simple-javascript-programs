
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

  getCustomer(1)
    .then((customer)=>{
        console.log('Customer: ', customer);
        
        if(customer.isGold){
            return getTopMovies(customer);
        }
    })
    .then((movies)=>{
        console.log('Top movies: ', movies);
        console.log('CCCCC ', p.value);
        return sendEmail(p.value, movies)
    })
    .then(()=>{
        console.log('Email sent...')
    })
    .catch((err)=>{
        console.log(err.message);
    })
  
  function getCustomer(id) {
      return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
      })
  }
  
  function getTopMovies(customer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2'],customer);
          }, 4000);
      })

  }
  
  function sendEmail(email, movies) {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
      })

  }