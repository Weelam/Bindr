import React, { useState, useEffect } from "react";
import "./styleHome.css";
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className="homePage-root">
      <div className="homePage-leftSide">
        <h1>Find Your Ideal Study Partner!</h1>
        <p> Yeah this is the bio I don't know what to put here right now so I'm just typing random stuff to take up space. </p>
        <Button size="large" className="homePage-button" variant="outlined"> Get started </Button>
      </div>
      <div className="homePage-rightSide">
        <div className="homePage-imageContainer">
          <img className="homePage-image" src="https://cdn.discordapp.com/attachments/868912885852700722/906023960964137011/502-5020971_studying-cat-png-transparent-png-removebg-preview.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
