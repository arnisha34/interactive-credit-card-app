function App() {
  return (
    <div id='wrapper' className="container-fluid">
      <div id="credit-cards" className="row text-light">
        <div className="leftSide col-md-6">
          <div id="cc-front">
              <div id="cc-front_logo"></div>
              <div id="cc-front_info" className="d-flex flex-column justify-content-center">
                <div id="cc-front_number" className="mb-3">0000 0000 0000 0000</div>
                <div id="cc-front_bottom" className="d-flex justify-content-between">
                  <div id="cc-front_name" className="text-uppercase">Name here</div>
                  <div id="cc-front_exp">00/00</div>
              </div>
            </div>  
          </div>
          <div id="cc-back">
            <div id="cc-back_cvc">000</div>
          </div>
        </div>
        <div id="cc-form" className="rightSide col-md-3 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <label htmlFor="cardHolderName" className="form-label">Cardholder Name</label>
            <input type="text" className="form-control" id="cardHolderName" placeholder="e.g. Jane Appleseed"/>
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000"/>
          </div>
          <div className="row form-group3">
            <div className="col">
              <label htmlFor="expDate" className="form-label">Exp. Date (MM/YY)</label>
              <div className="d-flex gap-2">
              <input type="text" className="form-control" id="expMonth" placeholder="MM"/>
              <input type="text" className="form-control" id="expYear" placeholder="YY"/>
              </div>
            </div>
            <div className="col mb-5">
              <label htmlFor="cvc" className="form-label">CVC</label>
              <input type="text" className="form-control" id="cvc" placeholder="e.g. 123"/>
            </div>
          </div>
          <button id="confirm" className="btn btn-lg" type="button">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default App;
