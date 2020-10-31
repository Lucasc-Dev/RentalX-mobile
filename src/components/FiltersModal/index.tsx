import React from 'react';

import Button from '../Button';

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
  RangeSelect,
  FuelContainer,
  Fuel,
  FuelIcon,
  FilterDescription,
  GearContainer,
  Gear,
} from './styles';

const FiltersModal: React.FC = () => {
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

          <RangeSelect
            touchDimensions={{ height: 200, width: 500, borderRadius: 0, slipDisplacement: 100 }}
          />
        </FilterField>

        <FilterField>
          <FilterTitle>Combustível</FilterTitle>

          <FuelContainer>
            <Fuel selected>
              <FuelIcon name="droplet" selected />

              <FilterDescription selected >Gasolina</FilterDescription>
            </Fuel>

            <Fuel>
              <FuelIcon name="droplet" />

              <FilterDescription>Elétrico</FilterDescription>
            </Fuel>

            <Fuel>
              <FuelIcon name="droplet" />

              <FilterDescription>Flex</FilterDescription>
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
