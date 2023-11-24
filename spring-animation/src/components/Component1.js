import React from "react";
import { Spring } from "react-spring";


export default function Component1() {
  return (
    <Spring 
        from={{ opacity : 0, marginTop: -500 }}
        to={{ opacity : 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              modi quod ullam eaque eius quasi. Iure dignissimos neque sapiente,
              ipsum totam quod nulla necessitatibus perferendis facere, porro
              cumque illo placeat.
            </p>
            <Spring
                from={{ number: 0 }}
                to={{ number: 10 }}
                config={{ duration: 10000 }}
            >
                {props => (
                    <div style={props}>
                        <h1 style={counter}>
                            {props.number.toFixed()}
                        </h1>
                    </div>
                )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}


const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
};