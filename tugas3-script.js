var nama = prompt("Inputkan Nama")
var gender = prompt("Inputkan gender < p / l >")
var sapaan = ""

if (gender == 'p' || gender == 'P'){
    sapaan = "Mrs."
    alert("Selamat Datang, "+sapaan+" "+nama)
} else if (gender == 'l' || gender == 'L'){
    sapaan = "Mr."
    alert("Selamat Datang, "+sapaan+" "+nama)
}

order = prompt("Inputkan pesanan minuman anda")

if (order == "jus"){
    alert("Mohon maaf, jus tidak tersedia.")
} else {
    alert(`Siap ${sapaan} ${nama}, satu ${order} segera datang!`)
}

