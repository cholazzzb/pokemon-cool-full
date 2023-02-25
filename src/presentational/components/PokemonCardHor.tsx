import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

import { usePokeType } from '@/domains/pokemon/pokemonHook';
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeColor } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';
import PokeImage from './PokeImage';
import PokemonTag from './Tags/PokemonTag';
import Text from './Text';

const PokemonCardHorLoading = mainTheme.styled('div', {
  minWidth: '200px',
  maxWidth: '300px',
  height: '150px',
  borderRadius: '24px',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
});

type PokemonCardHorProps = {
  id: number;
  name: string;
  image: string;
};

const PokemonCardHor: FunctionComponent<PokemonCardHorProps> = (props) => {
  const { id, name, image } = props;

  const { loading, error, data } = usePokeType(name);

  if (loading) return <PokemonCardHorLoading />;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

  const pokemonType = data.pokemon.types[0].type.name as PokemonType;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 1 }}
    >
      <Card pokemonType={pokemonType}>
        <Attribute>
          <NameText variant="h4">{`#${id} ${name}`}</NameText>
          {data &&
            data.pokemon.types.map((type: any, idx: number) => (
              <PokemonTag
                key={idx}
                pokemonType={type.type.name}
                css={{ marginBlockEnd: '$1' }}
              />
            ))}
        </Attribute>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        >
          <PokeImage
            type={data.pokemon.types[0].type.name}
            size={75}
            image={image}
          />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default PokemonCardHor;

const NameText = mainTheme.styled(Text, {
  textTransform: 'capitalize',
  marginBlockEnd: '$3',
});

const Attribute = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Card = mainTheme.styled('div', {
  minWidth: '250px',
  maxWidth: '300px',
  height: '170px',
  color: 'white',
  padding: '20px 22px',
  margin: '10px 0px',
  borderRadius: '24px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '24px',
  boxShadow:
    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  variants: {
    pokemonType: createPokemonTypeColor(0.8),
  },
});
