import React from 'react';
import { Button, Navbar, Alignment } from "@blueprintjs/core";

function Header() {
  return (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
    </Navbar>
  );
}

export default Header;
