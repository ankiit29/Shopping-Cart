// import React, { useContext } from "react";
// import { Form, Container, Navbar, Nav, Dropdown, Badge, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { Cart } from "../context/Context";
// import { AiFillDelete } from "react-icons/ai";
// function Header() {
//   const {
//     state: { cart },
//      dispatch , productDispatch,
//   } = useContext(Cart);
//   return (
//     <div className="header">
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand className="link">
//             <Link to="/">Shopping Cart</Link>
//           </Navbar.Brand>
//           <Navbar.Text className="search">
//             <Form.Control
//               className="m-auto"
//               style={{ width: 500 }}
//               type="text"
//               placeholder="Search any product....."
//               onChange={(e)=>productDispatch({
//                 type:"FILTER_BY_SEARCH",
//                 payload:e.target.value.toLowerCase()
//               })}
//             />
//           </Navbar.Text>
//         </Container>
//         <Nav>
//           <Dropdown>
//             <Dropdown.Toggle variant="primary">
//               <FaShoppingCart style={{ fontSize: "25px" }} />
//               <Badge>{cart.length}</Badge>
//             </Dropdown.Toggle>

//             <Dropdown.Menu
//               className="custom-dropdown-menu"
//               style={{ minWidth: 370 }}
//             >
//               {cart.length > 0 ? (
//                 <>
//                   {cart.map((prod) => (
//                     <span className="cartitem" key={prod.id}>
//                       <img
//                         src={prod.image}
//                         className="cartItemImg"
//                         alt={prod.name}
//                       />
//                       <div className="cartItemDetail">
//                         <span>{prod.name}</span>
//                         <span>₹ {prod.price.split(".")[0]}</span>
//                       </div>
//                       <AiFillDelete
//                         fontSize="20px"
//                         style={{ cursor: "pointer" }}
//                         onClick={() =>
//                           dispatch({
//                             type: "REMOVE_FROM_CART",
//                             payload: prod,
//                           })
//                         }
//                       />
//                     </span>
//                   ))}
//                   <Link to="/cart">
//                     <Button style={{ width: "95%", margin: "0 10px" }}>
//                       Go To Cart
//                     </Button>
//                   </Link>
//                 </>
//               ) : (
//                 <span style={{ padding: 10 }}>cart is empty</span>
//               )}
//             </Dropdown.Menu>
//           </Dropdown>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;
import React, { useContext, useState } from "react";
import { Form, Container, Navbar, Nav, Dropdown, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = useContext(Cart);

  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="link">
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <Form.Control
              className="m-auto"
              style={{ width: 500 }}
              type="text"
              placeholder="Search any product....."
              onChange={(e) =>
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value.toLowerCase(),
                })
              }
            />
          </Navbar.Text>
        </Container>
        <Nav>
          <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart style={{ fontSize: "25px" }} />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="custom-dropdown-menu"
              style={{ minWidth: 370 }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button
                      style={{ width: "95%", margin: "0 10px" }}
                      onClick={closeDropdown} /* Close the dropdown */
                    >
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;

