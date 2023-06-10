import React, {useContext} from 'react'
import Typography from "@mui/material/Typography";
import {CartContext} from "../../../context/CartProvider";
import "./CartTooltip.css"
import {Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const CartTooltip = () => {

    const {cart, getTotalPaymentFromCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
            <Paper className="cartTooltip" elevation={5}>
                <Typography variant="h6" color="text.primary">
                    In your cart:
                </Typography>
                <ol className="cartList">
                    {cart.map(item =>
                        <li key={item.id}>
                            <Typography variant="p" color="text.primary">
                                {item.title}
                            </Typography>
                            <Typography variant="p" color="text.secondary">
                                - {item.count} item/s
                            </Typography>
                        </li>
                    )}
                </ol>
                <Typography variant="h6" gutterBottom color="text.secondary">
                    Total: ${getTotalPaymentFromCart()}
                </Typography>
                <Button className="button_checkout" onClick={()=>navigate(`/cart`)} variant="contained" color="primary" color="success" endIcon={<SendIcon />} disableElevation>Checkout</Button>
            </Paper>
        </>
    )
}
export default CartTooltip
