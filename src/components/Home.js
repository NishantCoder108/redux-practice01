import React from "react";

const Home = (props) => {
  // console.log(props);
  return (
    <>
      <h3> I am In Home file {props.data.length} </h3>
      {/* <div  style={{ position: 'relative', top: '43px', left: '25px', font-weight: 'bold', color: 'white', background: 'black',font-size: '27px', border-radius: '68px', border: '12px solid #000000' }} >{props.data.length}</div> */}

      <div>
        <img
          style={{ width: "90px", margin: "6px" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RHUtMkj1vOp1FP2jJqv3_gHaHC%26pid%3DApi&f=1 "
        />
      </div>
      <button
        style={{ margin: "6px" }}
        onClick={() => props.addToCartHandler({ name: "nishant", age: 43 })}
      >
        Add to Cart
      </button>
      <br />
      <button
        style={{ margin: "6px" }}
        onClick={() => props.removeToCartHandler({})}
      >
        Remove to Cart
      </button>
    </>
  );
};

export default Home;
