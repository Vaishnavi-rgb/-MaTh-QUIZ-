player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name +":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_turn").innerHTML="Question turn :  "+ player1_name;
document.getElementById("answer_turn").innerHTML="Answer turn :  "+ player2_name;

function send(){
    number1=document.getElementById("num_1").value;
    number2=document.getElementById("num_2").value;
    actual_num=parseInt(number1)*parseInt(number2);

     question_num="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer: <input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn-btn-info' onclick='check()'>Check</button>";
    row= question_num + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num_1").value="";
    document.getElementById("num_2").value="";

}