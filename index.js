let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let sheild = document.createElement('img')
sheild.src = 'assets/sheild.png'
sheild.position = 'fixed'
sheild.left = '165px'
sheild.bottom = '185px'
document.body.append(sheild)

sheild.addEventListener('click', function(){
    sheild.remove()
})

let staff = document.createElement('img')
staff.src = 'assets/staff.png'
staff.position = 'fixed'
staff.left = '600px'
staff.bottom = '100px'
document.body.append(staff)

staff.addEventListener('click', function(){
    staff.remove()
})

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.position = 'fixed'
tree.left = '200px'
tree.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.position = 'fixed'
pillar.left = '350px'
pillar.bottom = '100px'
document.body.append(pillar)

let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.position = 'fixed'
crate.left = '150px'
crate.bottom = '200px'
document.body.append(crate)

let well = document.createElement('img')
well.src = 'assets/well.png'
well.position = 'fixed'
well.left = '500px'
well.bottom = '425px'
document.body.append(well)

//this didn't help
//function addImage(src) {
    //var img = document.createElement("img");
    //img.src = src;
    //document.body.appendChild(img);
  //}
  
//addImage("sky.png");
//addImage("grass.png");
  
//addImage("sky.png");
//addImage("grass.png");

// I thought this would help :(
//let sky = document.createElement('div')
//sky.style.backgroundImage = 'url(assets/sky.png)'
//sky.style.position = 'fixed'
//sky.style.top = '0'
//sky.style.left = '0'
//sky.style.width = '100%'
//sky.style.height = '50%'
//document.body.append(sky)

//let grass = document.createElement('div')
//grass.style.backgroundImage = 'url(assets/grass.png)'
//grass.style.position = 'fixed'
//grass.style.bottom = '0'
//grass.style.left = '0'
//grass.style.width = '100%'
//grass.style.height = '50%'
//document.body.append(grass)




