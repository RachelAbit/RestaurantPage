// home.js
export default function home(){
    const content  = document.querySelector('#content');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const small = document.createElement('small')

    img.className = 'myImage';
    img.src = '/src/images/Coffe.jpg';

    h1.className = 'tagline';
    h1.innerText = 'Eat.Drink.Love';

    p.style.textAlign = 'center';
    p.style.fontSize = '.8rem';
    p.style.fontFamily = 'Arial';
    p.style.marginTop = '20px';
    p.innerHTML = `Our products are made from high quality ingredients. <br /> We will ensure that it has so much health benefits. Dont be shy, Order now`;

    small.innerText = 'Photo by Afta Putta Gunawan from Pexels: https://www.pexels.com/photo/assorted-decors-with-brown-rack-inside-store-683039/';
    small.style.marginLeft = '20%';
    small.style.color = 'gray';


    
   content.append(img);
   content.append(h1);
   content.append(p);
   content.append(small);
}



