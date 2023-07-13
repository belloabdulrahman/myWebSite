const modalContainer = document.querySelector(".modal-container"),
            btnClose = document.querySelector(".btn-close"),
            submitBtn = document.querySelector(".submit-btn"),
            declineBtn = document.querySelector(".decline-btn"),
            consentForm = document.querySelector(".consent-form"),
            strict = document.querySelector(".strict"),
            btnContainer = document.querySelector(".btn-container"),
            uploadText = document.querySelector(".upload-text");
setTimeout(() => {
    modalContainer.style.display = 'inline'
},1000)

btnClose.addEventListener("click", ()=>{
    modalContainer.style.display = "none"
})

declineBtn.addEventListener("click", ()=>{
    modalContainer.style.display = "none"
})
consentForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    let Name = consentFormData.get("fullname")
    let Email = consentFormData.get("email")
    console.log(Name, Email);
    strict.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(()=>{
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 3000)
    
    setTimeout(()=>{
        btnClose.disabled = false
        document.getElementById('content').innerHTML = `
        <div>
        <h2 class= thanks>
        Thanks <span class="modal-display-name">${Name}</span> for your time
         </h2>
        <p class = "glad">We are glad to meet you soon!!!</p>
        <div class="myPic">
            <img src="images/myPic.jpeg" class="myPic1">
        </div>
        </div>
    `
    }, 3000) 
})

declineBtn.addEventListener("mouseenter", ()=>{
    btnContainer.classList.toggle("btn-container-reverse")
})


