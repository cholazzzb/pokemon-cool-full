import { FunctionComponent } from 'react';

import { usePokeType } from '@/domains/pokemon/pokemonHook';
import { getPrimaryColorFromType } from 'src/presentational/colorTheme';
import { mainTheme } from 'src/presentational/theme';
import PokeImage from './PokeImage';
import TypeChip from './TypeChip';

const PokemonCardHorLoading = mainTheme.styled('div', {
  minWidth: '200px',
  maxWidth: '300px',
  height: '150px',
  borderRadius: '24px',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
});

interface IPokemonCardHorProps {
  id: number;
  name: string;
  image: string;
}

const PokemonCardHor: FunctionComponent<IPokemonCardHorProps> = (props) => {
  const { id, name, image } = props;

  const { loading, error, data } = usePokeType(name);

  if (loading) return <PokemonCardHorLoading />;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

  const type = data.pokemon.types[0].type.name;
  const bgColor = getPrimaryColorFromType(type);

  const Card = mainTheme.styled('div', {
    minWidth: '200px',
    maxWidth: '300px',
    height: '150px',
    backgroundColor: `${bgColor}`,
    color: 'white',
    padding: '20px 0px 0px 22px',
    margin: '10px 0px',
    borderRadius: '24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '24px',
    boxShadow:
      'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  });

  return (
    <Card>
      <Attribute>
        <NameText>{`#${id} ${name}`}</NameText>
        {data &&
          data.pokemon.types.map((type: any, idx: number) => (
            <TypeChip key={idx} type={type.type.name} />
          ))}
      </Attribute>
      <PokeImage
        type={data.pokemon.types[0].type.name}
        size={75}
        image={image}
      />
    </Card>
  );
};

export default PokemonCardHor;

const NameText = mainTheme.styled('p', {
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: '15px',
  textTransform: 'capitalize',
  marginBlockEnd: '10px',
});

const Attribute = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
});