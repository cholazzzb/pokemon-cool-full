import { Flex } from '@/shared-ui/panda-css/jsx';
import { FABFilter } from './fab-filter';
import { FABSearch } from './fab-search';
import { ListFilter } from './list-filter';
import { PokemonInfinityList } from './pokemon-infinity-list';
import { HomeQueryParams } from '@/app/param';

export function PokemonList(props: { queryParams: HomeQueryParams }) {
  return (
    <Flex flexGrow={1} direction="column">
      <ListFilter queryParams={props.queryParams} />
      <PokemonInfinityList />
      <FABFilter queryParams={props.queryParams} />
      <FABSearch />
    </Flex>
  );
}
