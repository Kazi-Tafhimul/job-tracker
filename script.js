let interviewList = [];
let rejectedList = [];
let totalCnt = document.getElementById("total-count");
let interviewCnt = document.getElementById("interview-count");
let rejectedCnt = document.getElementById("rejected-count");
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterbtn = document.getElementById("interview-filter-btn");
let rejectFilterBtn = document.getElementById("reject-filter-btn");
const allCard = document.getElementById("all-card");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById("filtered-section");


function calculateCount(){
    totalCnt.innerText = allCard.children.length;
    interviewCnt.innerText = interviewList.length;
    rejectedCnt.innerText = rejectedList.length;
}

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-sky-500', 'text-white')
    interviewFilterbtn.classList.remove('bg-sky-500', 'text-white');
    rejectFilterBtn.classList.remove('bg-sky-500', 'text-white');


    allFilterBtn.classList.add('bg-white','text-black')
    interviewFilterbtn.classList.add('bg-white', 'text-black');
    rejectFilterBtn.classList.add('bg-white', 'text-black');
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-white','text-black');
    selected.classList.add('bg-sky-500','text-white');
    if(id=='interview-filter-btn'){
        allCard.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterviewCard();
        
    }
    
    else if(id=='reject-filter-btn'){
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden')

        renderRejectedCard();


    }
    else{
        allCard.classList.remove('hidden')
        filterSection.classList.add('hidden')

    }

    

}
mainContainer.addEventListener("click",function(event){
    const checkInterview = event.target.closest('.interview-btn');
    const checkRejected = event.target.closest('.rejected-btn');

    
    if(checkInterview){
     const parentNode = event.target.closest('.card-body');
     const companyName = parentNode.querySelector('.company-name').innerText;
     const jobDesignation = parentNode.querySelector('.job-designation').innerText;
     const jobSalary = parentNode.querySelector('.job-salary').innerText;
     const cardStatus = parentNode.querySelector('.card-status').innerText;
     const notes = parentNode.querySelector('.notes').innerText;
     parentNode.querySelector('.card-status').innerText = "Interview"
     const allCards = allCard.querySelectorAll('.card-body');
     allCards.forEach(card=>{
        const cardName = card.querySelector('.company-name').innerText;
        if(cardName === companyName){
            card.querySelector('.card-status').innerText = "Interview";
        }
     })

     const cardInfo = {
        companyName,
        jobDesignation,
        jobSalary,
        cardStatus:'Interview',
        notes
     }
     rejectedList = rejectedList.filter(item=>item.companyName!=cardInfo.companyName);
    
     const exist =  interviewList.find(item=> item.companyName == cardInfo.companyName)
      
    if(!exist){
        interviewList.push(cardInfo);
        calculateCount();
    }
    

    

    }
   else if(checkRejected){
    const parentNode = event.target.closest('.card-body');
     const companyName = parentNode.querySelector('.company-name').innerText;
     const jobDesignation = parentNode.querySelector('.job-designation').innerText;
     const jobSalary = parentNode.querySelector('.job-salary').innerText;
     const cardStatus = parentNode.querySelector('.card-status').innerText;
     const notes = parentNode.querySelector('.notes').innerText;
     parentNode.querySelector('.card-status').innerText = "Rejected"
     const allCards = allCard.querySelectorAll('.card-body');
     allCards.forEach(card=>{
        const cardName = card.querySelector('.company-name').innerText;
        if(cardName === companyName){
            card.querySelector('.card-status').innerText = "Rejected";
        }
     })


     const cardInfo = {
        companyName,
        jobDesignation,
        jobSalary,
        cardStatus:'Rejected',
        notes
     }
     interviewList = interviewList.filter(item=>item.companyName!=cardInfo.companyName);
    
     const exist = rejectedList.find(item=> item.companyName == cardInfo.companyName)
      
    if(!exist){
        rejectedList.push(cardInfo);
        calculateCount();
       

    }

    }
     if(!filterSection.classList.contains('hidden')){
            if(interviewFilterbtn.classList.contains('bg-sky-500')){
                renderInterviewCard();
            }
            if(rejectFilterBtn.classList.contains('bg-sky-500')){
                renderRejectedCard();
            }
        }
     



})

function renderInterviewCard(){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = `card-body flex justify-between items-start bg-white rounded-md 
        p-6 shadow-sm`
        div.innerHTML = `
        <div>
                <h2 class="company-name font-bold text-2xl">${interview.companyName}</h2>
                <h3 class="job-designation font-normal text-xl text-gray-400 mb-4">${interview.jobDesignation}</h3>
                <p class="job-salary mb-3 text-gray-600">${interview.jobSalary}</p>
                
                <button class="card-status bg-gray-200 text-gray-700 px-3 py-1 rounded-sm mb-4 text-sm font-medium">
                    ${interview.cardStatus}
                </button>
                <p class="notes text-sm mb-4 text-gray-600">
                    ${interview.notes}
                </p>

                <div class="flex flex-row gap-4 mt-2">
                    <button class="interview-btn border border-green-500 text-green-500 px-6 py-2 cursor-pointer font-bold rounded hover:bg-green-50 transition-colors">
                        INTERVIEW
                    </button>
                    <button class="rejected-btn border border-red-700 text-red-700 px-6 py-2 cursor-pointer font-bold rounded hover:bg-red-50 transition-colors">
                        REJECTED
                    </button>
                </div>
            </div>`
            filterSection.appendChild(div)
    }



}

function renderRejectedCard(){
    filterSection.innerHTML = '';
    for(let interview of rejectedList){
        let div = document.createElement('div');
        div.className = `card-body flex justify-between items-start bg-white rounded-md 
        p-6 shadow-sm`
        div.innerHTML = `
        <div>
                <h2 class="company-name font-bold text-2xl">${interview.companyName}</h2>
                <h3 class="job-designation font-normal text-xl text-gray-400 mb-4">${interview.jobDesignation}</h3>
                <p class="job-salary mb-3 text-gray-600">${interview.jobSalary}</p>
                
                <button class="card-status bg-gray-200 text-gray-700 px-3 py-1 rounded-sm mb-4 text-sm font-medium">
                    ${interview.cardStatus}
                </button>
                <p class="notes text-sm mb-4 text-gray-600">
                    ${interview.notes}
                </p>

                <div class="flex flex-row gap-4 mt-2">
                    <button class="interview-btn border border-green-500 text-green-500 px-6 py-2 cursor-pointer font-bold rounded hover:bg-green-50 transition-colors">
                        INTERVIEW
                    </button>
                    <button class="rejected-btn border border-red-700 text-red-700 px-6 py-2 cursor-pointer font-bold rounded hover:bg-red-50 transition-colors">
                        REJECTED
                    </button>
                </div>
            </div>`
            filterSection.appendChild(div)
    }



}

