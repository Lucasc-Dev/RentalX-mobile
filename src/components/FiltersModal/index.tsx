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

          <RangeSelect>

          </RangeSelect>
        </FilterField>

        <FilterField>
          <FilterTitle>Combustível</FilterTitle>

          <FuelContainer>
            <Fuel>
              <FuelIcon source={{ uri: '' }} />

              <FilterDescription>Gasolina</FilterDescription>
            </Fuel>

            <Fuel>
              <FuelIcon source={{ uri: '' }} />

              <FilterDescription>Elétrico</FilterDescription>
            </Fuel>

            <Fuel>
              <FuelIcon source={{ uri: '' }} />

              <FilterDescription>Flex</FilterDescription>
            </Fuel>
          </FuelContainer>
        </FilterField>

        <FilterField>
          <FilterTitle>Câmbio</FilterTitle>

          <GearContainer>
            <Gear>
              <FilterDescription>Automático</FilterDescription>
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
