export default function menu(){
    const content = document.querySelector('#content');

    const div = document.createElement('div');
    div.className = 'menuDiv';

    div.innerHTML = `
        <h1 class="menuTitle">Menu</h1>
        <h2 class="coffeeTitle">Coffee</h2>
        <div class="coffee-list">
            <table class="coffee-data">
                <tr>
                    <th>Drinks</th>
                    <th>Prices</th>
                </tr>
                <tr>
                    <td>Espresso</td>
                    <td>$5</td>
                </tr>
                 <tr>
                    <td>Iced Americano</td>
                    <td>$9</td>
                </tr>
                 <tr>
                    <td>Vanilla Latte</td>
                    <td>$12</td>
                </tr>
                 <tr>
                    <td>Caramel Machiatto</td>
                    <td>$12</td>
                </tr>
                 <tr>
                    <td>Mocha</td>
                    <td>$10</td>
                </tr>
            </table>
        </div>
        <h2 class="foodTitle">Food</h2>
        <div class="food-list">
            <table class="food-data">
                <tr>
                    <th>Food</th>
                    <th>Prices</th>
                </tr>
                <tr>
                    <td>Cake</td>
                    <td>$22</td>
                </tr>
                 <tr>
                    <td>Macaroon</td>
                    <td>$15</td>
                </tr>
                 <tr>
                    <td>Cookies</td>
                    <td>$15</td>
                </tr>
                 <tr>
                    <td>Brownies</td>
                    <td>$16</td>
                </tr>
                 <tr>
                    <td>Bluecheese Cake</td>
                    <td>$22</td>
                </tr>
            </table>
        </div>
    `;

    content.appendChild(div);
}