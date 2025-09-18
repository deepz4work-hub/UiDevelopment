document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", ready)
  : ready();

function ready() {
  let addButtons = document.getElementsByClassName("add_item");
  if (document.getElementById("cartItemsUnit").innerHTML.trim() === "") {
    document.querySelector(".addItem p").style.display = "block";
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
        let cartDetails = ''
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
        // Enable checkout button when an item is added
        document.getElementById("checkoutButton").disabled = false;

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
        if (document.getElementById("cartItemsUnit").innerHTML.trim() === "") {
          document.querySelector(".addItem p").style.display = "block";
          document.getElementById("itemFound").style.display = "none";
          document.getElementById("checkoutButton").disabled = true;
        }
      }
    });
  }
  (function () {
    // Initialize with your EmailJS Public Key
    emailjs.init("CKjHrzMAC6Zziqntf");
  })();



  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let rows = document.querySelectorAll(".cartItems .cart-row");

    // 2. Build cart_details HTML
    let cartDetailsHtml = "";
    let totalAmount = 0;

    rows.forEach((row, index) => {
      let particulars = row.querySelectorAll("li")[1].innerText;
      let price = Number(row.querySelectorAll("li")[2].innerText);

      totalAmount += price;

      cartDetailsHtml += `
    <tr>
      <td style="border:1px solid #ddd; padding:8px;">${index + 1}</td>
      <td style="border:1px solid #ddd; padding:8px;">${particulars}</td>
      <td style="border:1px solid #ddd; padding:8px;">${price}</td>
    </tr>
  `;
    });

    // 3. Create templateParams for EmailJS
    let templateParams = {
      name: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      cart_details: cartDetailsHtml,
      total: totalAmount
    };

    emailjs.send("service_i1v8k5s", "template_0zdbg3i", templateParams)
      .then(function (response) {
        alert("✅ Booking confirmed! A confirmation email has been sent.");
        document.querySelector("#bookingForm p").style.display = "block";
        document.getElementById("bookingForm").reset();
      }, function (error) {
        alert("❌ Failed to send confirmation: " + JSON.stringify(error));
      });
  });

  function sendContactEmail(e) {
    let templateParams = {
      name: document.getElementById("contact_name").value,
      email: document.getElementById("contact_email").value,
      message: document.getElementById("contact_message").value
    };
    debugger

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => alert("✅ Message sent! Check your inbox for confirmation."))
      .catch(err => alert("❌ Failed to send: " + JSON.stringify(err)));

  }
}

