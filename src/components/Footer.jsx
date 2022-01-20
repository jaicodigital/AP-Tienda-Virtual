import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`; 

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`; 

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`; 

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>AP Tienda Virtual.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Envíos a toda Colombia</Title>
          <List>
              <ListItem>Inicio</ListItem>
              <ListItem>Compras</ListItem>
              <ListItem>Moda hombre</ListItem>
              <ListItem>Moda mujer</ListItem>
              <ListItem>Accesorios</ListItem>
              <ListItem>Mi cuenta</ListItem>
              <ListItem>Rastreo de ordenes</ListItem>
              <ListItem>Lista de deseos</ListItem>
              <ListItem>Terminos y condiciones</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contacto</Title>
          <ContactItem><RoomIcon style={{marginRight:"10px"}}/>
              Cartagena de Indias - Colombia
          </ContactItem>
          <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}}/>
              +57 310 7010719
          </ContactItem>
          <ContactItem><EmailIcon style={{marginRight:"10px"}}/>
              tiendavirtual@gmail.com
          </ContactItem>
          <Payment src="https://icsa.edu.co/wp-content/uploads/2020/03/medios_de_pago.png" />
      </Right>
    </Container>
  );
}
