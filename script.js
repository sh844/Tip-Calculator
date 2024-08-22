
// SELF WRITTEN

let c = document.getElementsByTagName("button")[0]
let z = document.getElementsByTagName("button")[1]
let bill = document.getElementsByTagName("input")[0] //--->Bill amount
let noofperson = document.getElementsByTagName("input")[1] //---> no of person
let j = document.getElementsByTagName("label")[2] //----->label tag for tip
let d = document.getElementsByTagName("input")[2] //---->tip
let k = document.getElementsByTagName("label")[3] //----->label tag for per person cost
let i = document.getElementsByTagName("input")[3] //----->per person cost


let f = ''
let s = ''
let g = 0
let h = 0
let m = 0
let l = 0
let x = function(e) {
}
let y = function(e) {
}
bill.addEventListener('keypress', x)

noofperson.addEventListener('keypress', y)

c.onclick = function(e) {
  e.preventDefault();
  m = bill.value //---> bill
  l = noofperson.value  //--->no of person
  if (l > 0 && m > 0) {
    d.removeAttribute("hidden")
    j.removeAttribute("hidden")
    i.removeAttribute("hidden")
    k.removeAttribute("hidden")
    let tip = m * 0.1
    h = tip / l
    d.value = tip                 // -----> suggested by AI
    i.value = h

  }
  else if (l < 0 || m < 0) {
    alert('Enter value in positive')
  }
  else {
    alert('Enter some value')
  }

}

z.onclick = function(e) {
  bill.value = '';
  noofperson.value = '';
}


