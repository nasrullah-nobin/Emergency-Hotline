const heartCount = document.getElementById("heart-count");
let goldCount = document.getElementById("gold-count");
const copyCount = document.getElementById("copy-count");
let heartClick = 0;
let copyClick = 0;

function updateCount() {
  heartCount.innerText = heartClick;
  copyCount.innerText = copyClick;
}

const allBtn = document.querySelectorAll(".heart-btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("btn-secondary");
    if (btn.classList.contains("btn-secondary")) {
      heartClick++;
    } else {
      heartClick--;
    }
    updateCount();
  });
});

document.querySelector("main").addEventListener("click", function (event) {
  const isCallBtn = event.target.closest(".call-btn");
  if (isCallBtn) {
    const card = event.target.parentNode.parentNode;
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    const cardInfo = {
      serviceName,
      serviceNumber,
    };
    const alertDiv = document.getElementById("alert-div");
    alertDiv.classList.remove("hidden");
    alertDiv.innerHTML = `<p>📞 কল নিশ্চিতকরণ</p>
    <p><b>আপনি কি নিচের নম্বরে কল করতে চান?</b></p>
   
   <p><b>Service: ${cardInfo.serviceName} </b></p><p><b>Number: ${cardInfo.serviceNumber}</b></p>
    <p>খরচ: ২০ কয়েন</p>
     <div class="flex justify-between mt-2">
     <button id="cancel" class="btn btn-error">বাতিল করুন</button>
     <button id="agree" class="btn btn-success">কল করুন</button>
     </div>
    `;
    const agree = document.getElementById("agree");
    const cancel = document.getElementById("cancel");
    agree.addEventListener("click", function () {
      alertDiv.classList.add("hidden");

      if (Number(goldCount.innerText) < 20) {
        alert(`❌ পর্যাপ্ত কয়েন নেই।

এই কল করার জন্য কমপক্ষে ২০ কয়েন প্রয়োজন।
অনুগ্রহ করে আপনার কয়েন ব্যালেন্স বাড়ান।`);
        return;
      } else {
        goldCount.innerText = Number(goldCount.innerText) - 20;
        const history = document.getElementById("History");
        const newDiv = document.createElement("div");
        newDiv.className =
          "p-4 bg-[#f9f3f3] rounded-xl flex justify-between items-center temp";
        newDiv.innerHTML = `<div>${cardInfo.serviceName} <br>
        ${cardInfo.serviceNumber}</div>
       ${new Date().toDateString()}
       `;
        history.appendChild(newDiv);
      }
    });
    cancel.addEventListener("click", function () {
      alertDiv.classList.add("hidden");
    });
  }
   const isCopyBtn = event.target.classList.contains("copy-btn");
  if (isCopyBtn) {
    copyClick++;
    updateCount();
  }
});

document.getElementById("clear-history").addEventListener("click", function () {
  const temp = document.querySelectorAll(".temp");
  for (let tem of temp) {
    tem.remove();
  }
});



document.getElementById('hamburger').addEventListener('click', function(event){
  console.log(event.target)
})
