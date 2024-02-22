const allAddCart = document.getElementsByClassName('add-Btn');
for (const cart of allAddCart) {
    cart.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        const selectedPlayer = document.getElementById('selectedPlayer');

        const cartCount = getConvertValue('carts');
        if (cartCount+1 > 6) {
            alert('Selected player is limited');
            return;
        }


        const bugdet = getConvertValue('bugdets');
        document.getElementById('bugdets').innerText = bugdet- parseInt(price)
        
        
        const carts = getConvertValue('carts');
        document.getElementById('carts').innerText = carts + 1;
        
        const countLeft = getConvertValue('left');
        document.getElementById('left').innerText = countLeft - 1;



        const div = document.createElement('div');
        div.classList.add('flex')
        div.classList.add('justify-between')
        // div.classList.add('selectedPlayer')
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedPlayer.appendChild(div)
        updateTotalValue(price)
        updateGrandTotal()
        
    })
}

function updateGrandTotal(status) {
    const updatTotalCost = getConvertValue('totalCost');
    if (status==undefined) {
        const updatTotalCost = getConvertValue('totalCost').innerText = updateTotalValue
    } else {
        const couponCode = document.getElementById('coupon-code').value; 
        if (couponCode == 'love420') {
            const discount = updatTotalCost * .2;
            document.getElementById('grand-total').innerText = updatTotalCost - discount;
        } else {
            alert("Please enter valid coupon code.")
        }
    }
}
function updateTotalValue(price) {
    const updatTotalCost = getConvertValue('totalCost');
    // const convertedTotal = parseInt(updatTotalCost)
    const convertedPrice = parseInt(price)
    const sum = convertedPrice + updatTotalCost;
    document.getElementById('totalCost').innerText = sum;
}
function getConvertValue(id) {
    const bugdet = document.getElementById(id).innerText; 
    const convertValue = parseInt(bugdet);
    return convertValue;
}

const result = getConvertValue('price')

// console.log(result);
// console.log(result1);