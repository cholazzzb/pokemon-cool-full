import {
  faAddressCard,
  faSquarePollVertical,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import { Flex } from '@/presentational/components/Layout';
import { ModalOverlay } from '@/presentational/components/ModalOverlay';
import Text from '@/presentational/components/Text';
import { mainTheme } from '@/presentational/theme';
import Tab from './Tab';

const cards = [
  {
    id: 0,
    icon: faAddressCard,
    label: 'About',
    backgroundColor: 'rgba(108, 74, 182, 0.5)',
  },
  {
    id: 1,
    icon: faSquarePollVertical,
    label: 'Base Stats',
    backgroundColor: 'rgba(233, 105, 87, 0.5)',
  },
  {
    id: 2,
    icon: faWandMagicSparkles,
    label: 'Moves',
    backgroundColor: 'rgba(141, 158, 255, 0.5)',
  },
];

type InformationCardsProps = {
  primaryColor: string;
  informations: GetPokemonDetailByIdQuery;
};
const InformationCards: FunctionComponent<InformationCardsProps> = (props) => {
  const [currentTab, setCurrentTab] = useState<number>(-1);

  return (
    <>
      <Text variant="h2" color="black" style={{ marginInlineStart: 20 }}>
        Information
      </Text>
      <Flex style={{ width: '100%', height: 140 }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width - 2 * 10}
              itemCount={cards.length}
              itemSize={120}
              layout="horizontal"
              itemData={cards}
            >
              {({ data, index, style }) => {
                return (
                  <motion.div
                    style={{
                      ...style,
                      backgroundColor: data[index].backgroundColor,
                      borderRadius: 20,
                      width: 100,
                      height: 100,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 10,
                    }}
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                    onClick={() => {
                      setCurrentTab(data[index].id);
                    }}
                  >
                    <Icon>
                      <FontAwesomeIcon
                        icon={data[index].icon}
                        size="3x"
                        color="white"
                      />
                    </Icon>
                    <Text>{data[index].label}</Text>
                  </motion.div>
                );
              }}
            </List>
          )}
        </AutoSizer>
        {currentTab !== -1 && (
          <ModalOverlay onClick={() => setCurrentTab(-1)}>
            <motion.div
              style={{
                backgroundColor: cards[currentTab].backgroundColor,
                borderRadius: 20,
                width: '100%',
                maxWidth: 800,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 10,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <Flex
                style={{
                  width: '100%',
                  alignItems: 'center',
                  backgroundColor: cards[currentTab].backgroundColor,
                  padding: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                <Icon>
                  <FontAwesomeIcon
                    icon={cards[currentTab].icon}
                    size="3x"
                    color="white"
                  />
                </Icon>
                <Text style={{ marginBlockStart: 5, marginInlineStart: 15 }}>
                  {cards[currentTab].label}
                </Text>
              </Flex>

              <Tab
                currentTab={currentTab}
                {...props.informations}
                primaryColor={props.primaryColor}
              />
            </motion.div>
          </ModalOverlay>
        )}
      </Flex>
    </>
  );
};

export default InformationCards;

const Icon = mainTheme.styled(motion.div, {
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$neutral100',
  borderRadius: 10,
});
