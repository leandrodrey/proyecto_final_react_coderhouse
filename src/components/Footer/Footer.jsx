import React from 'react'
import './Footer.css'
import Container from "@mui/material/Container";
import {Paper, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Footer = ({menuItems}) => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Container className="footer_container" disableGutters={true} maxWidth={false}>
                <Paper className="footer_content" elevation={5}>
                    <div className="footer_content__text">Copyright &copy; 2023 - Overlord Store</div>

                    <Stack className="footer_content__menu"
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        {menuItems.map(({name, path, icon}) => (
                            <React.Fragment key={name}>
                                <Button
                                    startIcon={icon}
                                    onClick={() => {navigate(path)}}
                                    className="footer_content__menu_button"
                                    variant="outlined">
                                    {name}
                                </Button>
                            </React.Fragment>
                        ))}
                    </Stack>
                </Paper>
            </Container>
        </React.Fragment>
    )
}
export default Footer
