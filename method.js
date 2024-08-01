const biodata = {
    nama: 'toni',
    email: 'risano@gamil.com',
    age: 17,
    showName: function(friend){
        console.log(`hi.. ${friend},  nama saya ${this.nama}`);
    },
    penjumlahan: (val1, val2)=>{
        const result = val1 + val2
        return result
    }
}

biodata.showName('budi')
const hasil = biodata.penjumlahan(10, 15)
console.log(hasil);