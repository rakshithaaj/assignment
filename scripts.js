function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var role = document.getElementById('role').value;
    var contact = document.getElementById('contact').value;
    var experience = document.getElementById('experience').value;
    var employeetype = document.getElementById('role-selector').value;

    if (firstName == "" || lastName == "" || role == "" || contact == "" || experience == "" || desiredRole == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

function changeContent() {
    var selector = document.getElementById('role-selector');
    var content = document.getElementById('content-display');

    switch (selector.value) {
        case 'FullStack':
            content.innerHTML = '<p>Full Stack Developer: Skilled in both frontend and backend development, including HTML, CSS, JavaScript, Java, and Spring Boot.</p>';
            break;
         case 'DevOps':
            content.innerHTML = '<p>DevOps Engineer: Skilled in CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes to streamline development and deployment processes.</p>';
            break;
        case 'Frontend':
            content.innerHTML = '<p>Frontend Developer: Proficient in HTML5, CSS3, JavaScript, and frameworks like React and Angular for building responsive and interactive user interfaces.</p>';
            break;
        case 'Backend':
            content.innerHTML = '<p>Backend Developer: Experienced with Java, Spring Boot, RESTful APIs, and microservices architecture for robust server-side development.</p>';
            break;
        case 'CloudEngineer':
            content.innerHTML = '<p>Cloud Engineer: Experience with AWS and Azure for deploying and managing scalable and reliable cloud applications.</p>';
            break;
        default:
            content.innerHTML = '<p>Please select a role from the dropdown menu.</p>';
            break;
    }
}