
let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    updateCart();
    alert(productName + " cart mein add ho gaya!");
}

function updateCart() {
    document.getElementById("cartCount").innerText =
        cartItems.length;
}

function showCart() {
    const cartBox = document.getElementById("cartlist");

    cartBox.innerHTML = "<h3>Aap ka Cart</h3>";

    if (cartItems.length === 0) {
        cartBox.innerHTML += "<p>Aap ka Cart khali hai.</p>";
        return;
    }

    cartItems.forEach(function(item, index) {
        const row = document.createElement("p");
        row.innerText = item + " ";

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";

        removeButton.onclick = function() {
            removeFromCart(index);
        };

        row.appendChild(removeButton);
        cartBox.appendChild(row);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
    showCart();
}


function order(productName) {
    // Yahan apna WhatsApp number likho
    const phoneNumber = "923474236039";

    const message =
        "Assalam o Alaikum! Mujhe Village Tajir se " +
        productName +
        " order karna hai. Meherbani karke price aur delivery details bata dein.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
