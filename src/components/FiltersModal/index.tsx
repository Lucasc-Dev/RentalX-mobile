import React, { useCallback, useMemo, useState } from 'react';
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

interface Filters {
  min_range: number;
  max_range: number;
  fuel: string;
  gear: string;
}

interface FiltersModalProps {
  modalOpened: boolean;
  filtersUpdater: ((filters: Filters) => void)
}

const FiltersModal: React.FC<FiltersModalProps> = ({ modalOpened, filtersUpdater }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1500);
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedGear, setSelectedGear] = useState('');

  const handleClearFiltersButton = useCallback(() => {
    setMinValue(0);
    setMaxValue(1500);
    setSelectedFuel('');
    setSelectedGear('');
  }, []);

  const handleSubmitButton = useCallback(() => {
    const filters = {
      min_range: minValue,
      max_range: maxValue,
      fuel: selectedFuel,
      gear: selectedGear,
    }

    filtersUpdater(filters);


  }, [minValue, maxValue, selectedFuel, selectedGear]);

  const compareGasoline = useMemo(() => {
    return selectedFuel === 'gasoline';
  }, [selectedFuel]);

  const compareEletric = useMemo(() => {
    return selectedFuel === 'eletric';
  }, [selectedFuel]);

  const compareFlex = useMemo(() => {
    return selectedFuel === 'flex';
  }, [selectedFuel]);

  const compareAutomatic = useMemo(() => {
    return selectedGear === 'automatic';
  }, [selectedGear]);

  const compareManual = useMemo(() => {
    return selectedGear === 'manual';
  }, [selectedGear]);

  if (modalOpened) {
    return (
      <Container>
        <ModalContainer>
          <Header>
            <HeaderTitle>Filtro</HeaderTitle>
  
            <ClearFiltersButton
              onPress={handleClearFiltersButton}
            >
              <ClearFiltersText>Limpar filtros</ClearFiltersText>
            </ClearFiltersButton>
          </Header>
  
          <FilterField>
            <FilterTitleContainer>
              <FilterTitle>Preço ao dia</FilterTitle>
  
              <PriceRange>R$ {minValue} - R$ {maxValue}</PriceRange>
            </FilterTitleContainer>
  
            <RangeSliderContainer>
              <MultiSlider
                values={[
                  minValue,
                  maxValue,
                ]}
                onValuesChange={(value) => {
                  setMinValue(value[0]);
                  setMaxValue(value[1]);
                }}
                sliderLength={Dimensions.get('window').width - 48}
                minMarkerOverlapDistance={40}
                isMarkersSeparated
                min={0}
                max={1500}
                step={10}
                snapped
                selectedStyle={{ backgroundColor: '#dc1637', height: 3, }}
                customMarkerLeft={() => (
                  <Image source={sliderMarker} />
                )}
                customMarkerRight={() => (
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
                selected={compareGasoline}
                onPress={() => {setSelectedFuel('gasoline')}}
              >
                <FuelIcon name="droplet" selected={compareGasoline}/>
  
                <FilterDescription selected={compareGasoline}>
                  Gasolina
                </FilterDescription>
              </Fuel>
  
              <Fuel 
                selected={compareEletric}
                onPress={() => {setSelectedFuel('eletric')}}
              >
                <FuelIcon name="droplet" selected={compareEletric}/>
  
                <FilterDescription selected={compareEletric}>
                  Elétrico
                </FilterDescription>
              </Fuel>
  
              <Fuel 
                selected={compareFlex}
                onPress={() => {setSelectedFuel('flex')}}
              >
                <FuelIcon name="droplet" selected={compareFlex}/>
  
                <FilterDescription selected={compareFlex}>
                  Flex
                </FilterDescription>
              </Fuel>
            </FuelContainer>
          </FilterField>
  
          <FilterField>
            <FilterTitle>Câmbio</FilterTitle>
  
            <GearContainer>
              <Gear 
                selected={compareAutomatic}
                onPress={() => {setSelectedGear('automatic')}}
              >
                <FilterDescription 
                  selected={compareAutomatic}
                  >Automático</FilterDescription>
              </Gear>
  
              <Gear
                selected={compareManual}
                onPress={() => {setSelectedGear('manual')}}
              >
                <FilterDescription
                  selected={compareManual}
                >Manual</FilterDescription>
              </Gear>
            </GearContainer>
          </FilterField>
  
          <Button 
            text="Confirmar"
            onPress={handleSubmitButton}
          />
        </ModalContainer>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default FiltersModal;
