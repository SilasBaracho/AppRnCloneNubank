import React from 'react';
import { TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TabsContianer, TabItem, TabText } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContianer>
        <TouchableOpacity>
          <TabItem>
            <MaterialIcons name="qr-code-2" size={24} color="#FFF" />
            <TabText>Pix</TabText>
          </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <MaterialCommunityIcons
              name="barcode-scan"
              size={24}
              color="#FFF"
            />
            <TabText>Pagar</TabText>
          </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <MaterialIcons name="person-add" size={24} color="#FFF" />
            <TabText>Indicar amigos</TabText>
          </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <MaterialIcons name="attach-money" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
            <TabText>Depositar</TabText>
          </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <MaterialIcons name="lock" size={24} color="#FFF" />
            <TabText>Bloquear Cartão</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContianer>
    </Container>
  );
};

export default Tabs;
