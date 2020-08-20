import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    <div className="center">
        <h1 className="menuHead">Pizza 42</h1>
        <Image src="https://images.bizbuysell.com/shared/listings/172/1727024/d227c519-ffe6-448b-8acb-46d7d9f68ee0-W768.jpg" fluid />
        <Button href="/order" size="lg" block className= "homebtn" variant="primary">See Menu & Order</Button>

    </div>
  );
}

export default Home;
