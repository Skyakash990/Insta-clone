import axios from 'axios'
document.getElementById("Log").addEventListener("click",function () {
    // Get the form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        email: email,
        password: password
      };
     // Send the data to the server using Axios
     
    axios.post('http://localhost:3000/login', formData)
    .then(function (response){
    localStorage.setItem("d1", JSON.stringify(response.data));
    alert("logged in successfully!");
    window.location.href="../index.html"
    })

    .catch(function (error) {
      console.log(error);
      alert(error)
    });
   


    // Reset form inputs

   
})