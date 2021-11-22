import React from 'react';
import Styled from 'styled-components/native';

const Scroll = Styled.ScrollView`
    flex: 1;
    height: 300%;
`;
const Container = Styled.View`
    display: flex;
    width: 100%;
    height: 500px;
`;
const Text = Styled.Text`
    font-size: 100px;
`;

const Header = Styled.View`
    width:100%;
    height:60px;
    background: #FDFDFD;
`;

const Name = Styled.Text`
    position: absolute;
    left: 8%;
    top: 25px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #5E3AEE;
`;
const MenuLine = Styled.View`
    position: absolute;
    width: 23px;
    height: 3px;
    right: 8.53%;
    top: 32px;

    background: #000000;
`;
const MenuLine2 = Styled(MenuLine)`
    top: 37px;
`;
const MenuLine3 = Styled(MenuLine)`
    top: 42px;
`;

const MenuBar = Styled.TouchableOpacity``;
const Menu = ({}) => {
    return(
        <MenuBar>
            <MenuLine />
            <MenuLine2 />
            <MenuLine3 />
        </MenuBar>
    );
};

const Main1 = Styled.View`
    position: absolute;
    height: 526px;
    left: 8%;
    right: 8%;
    top: 24px;

    background: #F0F0F0;
`;
const Title1 = Styled.Text`
    position: absolute;
    width: 100%;
    height: 70px;
    top: 58px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;

    text-align: center;
    color: #000000;
`;
const Title11 = Styled(Title1)`
    color: #5E3AEE;
`;

const title1 = `Hello,
I am `;
const title11 = `Krutik Raout.`;

const Desc1 = Styled.Text`
    position: absolute;
    width: 100%;
    height: 22px;
    top: 136px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    text-align: center;

    color: #696969;
`;
const desc1 = `Web Designer/Developer`;


const Desc2 = Styled.Text`
    position: absolute;
    width: 100%;
    height: 32px;
    top: 163px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: #000000;
`;
const desc2 = `I specialize in UI Design, Responsive Web Design,
and Web development`;


interface ButtonProps{
    bg: string;
    order : string;
};
interface Label{
    bg: string;
}
const ContactBtn = Styled.TouchableOpacity<ButtonProps>`
    position: absolute;
    height: 38.28px;
    left: 33.6%;
    right: 33.6%;


    ${props =>
        ((props.order==="first") ? `top: 205px;` : `top: 251px;`)
    }
    background: ${props =>
        props.bg};
    shadow-color: #000;
    shadow-offset:{width:-3px, height:4px};
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 1;
`;
const ContactBtnLabel = Styled.Text<Label>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 33px;
    color: ${props =>
        props.bg};
    align-items: center;
    text-align: center;
    text-transform: capitalize;
`;




const Picture1 = Styled.Image`
    position: absolute;
    width: 216px;
    height: 203.06px;
    left: 20%;
    top: 305px;
`;




const Main2 = Styled.View``;

const Line1 = Styled.View`
    position: absolute;
    height: 0px;
    left: 8%;
    right: 8%;
    top: 599px;

    border: 3px solid #F0F0F0;
`;
const Line2 = Styled(Line1)`
    top: 916px;
`;
const Desc21 = Styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 37.2127px;
    line-height: 43px;
`;
const Desc22 = Styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13.67px;
    line-height: 43px;
    color: #BFB8B8;
`;
const desc21 = [`50+`,'45+,`5+','700+'];
const desc22 = [`Projects Completed`, `Github Repository`,`Years of Experience`,`Youtube Subscribers`];

const Test = `
a
b
c
s
s
asd
asd
a
a
a
a
d
a
af
zv
z
a


zv
zv
zg
zt
ar

fz
a
`;







const Main3 = Styled.View``;
const Main4 = Styled.View``;

const Footer = Styled.View``;
const Copyright = Styled.View``;

interface Props {
}
const App2 = ({}: Props) => {
    return(
        <Container>
        <Header>
            <Name>reboot13</Name>
            <Menu />
        </Header>
        <Scroll>            
            <Main1>
                <Title1>
                    {title1}
                    <Title11>{title11}</Title11>
                </Title1>
                <Desc1>{desc1}</Desc1>
                <Desc2>{desc2}</Desc2>
                <ContactBtn bg="#FFFFFF" order="first">
                    <ContactBtnLabel bg="#000000">contact</ContactBtnLabel>
                </ContactBtn>
                <ContactBtn bg="#5E3AEE" order="second">
                    <ContactBtnLabel bg="#FFFFFF">contact</ContactBtnLabel>
                </ContactBtn>
                <Picture1 source={require(`~/Assets/Pictures/laptop1.png`)} />
            </Main1>
            <Main2>
                <Line1 />
                    <Desc21> </Desc21>
                    <Desc22> </Desc22>
                <Line2 />
            </Main2>
            
            <Main3>
                

            </Main3>
            
            <Main4>
                

            </Main4>
            
            <Footer>


            </Footer>
            <Copyright></Copyright>
            
            
        </Scroll>
        </Container>
    );
}

export default App2;