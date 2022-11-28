import getConfig from 'next/config';

import { usePokeType } from '@/domains/pokemon/pokemonHook';
import { getPrimaryColorFromType } from '@/utils/colorTheme';
import { FunctionComponent } from 'react';
import { mainTheme } from 'src/presentational/theme';
import PokeImage from './PokeImage';
import TypeChip from './TypeChip';

interface IPokemonCardVerProps {
  id: number;
  name: string;
}

const PokemonCardVer: FunctionComponent<IPokemonCardVerProps> = (props) => {
  const { id, name } = props;

  const { loading, error, data } = usePokeType(name);
  const { publicRuntimeConfig } = getConfig();

  if (loading) return <PokemonCardVerLoading />;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

  const type = data.pokemon.types[0].type.name;
  const bgColor = getPrimaryColorFromType(type);
  const Card = mainTheme.styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '160px',
    height: '220px',
    backgroundColor: `${bgColor}`,
    color: 'white',
    padding: '20px 0px 0px 22px',
    margin: '10px 0px',
    borderRadius: '24px',
    boxShadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px,  rgba(0, 0, 0, 0.23) 0px 6px 6px',
  });
  return (
    <Card>
      <NameText>{name}</NameText>
      <Flex>
        {data &&
          data.pokemon.types.map((type: any, idx: number) => (
            <TypeChip key={idx} type={type.type.name} />
          ))}
      </Flex>
      <FlexCenter>
        <PokeImage
          type={data.pokemon.types[0].type.name}
          image={publicRuntimeConfig.pokemonImageUrl.replace(
            '{id}',
            id.toString(),
          )}
          size={75}
        />
      </FlexCenter>
    </Card>
  );
};
export default PokemonCardVer;

const NameText = mainTheme.styled('p', {
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: '15px',
  textTransform: 'capitalize',
  marginBlockEnd: '10px',
});

const PokemonCardVerLoading = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '160px',
  height: '220px',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  margin: '10px 0px',
  borderRadius: '24px',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
});

const Flex = mainTheme.styled('div', {
  display: 'flex',
});

const FlexCenter = mainTheme.styled(Flex, {
  justifyContent: 'center',
});
