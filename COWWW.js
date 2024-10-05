const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry.target,"ON")
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const ourthanks = document.getElementById("OurThanks")
const teachdayicon = document.getElementById("TeacherDayIcon")
const hiddenElement = document.querySelectorAll(".hidden");
const CardsBtn = document.querySelectorAll(".Card");
const Img = document.getElementById("Img");
const TopicEl = document.getElementById("Topic");
const descr = document.getElementById("descr");
const windowEl = document.getElementById("Window");
const section1 = document.getElementById("section1");
const windowCards = document.querySelectorAll(".windowCard");
const pdf = document.getElementById("pdf");
const button = document.getElementById("Button")
const input = document.getElementById("input")
const degree = document.getElementById("Degree")
const teacherNameEl = document.getElementById("TeacherName")
let area = `Error`;

let showCards = false;
const closeWindow = (Event) => {
  windowEl.classList.add("hide");
  shadow.classList.add("hide");
  degree.classList.add("hide")
  if (showCards) {
    for (let i = 0; i < windowCards.length; i++) {
      windowCards[i].classList.add("hide");
    }
  }
};
// function cl() {
//   document.querySelector(".Xxxx").classList.add("hide");
// }
const openWindow = (showCards) => {
  windowEl.classList.remove("hide");
  shadow.classList.remove("hide");
  for (let i = 0;i<document.querySelectorAll(".EE").length ;i++) {
    document.querySelectorAll(".EE")[i].classList.add("hide")
    document.querySelectorAll(".EE")[i].classList.remove("show")

  }
  pdf.classList.remove("hide")
  if (showCards) {
    for (let i = 0; i < windowCards.length; i++) {
      windowCards[i].classList.remove("hide");
    }
  }
};
const shadow = document.querySelector(".shadow");
const showImg = (img) => {
  if (img) {
    Img.src = img;
    Img.classList.remove("hide");
  }
};
const updateContent = (Topic, Description,pdf) => {
  // TopicEl.textContent = Topic;
  // descr.textContent = Description;
  console.log(pdf,pdf.src)

  // pdf.src =  // .pdf#toolbar=0
  document.getElementById("pdf").src = `${pdf}#toolbar=0`
  console.log(pdf,pdf.src)

};
window.onload = () => {
  document.getElementById("loadingScreen").style.display = "none";
};


const contentForBtns = [
  {
    Name: "Neon",
  //   Topic: "نيوم مدينه المستقبل",
  //   Description: `نيوم هي مدينة مستقبلية تقع في شمال غرب المملكة العربية السعودية، وتمتد على ساحل البحر الأحمر لمسافة 460 كم². تأسست في 24 أكتوبر 2017 بمبادرة من الأمير محمد بن سلمان آل سعود². 

  // تتميز نيوم بمناخها المعتدل وتضاريسها المتنوعة التي تضم شواطئ مشمسة وجبالاً تكسوها الثلوج شتاءً¹. وتعتبر نيوم منطقة اقتصادية خاصة تقدم معيشة استثنائية لسكانها¹. 
  
  // تعمل نيوم بنسبة 100% بالطاقة المتجددة³، وتهدف إلى تحويل المملكة إلى نموذجٍ عالمي رائد في مختلف جوانب الحياة³. وتتوقع نيوم أن تكون الانتهاء من المرحلة الأولى للمشروع بحلول عام 2025².
  
  // تم دعم المشروع من قبل صندوق الاستثمارات العامة السعودي بقيمة 500 مليار دولار، والمستثمرين المحليين والعالميين². وتتولى شركة نيوم التي تأسست في يناير 2019 عمليات تطوير منطقة نيوم والإشراف عليها².
  // `,
  pdf: "pdf/تعليم قديما1.pdf"
  },
  {
    Name: "Cube",
    // Topic: "المربع الجديد",
    // Description: `مشروع المربع الجديد في الرياض هو تحول حضري ضخم يمتد على مساحة 19 كيلومتر مربع، يهدف إلى إعادة تعريف ملامح المدينة وتحسين جودة العيش والعمل والترفيه. يتضمن المشروع وحدات سكنية وفنادق ومساحات تجارية ومكتبية، بالإضافة إلى مرافق ترفيهية ومجتمعية. يشمل المشروع برج المكعب كمعلم بارز يتميز بتصميم مستوحى من الطراز المعماري النجدي، ويعد أحد أهم مشاريع استراتيجية صندوق الاستثمارات العامة لإعادة تعريف التنمية الحضرية في المملكة وتحقيق رؤية السعودية ٢٠٣٠.`,
    pdf: "pdf/فضل العلم.pdf"

  },
  {
    Name: "MIS",
    // Topic: "ًصنع في السعوديه",
    // Description: `يحفز برنامج "صنع في السعودية" الشركات المحلية على توسيع نطاق أعمالها، والاستفادة من مزايا البرنامج لتسويق منتجاتها إلى عدد أكبر من العملاء، والتواصل مع المستهلكين المهتمين بالمنتجات والشركات السعودية.
    // انطلق "صنع في السعودية" في عام 2021، عبر برنامج تطوير الصناعة الوطنية والخدمات اللوجستية، وهيئة تنمية الصادرات السعودية، لتشجيع المواهب والابتكارات المحلية والمنتج الوطني، وتعزيز قدرة الشركات المحلية على توسيع نطاق وصولها، والترويج لمنتجاتها محليًّا وعالميًّا، ودعم الاقتصاد الوطني، وريادة الأعمال في المملكة.
    
    // يدعم البرنامج المنتجات والخدمات السعودية لتكون الخيار المفضل للمستهلكين المحليين والدوليين، ولا يقتصر الأمر على تشجيع المواطنين على شراء المنتجات المصنوعة محليًّا، ولكنه يعزز مكانة المملكة كوجهة صناعية عالمية جاذبة  للاستثمارات، ويشارك في زيادة الصادرات غير النفطية إلى 50% من الناتج المحلي الإجمالي غير النفطي بحلول عام ٢٠٣٠.
    
    // يمكّن البرنامج الشركات المتعاونة معه، من استخدام شعار "صنع في السعودية" وإبراز صورة إيجابية للمملكة في جميع أنحاء العالم.
    
    // اكتشف كيف تعمل رؤية السعودية ٢٠٣٠ لتحقيق وبناء اقتصاد سعودي متنوع ومستدام.`,
    pdf: "pdf/دور المعلم.pdf"

  },
];

hiddenElement.forEach((el) => observer.observe(el));

for (let i = 0; i < CardsBtn.length; i++) {
  document
    .getElementById(contentForBtns[i].Name)
    .addEventListener("click", () => {
      openWindow();
      console.log(contentForBtns[i].Name,contentForBtns[i].pdf)
      updateContent(contentForBtns[i].Topic, contentForBtns[i].Description,contentForBtns[i].pdf);
    });
}


// for (let i = 0; i < windowCards.length; i++) {
//   windowCards[i].addEventListener("click", (Event) => {
//     document.querySelector(".Xxxx").classList.remove("hide");
//     document.querySelector(".Xxxx").classList.add("showw");
//     if ((Event.target.parentNode.id = "clothes")) {
//       pdf.src = `دليل الازياء ${area}.pdf#toolbar=0`;
//     }
//     if ((Event.target.parentNode.id = "foods")) {
//       pdf.src = `دليل الاكل ${area}.pdf#toolbar=0`;
//     }
//   });
// }
// well now really the end i hope i be someone who will create huge thing in programming industry :D it is really weird to read these comments Haha
teachdayicon.addEventListener("click",(Event) => {
  window.scrollTo(false,0,30)
})
ourthanks.addEventListener("click",(Event) => {
  pdf.classList.add("hide")
  shadow.classList.remove("hide")
  windowEl.classList.remove("hide")
  windowEl.classList.add("show")
  shadow.classList.add("show")
  for (let i = 0;i<document.querySelectorAll(".EE").length ;i++) {
    document.querySelectorAll(".EE")[i].classList.remove("hide")
    document.querySelectorAll(".EE")[i].classList.add("show")

  }
})
const EASters = {
  "AYAYAY": "https://youtu.be/QzcvRDWgRIE?si=2Xe9ctVMefrrkY3y",
  "redbird": "https://youtu.be/ry0RUX5b5pY?si=ldy1JJwyiLGhN8hg",
  "صالح سوا شي اخيرا" : 'https://youtu.be/B5hUgTZQOMs?si=t2HCP0Ds1zaF0fZN', // take it ez bro
  "ابو طله": "https://youtu.be/iB5rEwU9E04?si=vsyxFXAMmJLiB1C7",
  "bobux": "https://youtu.be/dQw4w9WgXcQ?si=xGF9hFgN2CftkgMs",
  "crazy":  "https://youtu.be/Yh1ZDa-rinM?si=mvoqaOrZ5nmKXrXr"
}

button.addEventListener("click",(Event)=>{
  let TeacherName = input.value
  if (TeacherName){
    console.log("There is a thing")
    input.classList.remove("NeedToFull")
    input.placeholder = "الاسم الكريم"
    degree.classList.remove("hide")
    degree.classList.add("show")
    windowEl.classList.add("hide")
    windowEl.classList.remove("show")

    teacherNameEl.textContent = TeacherName

  } else{
    input.value = ""
    input.placeholder = "الاسم مطلوب*"
    input.classList.add("NeedToFull")
  }
  if (EASters[TeacherName]) {
    console.log(EASters[TeacherName])
    window.open(EASters[TeacherName]);

    // document.location.href = EASters[TeacherName];
  }
})
