import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81pYhTz69JxVxE5xenU8-QqKhyS8DsBH-cQ&usqp=CAU) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Alumni</Heading>
            <SubHeading>connect with us</SubHeading>
        </Image>
    )
}

export default Banner;