var firebaseConfig = {
    apiKey: "AIzaSyBI9fpY8G_tsVV_k8l1NloVd95wViAvJJA",
    authDomain: "final-project-168c1.firebaseapp.com",
    databaseURL: "https://final-project-168c1.firebaseio.com",
    projectId: "final-project-168c1",
    storageBucket: "",
    messagingSenderId: "697465735621",
    appId: "1:697465735621:web:de07323f6a1e486b"
  };

  firebase.initializeApp(firebaseConfig);



  let database = firebase.database();



  function submit() {
  
      name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      number = document.getElementById("number").value;
      adress = document.getElementById("adress").value;
      select = document.getElementById("select").value;
  
      let data = {
          name: name,
          email: email,
          number: number,
          adress: adress,
          select: select
      }
      let ref = database.ref("myDataBase/" + adress);
  
      ref.push(data);
  
  }
  
  
  
  document.getElementById("form-fieldset").addEventListener("submit", function (e) {
      e.preventDefault();
      submit();
  })
  