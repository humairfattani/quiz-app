var dq = document.getElementById("dq" )
var dopt = document.getElementById('dopt')
var ques = document.getElementById('ques')
var total = document.getElementById('total')
var indexval=0;
var mark = 0;
var q =document.getElementById('q')
var dis =document.getElementById('dis')
var p =document.getElementById('p')
var pa =document.getElementById('pa')


var questions =[
    {
        question : "1. HTML stand for _________",
        Options :  [' Hypertext markup language','Hyper and Text markup','Home tool markup Language','java script'],
        correctAnswer : 'hypertext markup language'
    },
    {
        question :'2. Choose the correct HTML element for the largest heading:_________',
        Options : ['h6','h1','head','heading'],
        correctAnswer : '<h1>'
    },
    {
        question : '3. What is correct HTML element for inserting a line break?_________',
        Options : ['lb','break','br','hr'],
        correctAnswer : '<br>'
    },

    {
        question : '4. DOM stands for_________',
        Options : ['Document Object Model','javascript','hyper text link','JS'],
        correctAnswer : 'Document Object Model'
    },

    {
        question : '5. RAM stands for_________',
        Options : ['Randon Acces memory','HTML','CSS','JS'],
        correctAnswer : 'Randon Acces memory'
    },

    {
        question : '6 ROM stands for_________',
        Options : ['Read only memory','HTML','CSS','JS'],
        correctAnswer : 'Read only memory'
    }
]


function renderQuestion(){
    dq.innerHTML = questions[indexval].question;
    for (var i = 0; i < questions[indexval].Options.length; i++) {
          dopt.innerHTML +=`  <div class="col-md-6 my-3">
          <button onclick="checkqst('${questions[indexval].Options[i]}','${questions[indexval].correctAnswer}')" class="btn btn-outline-gray w-100 py-2 shadow" style="background-color: darkgray;"><b>${questions[indexval].Options[i]}</b></button>
      </div>`

    }
    totalques.innerHTML=questions.length;
    curentQues.innerHTML = indexval + 1 ;


}
renderQuestion()

function sumbit(){
    dopt.innerHTML =""
    if (indexval +1 ==questions.length) {
        var pe =mark/6*100
        p.innerHTML=pe.toFixed(2)
        dis.style.display="block"
        q.style.display="none"
    }else{
        indexval++
        renderQuestion()

    }


}


function checkqst(optionvalue,correctvalue){
 if (optionvalue==correctvalue) {
     mark++
     console.log(mark)

 }

 sumbit()
} 