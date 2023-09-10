
import { Typography,AppBar, Toolbar, styled, colors } from '@mui/material'; 
import { Link } from 'react-router-dom';

//import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #skyblue;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: right;

    & > a {
        padding: 20px;
        color: #000;
        font:Roboto;
        text-decoration: none;
    }
`

const Header = () => {

   // const navigate = useNavigate();

   // const logout = async () => navigate('/account');
        
    return (
        <Component>
             
            <Container>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Welcome Alumni's
          </Typography>
                <Link to='/home'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;