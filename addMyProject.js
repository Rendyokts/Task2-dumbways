function formEmpty(){
    let projectName = document.getElementById("Project-name").value;
    let startDate = document.getElementById("Start-date").value;
    let endDate = document.getElementById("End-date").value;
    let description = document.getElementById("desc").value;
    let image = document.getElementById("image-input").files;
    let inputTech = document.querySelectorAll(".Input-tech:checked");

    if(projectName == ""){
        return alert("Please input a project title");
    } else if(startDate == ""){
        return alert("Please input a start date");
    } else if(endDate == ""){
        return alert("Please input an end date");
    } else if(description == ""){
        return alert("Please describe the project details");
    } else if(image == ""){
        return alert("Please attach an image project");
    }
};

let projectData = [];

function postProject(event){
    event.preventDefault();

    let projectName = document.getElementById("Project-name").value;
    let startDate = document.getElementById("Start-date").value;
    let endDate = document.getElementById("End-date").value;
    let description = document.getElementById("desc").value;
    let image = document.getElementById("image-input").files;

    const javascriptIcon = '<i class="fa-brands fa-js fa-2xl"></i>';
    const javaIcon = '<i class="fa-brands fa-java fa-2xl"></i>';
    const linuxIcon = '<i class="fa-brands fa-linux fa-2xl"></i>';
    const pythonIcon = '<i class="fa-brands fa-python fa-xl></i>';

    let javascriptIconDec = document.getElementById("check-item1").checked ? javascriptIcon : "";
    let javaIconDec = document.getElementById("check-item2").checked ? javaIcon : "";
    let linuxIconDec = document.getElementById("check-item3").checked ? linuxIcon : "";
    let pythonIconDec = document.getElementById("check-item4").checked ? pythonIcon : "";

    image = URL.createObjectURL(image[0]);
    console.log(image);

    const startValiDate = new Date(startDate);
    const endValiDate = new Date(endDate);
    if(startValiDate > endValiDate){
        return alert("Please input the dates correctly");
    };

    let projectCard = {
        projectName,
        startDate,
        endDate,
        // durationDate: endDate - startDate,
        // postAt: new Date,
        author: "Rendi Oktavian",
        description,
        javascriptIconDec, 
        javaIconDec, 
        linuxIconDec, 
        pythonIconDec,
        image,
    };

    projectData.push(projectCard);
    console.log(projectData);

    renderProjectPostCard();

    document.getElementById("Project-name").value = "";
    document.getElementById("Start-date").value = "";
    document.getElementById("End-date").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image-input").value = "";
    document.getElementById("check-item1").checked = false;
    document.getElementById("check-item2").checked = false;
    document.getElementById("check-item3").checked = false;
    document.getElementById("check-item4").checked = false;

    // document.getElementById("project-form").reset();
};

    function renderProjectPostCard(){
        document.getElementById("blog-wrapper").innerHTML="";


        for(let index = 0; index < projectData.length; index++){
            const startDate = new Date(projectData[index].startDate);
            const endDate = new Date(projectData[index].endDate);
            const remainder = endDate - startDate;
            let years = 365;
            let months = 30;
            let days = 7;
            let hours = 24;
            let minutes = 60;
            let seconds = 60;
            let miliseconds = 1000;
            let timeUnits = [
                {value: years * hours * minutes * seconds * miliseconds, label: "years"},
                {value: months * hours * minutes * seconds * miliseconds, label: "months"},
                {value: days * hours * minutes * seconds * miliseconds, label: "weeks"},
                {value: hours * minutes * seconds * miliseconds, label: "days"},
            ];

            let durationResults = "";
            for (let calculate = 0; calculate < timeUnits.length; calculate++) {
                const {value, label} = timeUnits[calculate];
                const calculated = Math.floor(remainder/value);
                if(calculated > 0) {
                    durationResults = `${calculate} ${label}`;
                    break;
            };
            };

            if(durationResults === ""){
                durationResults = "Less than a day";
            };

            document.getElementById("blog-wrapper").innerHTML += `
            <div class="preview">
                <img src="${projectData[index].image}" alt="">
                <a href="#">
                <h4>${projectData[index].projectName}</h4>
                </a>
                <p style="font-size:13px; margin-bottom:20px" >${projectData[index].author}</p>
                
                <p class="duration" style="font-size:12px">Durations ${durationResults}</p>
                <p class="desc-blog">${projectData[index].description}</p>
                <div class="tech-icon">
                ${projectData[index].javascriptIconDec}
                ${projectData[index].javaIconDec}
                ${projectData[index].linuxIconDec}                
                </div>
                <div class="card-btn">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>

            </div>
        `;
        }
    }

    function getFullTime(time){

        let monthName=[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
    
        let date = time.getDate();
    
        let monthIndex = time.getMonth() + 1;
    
        let year = time.getFullYear();
    
        let hours = time.getHours();
    
        let minutes = time.getMinutes();
    
        if(hours <= 9){
            hours = "0" + hours;
        } else if(minutes <= 9){
            minutes = "0" + minutes;
        }
    
        return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
    }
    
    function getDistanceTime(time){
        let timeNow = new Date();
        let timePost = time;
    
        let distance = timeNow - timePost;
        console.log(distance);
    
        let milisecond = 1000;
        let secondInHours = 3600;
        let hoursInDays = 24;
    
        let distanceDay = Math.floor(
            distance / (milisecond * secondInHours * hoursInDays)
        );
    
        let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
        let distanceMinutes = Math.floor(distance / (milisecond * 60));
        let distanceSeconds = Math.floor(distance / milisecond);
    
        if (distanceDay > 0){
            return `${distanceDay} Days Ago`;
        } else if (distanceHours > 0){
            return `${distanceHours} Hours Ago`;
        } else if (distanceMinutes > 0){
            return `${distanceMinutes} Minutes Ago`;
        } else {
            return `${distanceSeconds} Seconds Ago`;
        }
    }
    
    setInterval(function(){
        renderProjectPostCard();
    } , 10000);