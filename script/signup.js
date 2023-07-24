import axios from 'axios'
document.getElementById("jiji").addEventListener("click",function () {
    // Get the form inputs
    const email = document.getElementById('email').value;
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object with the form data
    const formData = {
      email: email,
      fullname: fullname,
      username: username,
      password: password
    };

    // Send the data to the server using Axios
    axios.post('http://localhost:3000/register', formData)
      .then(function (response) {
        console.log(response);
        if(response.data =="User registered successfully" )
        {
          alert("Registered Successfully!!")
          window.location.href="../pages/login.html"
        }
        else
        {
          alert("Something went wrong");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Something went wrong");
      });
  })    