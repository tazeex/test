// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "ყოველი კარგი საქმის დაწყების წინ უნდა წარმოვთქვათ?",
    answer: "ბ. ბისმილლაჰ",
    options: [
      "ა. ელჰამდულილლაჰ",
      "ბ. ბისმილლაჰ",
      "გ. ალლაჰუ ექბერ",
      "დ. სუბჰანელლაჰ"
    ]
  },
  {
    numb: 2,
    question:
      "ქვემოთ ჩამოთვლილ მამაკაც საჰაბეთაგან, რომელს აქვს შუამავლისგან ყველაზე მეტი ჰადისი გადმოცემული?",
    answer: "დ. ებუ ჰურეირა",
    options: [
      "ა. ენეს ბინ. მალიქი",
      "ბ. ებუ უბეიდე ბინ. ელ-ჯერრაჰი",
      "გ. აბდულლაჰ ბინ. მეს’უდ",
      "დ. ებუ ჰურეირა"
    ]
  },
  {
    numb: 3,
    question:
      "ალლაჰის შუამავალი ბრძანებს: „ პიროვნება, რომელსაც მაძღარი სძინავს და თავისი მეზობელი მშიერია, ჩვენიანი არ არის“-ჰადისი, რომელი ღვთისმსახურების აუცილებლობაზე მიუთითებს?",
    answer: "ა. ზექათი",
    options: ["ა. ზექათი", "ბ. ლოცვა", "გ. მსხვერპლშეწირვა", "დ. მარხვა"]
  },
  {
    numb: 4,
    question:
      "შუამავლის ჰადისის თანახმად,  რომელი (ყველაზე მნიშვნელოვანი) თვისების მიხედვით უნდა შეარჩიოს მუსლიმმა მეუღლე?",
    answer: "დ. კარგი ზნეობა",
    options: ["ა. სიმდიდრე", "ბ. სილამაზე", "გ. ასაკი", "დ. კარგი ზნეობა"]
  },
  {
    numb: 5,
    question:
      "ალლაჰის საუკეთესო სახელებიდან, ელ-მუჰეიმინუ’ს მნიშვნელობა რომელია?",
    answer: "ა. მფარველი. ყოვლის მცოდნე, ყველაფრის მაკონტროლებელი",
    options: [
      "ა. მფარველი. ყოვლის მცოდნე, ყველაფრის მაკონტროლებელი",
      "ბ. მშვიდობის წყარო,მორწმუნეთატის სამოტხის მიმნიჭებელი",
      "გ. ყოვლის მცოდნე, აბსოლიტური და ამომწურავი ცოდნის პატრონი",
      "დ. ცოდვების მიმტევებელი, მპატიებელი"
    ]
  },
  {
    numb: 6,
    question:
      "ალლაჰის ბრძანებით, რომელი შუამავალი იქნა დატოვებული მდინარე ნილოსში?",
    answer: "ბ. მუსა შუამავალი",
    options: [
      "ა. იუსუფ შუამავალი",
      "ბ. მუსა შუამავალი",
      "გ. სალიჰ შუამავალი",
      "დ. ჰუდ შუამავალი"
    ]
  },
  {
    numb: 7,
    question: "რომელი ნივთიერებიდან გააჩინა ალლაჰმა ადამიანები?",
    answer: "დ. მიწისგან",
    options: ["ა. ცეცხლისგან", "ბ. ხორცისგან", "გ. სინათლისგან", "დ. მიწისგან"]
  },
  {
    numb: 8,
    question: "რომელი ლოცვის შესრულების დროს არ არის საჭირო სეჯდე და რუქუღი",
    answer: "ა. მიცვალებულის სულისთვის აღსავლენი ლოცვა (ჯენაზე)",
    options: [
      "ა. მიცვალებულის სულისთვის აღსავლენი ლოცვა (ჯენაზე)",
      "ბ. „ვითრის“ ლოცვა",
      "გ. სამხრობის ლოცვა",
      "დ. „თეჰეჯჯუდის“ ლოცვა"
    ]
  },
  {
    numb: 9,
    question: "რამდენი მუხლია დილის ლოცვა?",
    answer: "დ. 4",
    options: ["ა. 13", "ბ. 10", "გ. 5", "დ. 4"]
  },
  {
    numb: 10,
    question:
      "ქვემოთ ჩამოთვლილთაგან, პირმოთნისთვის დამახასიათებელი თვისება რომელია?",
    answer: "ა. ენით დამოწმება და გულით უარყოფა",
    options: [
      "ა. ენით დამოწმება და გულით უარყოფა",
      "ბ. ალლაჰზე თანაზიარის დადგენა",
      "გ. გულით დაჯერება და ენით დამოწმება ",
      "დ. ისლამის ძრითადი პრინციპების მხოლოდ ერთი ნაწილის აღიარება"
    ]
  },

  {
    numb: 11,
    question: "ქვემოთ ჩამოთვლილთაგან, რომელი არ შეესაბამება სიმართლეს?",
    answer: "ბ. თევრათი (თორა) შუამავალ ისმაილს მოევლინა",
    options: [
      "ა. ზებური შუამავალ დავითს მოევლინა",
      "ბ. თევრათი (თორა) შუამავალ ისმაილს მოევლინა",
      "გ. ყურანი შუამავალ მუჰამმედს მოევლინა",
      "დ. განკითხვის დღის დაჯრება-რწმენის პირობებთაგან ერთერთია"
    ]
  }
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(30); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
};

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  დრო = 30;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "დრო"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "დრო"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>გილოცავთ! 🎉თქვენ გაქვთ<p>" +
      userScore +
      "</p>სწორი პასუხი<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>სასიამოვნო 😎თქვენ გაქვთ<p>" +
      userScore +
      "</p> სწორი პასუხი<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>ბოდიში😐 თქვენ გაქვთ მხოლოდ <p>" +
      userScore +
      "</p> სწორი პასუხი<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "დრო ამოიწურა"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("დრო ამოიწურა: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> -- <p>" +
    questions.length +
    "</p> კითხვა</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}