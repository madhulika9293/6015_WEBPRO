function eval() {
    var nm = document.getElementById("name").value;
    var ky = document.getElementById("key").value;
    var cmnt = document.getElementById("txtComment").value;

    var toInsert = document.getElementById("outputDiv");

    if (nm !== ""  && cmnt !== "") {
        if (ky === "yes") {
            document.getElementById("keyError").innerText="";
            document.getElementById("nullError1").innerText="";
            document.getElementById("nullError2").innerText="";

            var temp1 = document.createElement('p');
            temp1.className="outName";
            temp1.innerText = nm;

            var temp2 = document.createElement('span');
            temp2.className="outComment";
            temp2.innerText=cmnt;
            
            toInsert.insertBefore(temp1,toInsert.childNodes[0]);
            toInsert.insertBefore(temp2,toInsert.childNodes[0]);           

            var form = document.getElementById("myForm");
            form.reset();
        } else {
            document.getElementById("keyError").innerText="Wrong Key!";
        }
    } else if (nm == "") {
        document.getElementById("nullError1").innerText="Name can't be empty!";
    } else if (cmnt == "") {
        document.getElementById("nullError2").innerText="Comment can't be empty!";
    }
}