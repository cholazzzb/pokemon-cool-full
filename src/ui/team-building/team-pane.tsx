'use client';

import { Virtuoso } from 'react-virtuoso';

import Button from '@/shared-ui/component/button';
import Text from '@/shared-ui/component/text';
import { css } from '@/shared-ui/panda-css/css';
import { Box, Flex, HStack, VStack } from '@/shared-ui/panda-css/jsx';
import { PokemonCard } from '../home/pokemon-card';

function TeamPane() {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="space-between"
      direction="column-reverse"
    >
      <HStack direction="rtl">
        <VStack>
          <Box>
            <Text
              className={css({
                writingMode: 'vertical-rl',
                textOrientation: 'sideways-right',
              })}
              variant="s1"
              color="black"
            >
              Summary
            </Text>
          </Box>
          <Box>
            <Text
              className={css({
                writingMode: 'vertical-rl',
                textOrientation: 'sideways-right',
              })}
              variant="s1"
              color="black"
            >
              Members
            </Text>
          </Box>
        </VStack>

        <VStack>
          <Box>
            <p>Team Summary</p>
            <Box>Total Status</Box>
            <Box>
              All Pokemon Type
              <Box>Strong at</Box>
              <Box>Weaknesses at</Box>
              Synergy score (from pokemon type) = ((strength)type coverage/all
              type - (Weaknesses)type coverage/all type) *10
            </Box>
          </Box>
          <HStack>
            <Button>Save</Button>
            <Button color="secondary">Load</Button>
          </HStack>
        </VStack>
      </HStack>

      <Box
        backgroundColor={'green.500'}
        height="40px"
        width="100%"
        borderBlockEnd="4px solid"
      >
        <Text color="black">Team Name</Text>
        <Virtuoso
          horizontalDirection
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            padding: '8px',
            backgroundColor: 'pink',
          }}
          data={Array(6).fill(null)}
          itemContent={() => (
            <PokemonCard id={1} pokemonTypes={['dark']} name="bulbadark" />
          )}
        />
      </Box>
    </Flex>
  );
}

export default TeamPane;
