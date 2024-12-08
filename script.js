let ratingCard = document.querySelector('.rating-card');
let thankYouCard = document.querySelector('.thank-you-card');
let rates = document.querySelectorAll('.rates li');
let backBtn = document.querySelector('.back-btn');

let resetRates = ()=>{
    rates.forEach((rate)=>{
        rate.classList.remove('active');
    })
}

let ratesActive = ()=>{
    rates.forEach((rate)=>{
        rate.addEventListener('click', ()=>{
            rate.classList.add('active');
            // remove clicked class on non clicked rates
            rates.forEach((r)=>{
                if(r !== rate){
                    r.classList.remove('active');
                }
            })
            rateSubmit();
        })
    })
}
ratesActive();

// submitting rates
let rateSubmit = ()=>{
    let submitBtn = document.querySelector('.submit-btn');
    let result = document.querySelector('.result');
    submitBtn.addEventListener('click', (event)=>{
        let rate = document.querySelector('.rates .active').innerHTML;
        ratingCard.style.display = "none";
        thankYouCard.style.display = "block";
        backBtn.style.display = "block";
        result.innerHTML = `You selected ${rate} out of 5`;

        previousPage();
    })
}

// back button
let previousPage = ()=>{
    backBtn.addEventListener('click', ()=>{
        backBtn.style.display = "none";
        ratingCard.style.display = "block";
        thankYouCard.style.display = "none";
        resetRates();
    })
}

