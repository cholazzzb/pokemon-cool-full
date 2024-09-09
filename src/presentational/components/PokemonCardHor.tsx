import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { css, cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';
import PokeImage from './PokeImage';
import PokemonTag from './Tags/PokemonTypeTag';
import Text from './Text';

type PokemonCardHorProps = {
  id: number;
  name: string;
  pokemonTypes: Array<PokemonType>;
  image: string;
};

const PokemonCardHor: FunctionComponent<PokemonCardHorProps> = (props) => {
  const { id, name, image } = props;

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
      <div
        className={css({
          pokeType100: props.pokemonTypes[0],
        })}
      >
        ashuu
      </div>
      <styled.div pokeType100={props.pokemonTypes[0]}>asd</styled.div>
      <Card>
        <Attribute>
          <NameText variant="h4">{`#${id} ${name}`}</NameText>
          {props.pokemonTypes.map((type, idx) => (
            <PokemonTag
              key={idx}
              pokemonType={type}
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
          <PokeImage type={props.pokemonTypes[0]} size={75} image={image} />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default PokemonCardHor;

const NameText = styled(Text, {
  base: {
    textTransform: 'capitalize',
    marginBlockEnd: '3x',
  },
});

const Attribute = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const cardStyles = cva({
  base: {
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
  },
});

const Card = styled(styled.div, cardStyles);
