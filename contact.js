function submitData() {
    let name = document.getElementById("Name-input").value;
    let email = document.getElementById("Email-input").value;
    let phone = document.getElementById("Phone-input").value;
    let subject = document.getElementById("Subject-input").value;
    let message = document.getElementById("Message-input").value;

    if (name == "" && email == "" && phone == "" && subject == "" && message == ""){
        return alert("Data is required");
    }

    let emailReceiver = "rendyoktavian08@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silakan kontak saya di nomor ${phone}, terima kasih.`;
    a.click();

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailer = {
        name,
        email,
        phone,
        subject,
        message,
    };

    console.log(emailer);
}