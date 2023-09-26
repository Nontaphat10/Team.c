const choice1 = document.getElementById('h_menu1');
const choice2 = document.getElementById('h_menu2');
const choice3 = document.getElementById('h_menu3');
const cl1 = document.getElementById('choice-left1');
const cl2 = document.getElementById('choice-left2');
const cl3 = document.getElementById('choice-left3');
const show_data = document.getElementById('choice-data');


function hover1(){
    choice1.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice1.style.color = "white";
}
function m_out1(){
    choice1.style.backgroundColor = "";
    choice1.style.color = "";

}
function hover2(){
    choice2.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice2.style.color = "white";
}
function m_out2(){
    choice2.style.backgroundColor = "";
    choice2.style.color = "";

}
function hover3(){
    choice3.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice3.style.color = "white";
}
function m_out3(){
    choice3.style.backgroundColor = "";
    choice3.style.color = "";

}
function select1(){
    cl1.style.backgroundColor = "rgba(120, 40, 253, 1)";
    cl1.style.color = "white";
    cl1.style.borderRadius = "0 0 20px 0 "
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<ul><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรบริหารธุรกิจบัณฑิต (บธ.บ.) Bachelor of Digital Business (B.B.A.)</li><li class='ms-4'>สาขาวิชาธุรกิจดิจิทัล (Digital Business)</li><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรวิศวกรรมศาสตรบัณฑิต (วศ.บ.) Bachelor of Engineering (B.Eng.)</li><li class='ms-4'>สาขาวิชาวิศวกรรมคอมพิวเตอร์ (Computer Engineering)</li><li class='ms-4'>สาขาวิชาวิศวกรรมซอฟต์แวร์ (Software Engineering)</li><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) Bachelor of Science (B.S.)</li><li class='ms-4'>สาขาวิชาวิทยาการคอมพิวเตอร์ (Computer Science)</li><li class='ms-4'>สาขาวิชาวิทยาการข้อมูลและการประยุกต์(Data Science and Application)</li><li class='ms-4'>สาขาวิชาเทคโนโลยีสารสนเทศ (Information Technology)</li><li class='ms-4'>สาขาวิชาภูมิสารสนเทศศาสตร์ (Geographic Information Science)</li><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรศิลปกรรมศาสตรบัณฑิต (ศศ.บ.) Bachelor of Fine and Applied Arts (B.F.A.)</li><li class='ms-4'>สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย (Computer Graphics and Multimedia)</li><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรวิทยาศาสตรบัณฑิต และหลักสูตรศิลปศาสตรบัณฑิต (วท.บ. และ ศศ.บ.) Bachelor of Science and Bachelor of Art (B.Sc. and B.A.)</li><li class='ms-4'>สาขาวิชาเทคโนโลยีสารสนเทศและสาขาวิชาภาษาอังกฤษ (Information Technology and English)</li></ul>"
}
function select2(){
    cl2.style.backgroundColor = "rgba(120, 40, 253, 1)";
    cl2.style.color = "white";
    cl2.style.borderRadius = "0 0 20px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<ul><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรวิทยาศาสตรมหาบัณฑิต ( Master of Science )</li><li class='ms-4'>สาขาวิชาภูมิสารสนเทศประยุกต์ (Applied Geoinformatics)</li><li class='ms-4'>สาขาวิชาการจัดการเทคโนโลยีและข้อมูลดิจิทัล (Technology and Digital Data Management)</li><li class='ms-4'>สาขาวิชาวิศวกรรมคอมพิวเตอร์ (Master of Engineering)</li></ul>"
}
function select3(){
    cl3.style.backgroundColor = "rgba(120, 40, 253, 1)";
    cl3.style.color = "white";
    cl3.style.borderRadius = "0 0 20px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    show_data.innerHTML = "<ul><li class='mt-3' style='color: rgba(99, 52, 227, 1);'>หลักสูตรปรัชญาดุษฎีบัณฑิต ( Doctor of Philosophy )</li><li class='ms-4'>สาขาวิชาภูมิสารสนเทศประยุกต์  (Applied Geoinformatics)</li></ul>"
}

function totop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}