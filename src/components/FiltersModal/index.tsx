import React, { useCallback, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Button from '../Button';

import sliderMarker from '../../assets/icons/SliderMarker.png';

import {
  Container,
  ModalContainer,
  Header,
  HeaderTitle,
  ClearFiltersButton,
  ClearFiltersText,
  FilterField,
  FilterTitleContainer,
  FilterTitle,
  PriceRange,
  RangeSliderContainer,
  FuelContainer,
  Fuel,
  FuelIcon,
  FilterDescription,
  GearContainer,
  Gear,
} from './styles';

const FiltersModal: React.FC = () => {
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = useState([200, 1200]);
  const [selectedFuel, setSelectedFuel] = useState('');

  return (
    <Container>
      <ModalContainer>

        <Header>
          <HeaderTitle>Filtro</HeaderTitle>

          <ClearFiltersButton>
            <ClearFiltersText>Limpar filtros</ClearFiltersText>
          </ClearFiltersButton>
        </Header>

        <FilterField>
          <FilterTitleContainer>
            <FilterTitle>Preço ao dia</FilterTitle>

            <PriceRange>R$ 160 - R$ 380</PriceRange>
          </FilterTitleContainer>

          <RangeSliderContainer>
            <MultiSlider
              values={[
                nonCollidingMultiSliderValue[0],
                nonCollidingMultiSliderValue[1],
              ]}
              sliderLength={Dimensions.get('window').width - 48}
              minMarkerOverlapDistance={50}
              isMarkersSeparated
              min={0}
              max={1500}
              step={10}
              snapped
              selectedStyle={{ backgroundColor: '#dc1637', height: 3, }}
              customMarkerLeft={(e) => (
                <Image source={sliderMarker} />
              )}
              customMarkerRight={(e) => (
                <Image source={sliderMarker} />
              )}
              touchDimensions={{height: 50,width: 50,borderRadius: 15,slipDisplacement: 200}}
            />
          </RangeSliderContainer>
        </FilterField>

        <FilterField>
          <FilterTitle>Combustível</FilterTitle>

          <FuelContainer>
            
          <Fuel 
              selected={selectedFuel === 'gasoline'}
              onPress={() => {setSelectedFuel('gasoline')}}
            >
              <FuelIcon 
                name="droplet" 
                selected={selectedFuel === 'gasoline'}
              />

              <FilterDescription 
                selected={selectedFuel === 'gasoline'}
              >
                Gasolina
              </FilterDescription>
            </Fuel>

            <Fuel 
              selected={selectedFuel === 'eletric'}
              onPress={() => {setSelectedFuel('eletric')}}
            >
              <FuelIcon 
                name="droplet" 
                selected={selectedFuel === 'eletric'}
              />

              <FilterDescription 
                selected={selectedFuel === 'eletric'}
              >
                Elétrico
              </FilterDescription>
            </Fuel>

            <Fuel 
              selected={selectedFuel === 'flex'}
              onPress={() => {setSelectedFuel('flex')}}
            >
              <FuelIcon 
                name="droplet" 
                selected={selectedFuel === 'flex'}
              />

              <FilterDescription 
                selected={selectedFuel === 'flex'}
              >
                Flex
              </FilterDescription>
            </Fuel>
          </FuelContainer>
        </FilterField>

        <FilterField>
          <FilterTitle>Câmbio</FilterTitle>

          <GearContainer>
            <Gear selected>
              <FilterDescription selected>Automático</FilterDescription>
            </Gear>

            <Gear>
              <FilterDescription>Manual</FilterDescription>
            </Gear>
          </GearContainer>
        </FilterField>

        <Button 
          text="Confirmar"
        />
      </ModalContainer>
    </Container>
  );
};

export default FiltersModal;
