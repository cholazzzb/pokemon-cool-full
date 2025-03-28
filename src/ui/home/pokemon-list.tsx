import { Flex } from '@/shared-ui/panda-css/jsx';
import { FABFilter } from './fab-filter';
import { FABSearch } from './fab-search';
import { PokemonInfinityList } from './pokemon-infinity-list';

export function PokemonList() {
  return (
    <Flex flexGrow={1}>
      <PokemonInfinityList />
      <FABFilter />
      <FABSearch />
    </Flex>
  );
}
