import Nav from "react-bootstrap/Nav";
import "../App.css";

function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="MainNav"
    >
      <Nav.Item className="NavItem">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className="NavItem">
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item className="NavItem">
        <Nav.Link eventKey="link-2">Work Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item className="NavItem">
        <Nav.Link eventKey="link-3">Volunteer Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item className="NavItem">
        <Nav.Link eventKey="link-4">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BasicExample;
