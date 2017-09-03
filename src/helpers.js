import axios from 'axios';

export const sendMessage = (form) => {
  axios.post('http://localhost:3030/sendMessage', form)
  .then(response =>{
    console.log(response);
  }).catch(e => {
    console.log(e);
  })
}