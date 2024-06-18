
let items = [
    ['001', 'tas sekolah', 60000, 'casual look bisa di gunakan untuk sekolah', 'tasbunga.jpeg'],
    ['002', 'tas beruang ', 300000, 'cute look untuk di bawak jalan bersama kawan', 'tasberuang.jpeg'],
    ['003', 'tas roti', 50000, 'casual look bisa di gunakan untuk keperluan apapun', 'tasroti.jpeg'],
    ['004', 'tas keju', 30000, 'cute look untuk everyday look', 'taskeju.jpeg']
]
let card = document.getElementById("wrap")
let list = document.getElementById("listBarang")
let i = 0
let qty = document.getElementById("qty").innerHTML = "(" + i + ")"

// memunculkan item
items.forEach(function(item){
    let cardEl = '<div class="card mx-1" style="width: 18rem;" id="card"><img src=img/'+ item[4] +' class="card-img-top" height="300px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">'+ item[1] +'</h5><p class="card-text" id="itemDesc">'+ item[3] +'</p><p class="card-text">'+ item[2] +'</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>'
    list.innerHTML += cardEl
})
// function menambah card
function add(){
    i++
    document.getElementById("qty").innerHTML = "(" + i + ")"
}

// FUNCTION MENCARI ITEM
document.getElementById("formItem").addEventListener('submit', function(e){
    e.preventDefault()

   let keyword = document.getElementById("keyword").value.toLowerCase()
   let filter = items.filter(function(item){
    return item[1].toLowerCase().includes(keyword)
   })
    list.innerHTML = ' '

    filter.forEach(function(item){
        let cardEl = '<div class="card mx-1" style="width: 18rem;" id="card"><img src=img/'+ item[4] +' class="card-img-top" height="300px" width="200px" alt="..."><div class="card-body"><h5 class="card-title" id="itemName">'+ item[1] +'</h5><p class="card-text" id="itemDesc">'+ item[3] +'</p><p class="card-text">'+ item[2] +'</p><a href="#" class="btn btn-primary" id="addCart" onclick="add()">add to card</a></div></div>'
        list.innerHTML += cardEl
    })

})