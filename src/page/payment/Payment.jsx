import React from "react";
import Banner from "../../components/banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import PriceList from "../../components/PriceList/PriceList";
import "./Payment.css";

export default function Payment() {
  const Navigate = useNavigate();
  const [openDraftCOR, setOpenDraftCOR] = React.useState(false);
  const handleOpenDraftCOR = () => {
    setOpenDraftCOR(true);
  };

  const handleCloseDraftCOR = () => {
    setOpenDraftCOR(false);
  };

  return (
    <React.Fragment>
      <Banner title={"Payment"} url={"/booking-cargo"} />

      <div className="Booking__wrapper">
        <div className="mi_page_container">
          <BookingBreadCrumb />
          <div className="Booking__main_container">
            <div className="Input__table">
              <div className="Input__section">
                <h1>AWB 12232833</h1>
                {/* Single Row */}
                <div className="Input__grid">
                  <div className="Input__row ">
                    <div className="Input__column">
                      <p className="Input__label_fs">
                        Agent IATA Reference Number
                      </p>
                      <TextField
                        fullWidth
                        placeholder="Enter your IATA Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Input__section">
                <h1>Shipment Billing</h1>
                {/* Payment Row */}
                <div className="Input__grid">
                  <div className="PaymentForm__container">
                    <article className="Input__row_section">
                      <hgroup className="Input__title_label_space">
                        <h2 className="mi_note">Total Bill Details</h2>
                      </hgroup>
                      <div className="PaymentForm__bill_card">
                        <div className="PaymentForm__bill_card_basic">
                          <div className="PaymentForm__bill_row">
                            <h2 className="mi_small bill_title_fs">
                              Net Amount
                            </h2>
                            <p className="mi_note bill_amount_fs">₹ 2,000</p>
                          </div>
                          <div className="PaymentForm__bill_row">
                            <h2 className="mi_small bill_title_fs">
                              SHC 1 ( Rs 15 * 100 Kg )
                            </h2>
                            <p className="mi_note bill_amount_fs">₹ 1,500</p>
                          </div>
                          <div className="PaymentForm__bill_row">
                            <h2 className="mi_small bill_title_fs">
                              SHC 2 ( Rs 10 * 100 Kg )
                            </h2>
                            <p className="mi_note bill_amount_fs">₹ 1,000</p>
                          </div>
                        </div>
                        <div className="PaymentForm__bill_card_taxes">
                          <div className="PaymentForm__bill_row">
                            <h2 className="mi_small bill_title_fs">
                              Taxes ( GST )
                            </h2>
                            <p className="mi_note bill_amount_fs">₹ 200</p>
                          </div>
                        </div>
                        <div className="PaymentForm__bill_card_total">
                          <div className="PaymentForm__bill_row">
                            <h2 className="mi_small">Total Amount</h2>
                            <h2 className="mi_small">₹ 4,700</h2>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="Input__row_section">
                      <div className="Input__title_label_space">
                        <div className="Label_with_info">
                          <h2 className="mi_miniheading ">
                            Total Bill Details
                          </h2>
                          <div className="final_price_tag">
                            <h2 className="mi_heading">₹ 4,700</h2>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="Input__section">
                <p className="Input__message_fs">
                  Please verify all the above information and proceed with the
                  payment options
                </p>
                <div className="Input__action_list">
                  <button
                    to={"/booking-cargo"}
                    class="mi_btn mi_btn_outline"
                    onClick={() => Navigate("/")}
                  >
                    Cancel
                  </button>
                  <button
                    to={"/booking-cargo"}
                    class="mi_btn mi_btn_secondary"
                    onClick={() => Navigate("/track")}
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PriceList
        keepMounted
        open={openDraftCOR}
        onClose={handleCloseDraftCOR}
      />
    </React.Fragment>
  );
}

function BookingBreadCrumb() {
  return (
    <React.Fragment>
      <div className="BookingBreadCrumb__list">
        <Link to={"/"} className="BookingBreadCrumb__link_fs">
          Home
        </Link>
        <i class="bx bx-chevron-right"></i>
        <p className="BookingBreadCrumb__link_fs">Booking Cargo</p>
        <i class="bx bx-chevron-right"></i>
        <Link to={"/booking-cargo"} className="BookingBreadCrumb__link_fs">
          Shipment Info
        </Link>
        <i class="bx bx-chevron-right"></i>
        <Link
          to={"/booking-cargo"}
          className="BookingBreadCrumb__link_fs active"
        >
          Payment
        </Link>
      </div>
    </React.Fragment>
  );
}
