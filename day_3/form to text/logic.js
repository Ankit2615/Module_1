let saveFile = () => {
    // Get the data from each element on the form.
    const fname = document.getElementById("firstName");
    const mname = document.getElementById("mname");
    const lname = document.getElementById("lname");
    const address = document.getElementById("adress");
    const dob = document.getElementById("bod");
    const phone = document.getElementById("phon");
    const gender = document.getElementById("gender");
    const pincode = document.getElementById("pincode");
    const email = document.getElementById("email");
    const que1 = document.getElementById("nicname");
    const que2 = document.getElementById("bname");
    const age = document.getElementById("age");


    // This variable stores all the data.
    let data = "fname: " + fname.value + " midlle name :" + mname.value + " last name :" + lname.value +" \r\n " + "Age: " + age.value + " \r\n " + "Email: " + email.value + " \r\n "+ " \r\n " + "Quetion 1 : " + que1.value + " \r\n " + "Quetion 2 : " + que2.value +  " \r\n " + "address : " + address.value + " \r\n " + "dob  : " + dob.value  + " \r\n " + "phone  : " + phone.value + " \r\n " + "gender  : " + gender.value + " \r\n " + "pincode  : " + pincode.value ;

    console.log(data); //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};