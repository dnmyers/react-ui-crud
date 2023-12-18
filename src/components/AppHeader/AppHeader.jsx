import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color='dark' dark expand='md' className='fixed-top w-100'>
            <NavbarBrand href='/'>
                <img
                    src='https://cdn.rd.gt/assets/images/global/redgate-logo--white.svg?v=1'
                    width='128'
                    className='d-inline-block align-top'
                    alt=''
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='/'>Hello</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            World
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem href='/'>For U</DropdownItem>
                            <DropdownItem>For Us</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default AppHeader;
