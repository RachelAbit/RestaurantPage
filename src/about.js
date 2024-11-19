export default function about(){
    const content = document.querySelector('#content');
    const div = document.createElement('div');

    div.innerHTML = `
        <h1 class="aboutTitle"> About </h1>
        <p class="myText">This webpage is just an exercise to implement the webpack bundler,
        how to create package.json and how to install other necessary plugins etc.
        </p>
    `;
   content.appendChild(div);


}