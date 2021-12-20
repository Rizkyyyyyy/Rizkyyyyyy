var ulangi = confirm("Apakah anda mau mengulang?");;
var counter = 0;
do {
 counter++;
 ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)
14
document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");