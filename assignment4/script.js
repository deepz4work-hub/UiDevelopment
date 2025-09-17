document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", ready)
    : ready();

function ready() {
    let addButtons = document.getElementsByClassName("add_item");
    if (document.getElementById("cartItemsUnit").innerHTML.trim() === "")
       { document.querySelector(".addItem p").style.display = "block";
    document.getElementById("itemFound").style.display = "none";
       }
    for (let addButton of addButtons) {
        addButton.addEventListener("click", (event) => {
            event.preventDefault();

            let button = event.currentTarget;
            let icon = button.querySelector("i");
            let id = button.getAttribute("data");
            let text = button.querySelector("span");

            if (text.innerText.trim() === "Add Item") {
                // Change button to "Remove"
                button.classList.add("remove_item");
                button.classList.remove("add_item");
                icon.setAttribute("class", "fa-regular fa-circle-xmark");
                text.innerText = "Remove Item";

                // Count existing rows
                let cartNo = document.querySelectorAll(".cartItems .cart-row").length + 1;

                // Create new row
                let newUl = document.createElement("ul");
                newUl.classList.add("cart-row");
                newUl.setAttribute("id", id);

                newUl.innerHTML = `
          <li>${cartNo}</li>
          <li>${document.getElementById(id).querySelector(".item").childNodes[0].textContent.trim()}</li>
          <li class="amt">${document.getElementById(id).querySelector(".amt").innerText}</li>
        `;
                totalAmt = 0;
                // Insert new row between header & footer
                document.querySelector("#cartItemsUnit").appendChild(newUl);
                document.querySelectorAll(".cart-row").forEach((item, index) => {
                    item.querySelector("li").innerText = index + 1;
                    totalAmt += Number(item.querySelector(".amt").innerText.trim());
                });
                document.getElementById("totalPrice").innerText = totalAmt;
 document.querySelector(".addItem p").style.display = "none";
    document.getElementById("itemFound").style.display = "block";
       
            } else {
                // Change button back to "Add"
                icon.setAttribute("class", "fa-solid fa-circle-plus");
                button.classList.remove("remove_item");
                button.classList.add("add_item");
                text.innerText = "Add Item";

                // Remove row with matching id
                let row = document.querySelector(`.cart-row[id="${id}"]`);
                if (row) row.remove();
                totalAmt = 0;
                // Recalculate serial numbers

                document.querySelectorAll(".cart-row").forEach((item, index) => {
                    item.querySelector("li").innerText = index + 1;

                    totalAmt += Number(item.querySelector(".amt").innerText.trim());
                });
                document.getElementById("totalPrice").innerText = totalAmt;
                if (document.getElementById("cartItemsUnit").innerHTML.trim() === "")
       { document.querySelector(".addItem p").style.display = "block";
    document.getElementById("itemFound").style.display = "none";
       }
            }
        });
    }
     (function(){
    // Initialize with your EmailJS Public Key
    emailjs.init("CKjHrzMAC6Zziqntf");
  })();

  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let templateParams = {
      name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    };
    emailjs.send("service_i1v8k5s", "template_q6cti3a", templateParams)
      .then(function(response) {
        alert("✅ Booking confirmed! Confirmation email sent.");
        document.querySelector("#bookingForm p").style.display="block";
        document.getElementById("bookingForm").reset();
      }, function(error) {
        alert("❌ Email failed: " + JSON.stringify(error));
      });
  });
  
      function sendContactEmail(e) {
        debugger
        e.preventDefault();
        var params = {
          name: document.getElementById('contact_name').value,
          email: document.getElementById('contact_email').value,
          message: document.getElementById('contact_message').value
        };
        emailjs.send("service_i1v8k5s", "template_q6cti3a", params)
          .then(function(response) {
            alert("✅ Message sent! We'll get back to you soon.");
            document.getElementById('contactForm').reset();
          }, function(error) {
            alert("❌ Failed to send: " + JSON.stringify(error));
          });
      }
}

