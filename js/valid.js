function func1() {
    var name = frm1.n1.value;
    // if (name=="")
    //     alert("Enter Details");
    var maths = parseInt(frm1.maths.value);
    var english = parseInt(frm1.english.value);
    var computer = parseInt(frm1.computer.value);
    var total = maths + english + computer;
    var percentage = total / 300 * 100;
    document.getElementById("marks").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage;
    var maximum = Math.max(maths, Math.max(computer, english));
    var minimum = Math.min(maths, Math.min(computer, english));

    document.getElementById("max").innerHTML = maximum;
    document.getElementById("min").innerHTML = minimum;


}