const quiz=[{Q:"You work as a Web developer for abcxyzcompany.com. You need to implement a page event that fires after the event-handling process.Which page event should you use?",
A: "The Load Complete event would be raised.",
B: "The Trace.axd event would be raised.",
C: "The On End event would be raised.",
D: "The Init Complete event would be raised.",
Answer: "op1"},
{
    Q:"Which of the following statements regarding the utilization of client-side scripting is TRUE?",
A: "Client-side scripting refers to scripts executed on the Web browser instead of the Web server.",
B: "Client-side scripting refers to scripts executed on the server on behalf of the client.",
C: "Client-side scripting refers to scripts executed on the SQL Server by the Web Server.",
D: "Client-side scripting refers to scripts executed on the Web server by the Client Server.",
Answer: "op1"
},
{
    Q:"You work for a Web solution development company named xyzcompany.com. You need to identify the file type utilized for configuration settings of deployed ASP.NET applications.Which file type should be used?",
    A: "The settings are stored in XML files.",
    B: "The settings are stored in Shtml files.",
    C: "The settings are stored in the Hosts file.",
    D: "The settings are stored in the .aspx file.",
    Answer: "op1"
},
{
    Q:"Which of the following statements regarding the utilization of HTML and XML is TRUE?",
A: "XML is not as secure but supports transporting data and HTML is secure and additionally supports displaying data.",
B: "XML is utilized for web display format and HTML is utilized for displaying.",
C: "XML is secure and supports displaying data and HTML is unsecured and additionally does not support transporting data.",
D: "HTML defines the Web display format trough tags but XML defines the semantic information through tags.",
Answer: "op4"
},
{Q:"Which of the following statements regarding the utilization of application pools for Web applications is TRUE?",
    A: "The usage of application pools put an excessive amount of strain on the system RAM slowing other services.",
    B: "The usage of application pools put an excessive amount of strain on the CPUs of the multicore servers.",
    C: "The usage of application pools allows developers to decrease availability as well as reliability.",
    D: "The usage of application pools allows for improved security with improved performance of applications on the server.",
    Answer: "op4"
},{
    Q:"Which of the following statements regarding the utilization of usage of an MSI deployment is TRUE?",
A: "MSI deployments are performed via a Web share.",
B: "MSI deployments are performed via a network share.",
C: "MSI deployments are published to both Web shares and a network shares.",
D: "MSI deployments create a Microsoft Installer package with instructions and data required to install the application.",
Answer: "op4"
}];

 const ques=document.querySelector('.heading')
 const o1=document.querySelector('#option1');
 const o2=document.querySelector('#option2');
 const o3=document.querySelector('#option3');
 const o4=document.querySelector('#option4');
const sub=document.querySelector('#sub');
const ans=document.querySelectorAll('.answer')
const show=document.querySelector('#showscore')

let count=0;
let score=0;

const loadques=()=>{
    ques.innerText=quiz[count].Q;
    o1.innerHTML=quiz[count].A;
    o2.innerHTML=quiz[count].B;
    o3.innerHTML=quiz[count].C;
    o4.innerHTML=quiz[count].D;
}

loadques();

checkAns=()=>{
    let answer;
    ans.forEach((currentAns)=>{
        if(currentAns.checked)
        answer=currentAns.id;
    })
    return answer;
}

sub.addEventListener('click',()=>{
    const check=checkAns();
    if(check===quiz[count].Answer)
    score++;
    count++;
    if(count<quiz.length){
        loadques();
    }
    else{
        show.innerHTML=`<hr><h3>Your Score is: ${score} out of ${quiz.length} ✌</h3><br>
        <button id="b2" onclick="location.reload()">Play Again</button>`
    }
})