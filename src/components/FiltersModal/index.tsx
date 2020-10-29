import React from 'react';

import Button from '../Button';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  FilterField,
  FilterTitleContainer,
  FilterTitle,
  RangeSelect,
  FuelContainer,
  Fuel,
  FuelIcon,
  FuelDescription,
  GearContainer,
  Gear,
  GearDescription,
} from './styles';

const FiltersModal: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Filtro</HeaderTitle>

        <HeaderSubtitle>Limpar filtros</HeaderSubtitle>
      </Header>

      <FilterField>
        <FilterTitleContainer>
          <FilterTitle>Preço ao dia</FilterTitle>
        </FilterTitleContainer>

        <RangeSelect>

        </RangeSelect>
      </FilterField>

      <FilterField>
        <FilterTitle>Combustível</FilterTitle>

        <FuelContainer>
          <Fuel>
            <FuelIcon source={{ uri: '' }} />

            <FuelDescription>Gasolina</FuelDescription>
          </Fuel>

          <Fuel>
            <FuelIcon source={{ uri: '' }} />

            <FuelDescription>Elétrico</FuelDescription>
          </Fuel>

          <Fuel>
            <FuelIcon source={{ uri: '' }} />

            <FuelDescription>Flex</FuelDescription>
          </Fuel>
        </FuelContainer>
      </FilterField>

      <FilterField>
        <FilterTitle>Câmbio</FilterTitle>

        <GearContainer>
          <Gear>
            <GearDescription>Automático</GearDescription>
          </Gear>

          <Gear>
            <GearDescription>Manual</GearDescription>
          </Gear>
        </GearContainer>
      </FilterField>

      <Button 
        text="Confirmar"
      />
    </Container>
  );
};

export default FiltersModal;
