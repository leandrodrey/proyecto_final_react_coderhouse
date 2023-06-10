import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form from "../components/Form/Form";
import CartItemsTable from "../CartItemsTable/CartItemsTable";
import Container from "@mui/material/Container";

const Cart = () => {

    return (
        <Box>
            <Container disableGutters maxWidth="md">
                <Typography variant="h3" gutterBottom color="text.secondary">
                    Checkout
                </Typography>
                <CartItemsTable />
                <Form />
            </Container>
        </Box>
    )
}
export default Cart;
