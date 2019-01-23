loader()

function loader() {
    var data = {
        question: ['Each computer has a built-in instruction set that it knows how to execute by design.', 'A computer stores all the information in 0s and 1s'],
        choices: [['True', 'False'], ['True', 'False']],
        hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem"', 'Recall the reason we understood binary numbers.'],
        correct: ['Correct!', 'Correct!'],
        wrong:['Incorrect!','Incorrect'],
        answer: [1,1]
    }
    var count = 2;
    const toAdd = document.querySelector('#insert');
    for(var i=0;i<count;i++) {

        var qtemp= '<p>'+data.question[i]+'</p>';
        
        var hnTemp = document.createElement('button');
        hnTemp.textContent='Hint';
        hnTemp.setAttribute("class","btn-warning");
        var hintName = "hint"+i;
        hnTemp.setAttribute("id",hintName);
        var hintfn = "hnfnc("+i+");";
        hnTemp.setAttribute("onclick",hintfn);
        
        var opt1temp = '<div class="radio">\
        <br>\
        <label><input type="radio" name="optradio" id="q1True" onclick="q1(1)" >True</label>\
        <br>\
        </div>';

        
        var opt2temp = '<div class="radio">\
        <label><input type="radio" name="optradio" id="q1False" onclick="q1(2)">False</label>\
        </div>';
        

        toAdd.insertAdjacentHTML('beforeend',qtemp);
        toAdd.insertAdjacentElement('beforeend',hnTemp);
        toAdd.insertAdjacentHTML('beforeend',opt1temp);
        toAdd.insertAdjacentHTML('beforeend',opt2temp);
    }
    
}

function hnfnc(num) {
    var data = {
        question: ['Each computer has a built-in instruction set that it knows how to execute by design.', 'A computer stores all the information in 0s and 1s'],
        choices: [['True', 'False'], ['True', 'False']],
        hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem"', 'Recall the reason we understood binary numbers.'],
        correct: ['Correct!', 'Correct!'],
        wrong:['Incorrect!','Incorrect'],
        answer: [1,1]
    }

    var temp1='<div id="q1Hint" class="alert alert-warning alert-dismissable">'+
    '<button type="button" class="close" data-dismiss="alert">&times;</button>'+data.hints[num]+
    '</div>';
    var hintId = "#hint"+num;
    const add = document.querySelector(hintId);
    add.insertAdjacentHTML("afterend",temp1);
}


