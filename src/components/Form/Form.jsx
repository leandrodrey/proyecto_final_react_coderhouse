import React, {useContext, useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import {InputAdornment, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {LoaderContext} from "../../context/LoaderProvider";
import Loader from "../Loader/Loader";
import {ProductContext} from "../../context/ProductProvider";
import {CartContext} from "../../context/CartProvider";
import './Form.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";

const Form = () => {

    const {handleSubmit} = useContext(ProductContext);
    const {cart, dispatch} = useContext(CartContext);
    const {isLoading, stopLoader} = useContext(LoaderContext);
    const [order, setOrder] = useState(null);

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            lastName: '',
            phone: ''
        },
        total: cart.totalPayment,
        items: cart
    });

    useEffect(() => {
        stopLoader();
    }, []);

    const removeAllItemsFromCart = () => dispatch({
        type: 'REMOVE_ALL_ITEMS_FROM_CART'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setOrder(handleSubmit(form));
        removeAllItemsFromCart();
    }

    if (isLoading) {
        return (
            <Loader showLoader={isLoading}/>
        )
    }

    if (order) {
        return (
            <div>
                <h1>Thank you for your purchase!</h1>
                <p>If you have any questions or need further assistance, please don't hesitate to reach out.</p>
            </div>
        )
    }

    return (
        <>
            <Typography variant="h5" gutterBottom color="text.secondary">
                Your information:
            </Typography>

            <form className="order_form" onSubmit={handleSubmitForm} action="">
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Required"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AlternateEmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Required"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneAndroidIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Required"
                    type="text"
                    name="name"
                    placeholder="First Name"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    id="outlined-required"
                    label="Required"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button disabled={cart.length === 0} type="submit" variant="contained" endIcon={<SendIcon/>}>Complete Order</Button>
            </form>
        </>
    )
}
export default Form;
