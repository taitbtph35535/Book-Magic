// Lấy tất cả các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll(".giohang");

// Lặp qua các nút và thêm sự kiện "click"
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Đã thêm vào giỏ hàng");
  });
});


function buyProduct() {
  if (confirm("Bạn có chắc chắn muốn mua không?")) {
    alert("Đã mua hàng!");
    // Xử lý khi người dùng ấn Có
  } else {
    // Xử lý khi người dùng ấn Không
  }
}

// Lấy tất cả các button có class là qty-plus hoặc qty-minus
var qtyButtons = document.querySelectorAll(".qty-button");

// Duyệt qua từng button và thêm lắng nghe sự kiện click
qtyButtons.forEach(function (button) {
button.addEventListener("click", function () {
// Lấy input hiển thị số lượng mua hàng
var input = this.parentElement.querySelector(".input-qty");

// Lấy giá trị số lượng hiện tại
var currentValue = parseInt(input.value);

// Nếu button là qty-plus thì tăng giá trị số lượng lên 1
if (this.classList.contains("qty-plus")) {
  input.value = currentValue + 1;
}

// Nếu button là qty-minus thì giảm giá trị số lượng đi 1 (nếu giá trị hiện tại > 1)
if (this.classList.contains("qty-minus")) {
  input.value = currentValue > 1 ? currentValue - 1 : 1;
}
});
});

// Lấy tất cả các button có class là buy-button
var buyButtons = document.querySelectorAll(".buy-button");

// Duyệt qua từng button và thêm lắng nghe sự kiện click
buyButtons.forEach(function (button) {
button.addEventListener("click", function () {
// Lấy giá trị số lượng mua hàng từ input
var quantity = this.parentElement.querySelector(".input-qty").value;

// Hiện alert để xác nhận mua hàng
var confirmation = confirm("Bạn có chắc chắn muốn mua " + quantity + " sản phẩm này không?");

// Nếu người dùng xác nhận mua hàng, hiển thị thông báo
if (confirmation) {
  alert("Bạn đã thêm " + quantity + " sản phẩm vào giỏ hàng!");
}
});
});

let rating = 0;

function rate(value) {
  rating = value;

  // Set active class on selected hearts
  for (let i = 1; i <= 5; i++) {
    const heart = document.querySelector(`.heart:nth-child(${i})`);
    if (i <= value) {
      heart.classList.add("active");
    } else {
      heart.classList.remove("active");
    }
  }

  // Show feedback message
  const feedback = document.querySelector(".feedback");
  feedback.innerHTML = `Bạn đã chọn ${value} trái tim!`;
}




