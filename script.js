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

function calculateCount(){
    totalCnt.innerText = allCard.children.length;
    interviewCnt.innerText = interviewList.length;
    rejectedCnt.innerText = rejectedList.length;
}
calculateCount();
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

    

}
mainContainer.addEventListener("click",function(event){
     const parentNode = event.target.parentNode.parentNode;
     


})