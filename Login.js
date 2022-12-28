function login() {
    if ($("#username").val() == "sanchia" && $("#password").val() == "sanchia29") {
        window.open("Dashboard_2100016005.html", "_self");

    } else {
        alert("Tidak Boleh Dikosongkan, Silahkan Ulang Kembali!");
    }
}
