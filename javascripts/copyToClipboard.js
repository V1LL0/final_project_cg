function copyLC7() {
    var str = document.getElementById("LC7_text").value;
    var LC7_text = $('#LC7_text').val(str).select();
    console.log(LC7_text);
    document.execCommand('copy');
};

//document.getElementById("copyLC7").onclick = this.copyLC7;

function copyLC11() {
    var str = document.getElementById("LC11_text").value;
    var LC11_text = $('#LC11_text').val(str).select();
    document.execCommand('copy');
};

//document.getElementById("copyLC11").onclick = this.copyLC11;

function copyLC17() {
    var str = document.getElementById("LC17_text").value;
    var LC17_text = $('#LC17_text').val(str).select();
    document.execCommand('copy');
};

//document.getElementById("copyLC17").onclick = this.copyLC17;

function copyVoitureMinimum() {
    var str = document.getElementById("VoitureMinimum_text").value;
    var VoitureMinimum_text = $('#VoitureMinimum_text').val(str).select();
    document.execCommand('copy');
};

//document.getElementById("copyVoitureMinimum").onclick = this.copyVoitureMinimum;

function copyAllInAHouse() {
    var str = document.getElementById("AllInAHouse_text").value;
    var AllInAHouse_text = $('#AllInAHouse_text').val(str).select();
    document.execCommand('copy');
};

//document.getElementById("copyAllInAHouse").onclick = this.copyAllInAHouse;
