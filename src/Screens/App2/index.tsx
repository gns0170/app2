import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    width: 100%;
    height: 100%;
`;
const Container2 = Styled.ScrollView`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
`;

const Header = Styled.View`
    width:100%;
    height:50px;

    background: #FDFDFD;
`;
const Name = Styled.Text`
    left: 8%;
    top: 11px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: #5E3AEE;
`;
const MenuLine = Styled.View`
    width: 23px;
    height: 3px;

    background: #000000;
`;
const MenuLine2 = Styled(MenuLine)`
    margin-top: 3.5px
`;
const MenuBar = Styled.TouchableOpacity`
    position: absolute;
    right: 8%
    top: 19px;
`;
const Menu = ({}) => {
    return(
        <MenuBar>
            <MenuLine />
            <MenuLine2 />
            <MenuLine2 />
        </MenuBar>
    );
};

const Main1 = Styled.View`

    height: 526px;
    width: 86%
    left: 7%;
    
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


const Main2 = Styled.View`
    width: 86%;
    height: 317px;
    top:0;
    left:7%;

    margin-top: 100px;
`;

const Line1 = Styled.View`
    left: 0;
    right: 0;
    top: 0px;

    border: 2px solid #F0F0F0;
`;
const Line2 = Styled(Line1)`
    top: 60px;
`;
const Line3 = Styled(Line1)`
    top: 120px;
`;

interface TextPosition {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    position?: string,
    bg? : string,
}
const Desc21 = Styled.Text<TextPosition>`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 37.2127px;
    line-height: 43px;
    color: #000000;

    ${props => (props.top ? `top: ${props.top}` : '0')};
    ${props => (props.left ? `left: ${props.left}` :'0')};
    ${props => (props.right ? `right: ${props.right}` : '0')};
    ${props => (props.bottom ? `bottom: ${props.bottom}` : '0')};
`;
const Desc22 = Styled.Text<TextPosition>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13.67px;
    line-height: 43px;
    color: #BFB8B8;

    position: ${props => (props.position ? props.position : 'static')};
    ${props => (props.top ? `top: ${props.top}` : '0')};
    ${props => (props.left ? `left: ${props.left}` :'0')};
    ${props => (props.right ? `right: ${props.right}` : '0')};
    ${props => (props.bottom ? `bottom: ${props.bottom}` : '0')};
`;
const desc21 = [`50+`,`45+`,`5+`,`700+`];
const desc22 = [`Projects Completed`, `Github Repository`,`Years of Experience`,`Youtube Subscribers`];






const Main3 = Styled.View`
    height: 800px;
    width: 100%;
    margin-top: 85px;

    align-items : center;

    background: #0F1221;
`;
const TopBar = Styled.View`
    height: 26px;
    width: 54%;

    top: 70px;

    background: #5E3AEE;
`;
const Desc31 = Styled.Text<TextPosition>`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #FFFFFF;

    text-align: center;
    top: 78px;
`;
const desc31 = `A Bit About Me...`;

const Desc32 = Styled.Text<TextPosition>`
    width: 60%;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;

    text-align: center;
    top: 78px;

    color: #ffffff;
`;
const desc32 = `Hello, My name is Krutik Raout AKA reboot13.
I am a CSE Undergraduate at Parul University.
I’m currently learning UI/UX development. Checkout my
projects on github.`;
const Desc33 = Styled.Text<TextPosition>`
    top: 95px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;

    color: #5E3AEE;
`;
const desc33 = `@reboot13-git`;
const Picture2 = Styled.Image`
    top: 120px;

    width: 320px;
    height: 390px;

    transform: rotate(4.86deg);
`;


const Main4 = Styled.View`
    height: 470px;
    width: 100%;

    align-items: center;
`;
const Desc41 = Styled.Text`
    top:35px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;

    color: #5E3AEE;
`;
const desc41 = `Skills`;
const Desc42 = Styled.Text`
    width: 80%;
    left:6%;
    top: 3px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 47px;

    color: #000000;
`;
const desc42 = `
HTML          PHP          CSS          SQL          SCSS          C/C++          Python          Typescript          JavaScript          Responsive Design          Node Js                   UI/UX Design 
`;



const Footer = Styled.View`
    height: 656px;
    width: 100%;

    align-items: center;

    background: #5E3AEE;
`;
const DescF1 = Styled.Text`
    margin-top: 20px; 

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;

    color: #FFFFFF;
`;
const Picture3 = Styled.Image`
    width: 256px;
    height: 144px;
    margin-top: 20px;
    margin-bottom: 10px;
`;
const LabelF = Styled.Text<TextPosition>`
    width: 64%;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;

    position: ${props => (props.position ? props.position : 'static')};
    ${props => (props.top ? `top: ${props.top}` : '0')};
    ${props => (props.left ? `left: ${props.left}` :'0')};
    ${props => (props.right ? `right: ${props.right}` : '0')};
    ${props => (props.bottom ? `bottom: ${props.bottom}` : '0')};

    color: #FFFFFF;
`;
const InputF = Styled.TextInput<Position>`
    height: 30px;
    width: 64%;
    align-items: center;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 0px;

    background: rgba(255, 255, 255, 0.5);
`;
const InputFLong = Styled(InputF)`
    height: 105px;
`;
const ButtonF = Styled.TouchableOpacity`
    height: 35px;
    width: 64%;

    margin-top: 30px;
    background: #FFFFFF;
`;
const ButtonFLabel = Styled.Text`
    /* Text Info */

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;

    align-items: center;
    text-align: center;
    text-transform: capitalize;

    color: #000000;
`;

const Copyright = Styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
`;
const LabelC = Styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;

    top: -3px;

    color: #696969;
`;

interface Props {
}
const App2 = ({}: Props) => {
    return(
        <Container>
        <Header>
            <Name>reboot13</Name>
            <Menu />
        </Header>
       <Container2> 
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
                    <Desc21 top='40px' left='15%'>{desc21[0]}</Desc21>
                    <Desc22 top='30px'left='5%'>{desc22[0]}</Desc22>

                    <Desc21 position='absolute' top='42.5px' right='15%'>{desc21[1]}</Desc21>
                    <Desc22 position='absolute' top='81.5px'right='7%'>{desc22[1]}</Desc22>
                <Line2 />
                    <Desc21 top='100px' left='17%'>{desc21[2]}</Desc21>
                    <Desc22 top='90px' left='3%'>{desc22[2]}</Desc22>

                    <Desc21 position='absolute' top='201.5px' right='12%'>{desc21[3]}</Desc21>
                    <Desc22 position='absolute' top='240.5px'right='5%'>{desc22[3]}</Desc22>
                <Line3 />
            </Main2>
            
            <Main3>
                <TopBar />
                <Desc31>{desc31}</Desc31>
                <Desc32>{desc32}</Desc32>
                <Desc33>{desc33}</Desc33>
                <Picture2 source={require(`~/Assets/Pictures/Mockup.png`)} />
            </Main3>

            <Main4>
                <Desc41>{desc41}</Desc41>
                <Desc42>{desc42}</Desc42>
            </Main4>
            
            <Footer>
                <DescF1>Contact</DescF1>
                <Picture3 source={require(`~/Assets/Pictures/hshs1.png`)}/>
                <LabelF>Name</LabelF>
                <InputF placeholder='Hi'/>
                <LabelF>Email</LabelF>
                <InputF />
                <LabelF>Message</LabelF>
                <InputFLong multiline numberOfLines={3} textAlignVertical="top"/>
                <ButtonF>
                    <ButtonFLabel>Submit</ButtonFLabel>
                </ButtonF>
            </Footer>

            <Copyright>
                <LabelC>@reboot13_dev</LabelC>
            </Copyright>
        </Container2>
        </Container>
    );
}

export default App2;