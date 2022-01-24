import StripeCheckout from "react-stripe-checkout";
import Logo from "../Assets/img/Logo.png";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { Navigate } from "react-router-dom";

const KEY =
  "pk_test_51KLFP9GiIRj5NEd6APdQJQpgCUFNOEUl1azY7SSHXtIqNTskLjthCVn3rzTFWEeiD4ItAKA7KTf2pOob6qfHnpBu00Dn6N4vLv";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = Navigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (error) {
        console.log(Error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Procesando el pago, Porfavoy espere un momento...</span>
      ) : (
        <StripeCheckout
          name="AP Tienda Virtual"
          image={Logo}
          billingAddress
          shippingAddress
          description="Pagar $100.00"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: "120",
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pagar Ahora
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
