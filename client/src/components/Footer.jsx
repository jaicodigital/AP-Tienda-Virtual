import styled from "styled-components";
import {Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  LocalPhone,
  Email,
} from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

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
  ${mobile({ display: "none" })}
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
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
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
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
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
          <ContactItem><Room style={{marginRight:"10px"}}/>
              Cartagena de Indias - Colombia
          </ContactItem>
          <ContactItem><LocalPhone style={{marginRight:"10px"}}/>
              +57 310 7010719
          </ContactItem>
          <ContactItem><Email style={{marginRight:"10px"}}/>
              tiendavirtualap@gmail.com
          </ContactItem>
          <Payment src="https://icsa.edu.co/wp-content/uploads/2020/03/medios_de_pago.png" />
      </Right>
    </Container>
  );
}
