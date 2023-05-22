function formEmpty(){
    let projectName = document.getElementById("Project-name").value;
    let startDate = document.getElementById("Start-date").value;
    let endDate = document.getElementById("End-date").value;
    let description = document.getElementById("desc").value;
    let image = document.getElementById("image-input").files;

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
    const pythonIcon = '<i class="fa-brands fa-python fa-2xl></i>';

    let javascriptIconDec = document.getElementById("check-item1").checked ? javascriptIcon : "";
    let javaIconDec = document.getElementById("check-item2").checked ? javaIcon : "";
    let linuxIconDec = document.getElementById("check-item3").checked ? linuxIcon : "";
    let pythonIconDec = document.getElementById("check-item4").checked ? pythonIcon : "";

    image = URL.createObjectURL(image[0]);
    console.log(image);

    let projectCard = {
        projectName,
        startDate,
        endDate,
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
}

    function renderProjectPostCard(){
        document.getElementById("blog-wrapper").innerHTML="";

        for(let index = 0; index < projectData.length; index++){
            document.getElementById("blog-wrapper").innerHTML += `
            <div class="preview">
                <img src="${projectData[index].image}" alt="">
                <a href="#">
                    <h4>${projectData[index].projectName}</h4>
                </a>
                <p class="duration">${projectData[index].startDate} / ${projectData[index].endDate}</p>
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