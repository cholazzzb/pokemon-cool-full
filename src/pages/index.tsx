import { faBookOpen, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { AllPokemonsNameType } from '@/domains/pokemons/pokemonsService';
import { useListTypes } from '@/domains/type/typeHook';
import FloatingActionButton from '@/presentational/components/FloatingActionButton';
import Header from '@/presentational/components/Header';
import {
  Body,
  Layout,
  RightPane,
  YScrollable,
} from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import PokemonGenerationTag from '@/presentational/components/Tags/PokemonGenerationTag';
import PokemonTypeTag from '@/presentational/components/Tags/PokemonTypeTag';
import FilterBadgeRow from '@/presentational/pokemon-list/FilterBadgeRow';
import FilterBottomSheet from '@/presentational/pokemon-list/FilterBottomSheet';
import PokemonList from '@/presentational/pokemon-list/PokemonList';
import SearchBarWrapper from '@/presentational/pokemon-list/SearchBarWrapper';
import { mainTheme } from '@/presentational/theme';
import { getAsset } from '@/utils/asset';

type HomeProps = AllPokemonsNameType;

const Home: NextPage<HomeProps> = () => {
  const [_searchValue, setSearchValue] = useState('');
  const onChangeSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const typesQuery = useListTypes();

  const pokemonTypeMap = (useMemo(() => {
    return typesQuery.data?.types.reduce(
      (acc, pokemonType) => ({
        ...acc,
        [pokemonType.name as PokemonType]: pokemonType.id,
      }),
      {},
    );
  }, [typesQuery.data]) ?? {}) as Record<PokemonType, number>;

  const [pokemonGenFilter, setPokemonGenFilter] = useState(new Set<number>());
  const [pokemonTypeFilter, setPokemonTypeFilter] = useState(
    new Set<PokemonType>(),
  );

  const onClickGenFilter = (gen: number) =>
    setPokemonGenFilter((prev) => {
      const next = new Set(prev);
      if (prev.has(gen)) {
        next.delete(gen);
      } else {
        next.add(gen);
      }

      return next;
    });

  const onClickPokemontTypeFilter = (pokemonType: PokemonType) =>
    setPokemonTypeFilter((prev) => {
      const next = new Set(prev);
      if (prev.has(pokemonType)) {
        next.delete(pokemonType);
      } else {
        next.add(pokemonType);
      }

      return next;
    });

  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const onClickBottomSheetFAB = () => setShowBottomSheet(true);

  return (
    <Layout>
      <RightPane />
      <Body>
        <Header caption="List Pokemons" />
        {pokemonTypeFilter.size > 0 && (
          <FilterBadgeRow>
            {Array.from(pokemonTypeFilter.values()).map((pokemonType) => (
              <PokemonTypeFilterTag
                key={`pokemon-type-tag-${pokemonType}`}
                pokemonType={pokemonType}
                withClose
                onClickClose={() => onClickPokemontTypeFilter(pokemonType)}
              />
            ))}
          </FilterBadgeRow>
        )}
        {pokemonGenFilter.size > 0 && (
          <FilterBadgeRow>
            {Array.from(pokemonGenFilter.values()).map((gen) => (
              <PokemonGenerationFilterTag
                key={`pokemon-generation-tag-${gen}`}
                generation={gen}
                withClose
                onClickClose={() => onClickGenFilter(gen)}
              />
            ))}
          </FilterBadgeRow>
        )}
        <FloatingActionButton
          size="lg"
          posIndex={2}
          onClick={onClickBottomSheetFAB}
        >
          <FontAwesomeIcon icon={faFilter} size="lg" />
        </FloatingActionButton>
        <YScrollable>
          <PokemonList
            genIds={Array.from(pokemonGenFilter.values()).sort((a, b) => a - b)}
            typeIds={Array.from(pokemonTypeFilter.values())
              .map((type) => pokemonTypeMap[type])
              .sort((a, b) => a - b)}
          />
        </YScrollable>
        {showBottomSheet && (
          <FilterBottomSheet
            pokemonGenFilter={pokemonGenFilter}
            onClickPokemonGenFilter={onClickGenFilter}
            pokemonTypeFilter={pokemonTypeFilter}
            onClickPokemonTypeFilter={onClickPokemontTypeFilter}
            onClickClose={() => setShowBottomSheet(false)}
          />
        )}
      </Body>
      <Navigator>
        <Link href="/" style={{ width: '100%' }}>
          <Navigator.Item>
            <Navigator.ItemIcon>
              <FontAwesomeIcon icon={faBookOpen} color="#ed5564" />
            </Navigator.ItemIcon>
            <Navigator.ItemText>Pokemon List</Navigator.ItemText>
          </Navigator.Item>
        </Link>
        <Link href="/owned" style={{ width: '100%' }}>
          <Navigator.Item>
            <Navigator.ItemIcon>
              <Image
                alt="pokeball"
                src={getAsset('images/pokeball')}
                width={20}
                height={20}
              />
            </Navigator.ItemIcon>
            <Navigator.ItemText>Owned</Navigator.ItemText>
          </Navigator.Item>
        </Link>
        <SearchBarWrapper onChangeSearch={onChangeSearch} />
      </Navigator>
    </Layout>
  );
};

export default Home;

const PokemonTypeFilterTag = mainTheme.styled(PokemonTypeTag, {
  marginInlineEnd: '$3',
});

const PokemonGenerationFilterTag = mainTheme.styled(PokemonGenerationTag, {
  marginInlineEnd: '$3',
});
