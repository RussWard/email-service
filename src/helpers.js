import axios from 'axios';

export const sendMessage = (form) => {
  axios.post('/sendMessage', form)
  .then(response =>{
    console.log(response);
  }).catch(e => {
    console.log(e);
  })
}