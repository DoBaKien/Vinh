import React from "react";
import "../../styles/ConfirmOrder.scss";
const ConfirmOrder = ({
  cart,

  setPopupVisible,
  user,
  handleConfirm,
  total,
}) => {
  return (
    // ===================
    <div class="containerFormCheckOut">
      <div class="cardFormCheckOut cartFormCheckOut">
        <div class="titleFormCheckOut">
          <label>XÁC NHẬN ĐƠN HÀNG</label>
          <button
            className="closeBtn"
            onClick={() => {
              setPopupVisible(false);
            }}
          >
            X
          </button>
        </div>
        <div class="stepsFormCheckOut">
          <div class="stepFormCheckOut">
            <div>
              <span className="spanConFirmOrder">Tên khách hàng</span>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div>
              <span className="spanConFirmOrder">Địa chỉ giao hàng</span>
              <p>{user.address}</p>
            </div>
            <div>
              <span className="spanConFirmOrder">Số điện thoại nhận hàng</span>
              <p>{user.phone}</p>
            </div>

            <div>
              <span className="spanConFirmOrder">Phương thức thanh toán</span>
              <p>Thanh toán khi nhận hàng</p>
            </div>
            {/* <hr /> */}

            <span className="spanConFirmOrder">Chi tiết đơn hàng</span>
            <div class="item">
              {cart.map((item) => (
                <div key={item.product.id}>
                  <p>
                    <strong style={{ marginRight: "3em" }}>
                      {item.product.productName}
                    </strong>
                    Số lượng: <strong> {item.quantity}</strong>
                  </p>{" "}
                </div>
              ))}
            </div>

            {/* <hr /> */}
            <div class="paymentsFormCheckOut">
              {/* <span className="spanConFirmOrder">Số tiền Cần thanh toán</span> */}
              <div class="details">
                {/* <span className="spanConFirmOrder">Subtotal:</span> */}
                {/* <span className="spanConFirmOrder">{total} vnd</span> */}
                {/* <span className="spanConFirmOrder">Shipping:</span>
                <span className="spanConFirmOrder">$10.00</span>
                <span className="spanConFirmOrder">Tax:</span>
                <span className="spanConFirmOrder">$30.40</span> */}
              </div>
            </div>
          </div>
        </div>
        <div class="cardFormCheckOut checkout">
          <div class="footer">
            <label class="titleFormCheckOut">
              Tổng số tiền cần thanh toán : {total.toFixed(2)} vnd
            </label>

            <button
              class="checkout-btn"
              onClick={() => {
                handleConfirm();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
