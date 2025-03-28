'use client';

import { AnimatePresence } from 'motion/react';
import { PropsWithChildren } from 'react';

import { MotionVStack } from '../client/client-motion';
import { css } from '../panda-css/css';
import { Box, Flex, Grid, VStack } from '../panda-css/jsx';
import { BoxStyles } from '../panda-css/patterns/box';
import { CircleButton } from './button';
import { Portal } from './portal';
import Text from './text';

type Props = PropsWithChildren<{
  width?: BoxStyles['width'];
  height?: BoxStyles['height'];
  title?: string;
  onClose: () => void;
}>;

export function BottomSheetModal({
  width = '700px',
  height = '500px',
  ...props
}: Props) {
  return (
    <Portal>
      <Box
        className={css({
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 'overlay',
        })}
      />
      <Box
        className={css({
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 'overlay',
          height: height,
          color: 'black',
          md: {
            height: '100%',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
        <AnimatePresence>
          <MotionVStack
            initial={{ opacity: 0, translateY: '50%' }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: '50%' }}
            backgroundColor="white"
            zIndex="bottomSheet"
            position={{ base: 'absolute', md: 'initial' }}
            bottom={{ base: 0, md: 'initial' }}
            left={{ base: 0, md: 'initial' }}
            right={{ base: 0, md: 'initial' }}
            width={{ base: '100%', md: width }}
            height={height}
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            borderBottomLeftRadius={{ base: '0px', md: '20px' }}
            borderBottomRightRadius={{ base: '0px', md: '20px' }}
            paddingBlockStart="8px"
            boxShadow={{
              base: '0px -6px rgba(0, 0, 0, 0.1)',
              md: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Flex padding="4x" width="100%" flexDirection={'column'}>
              <Grid
                columns={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <CircleButton
                  color="primary"
                  ghost
                  outline
                  className={css({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'primary.400',
                  })}
                  onClick={props.onClose}
                >
                  x
                </CircleButton>
                <Flex justifyContent="center" alignItems="center" height="100%">
                  <Text color="black">{props.title}</Text>
                </Flex>
                <Box />
              </Grid>
              <Box
                height="1px"
                width="100%"
                backgroundColor="gray.300"
                marginBlockStart="3x"
              />
            </Flex>

            <VStack
              width="100%"
              overflowY="scroll"
              paddingBlockEnd={{
                base: 'navigator',
                md: '0px',
              }}
            >
              {props.children}
            </VStack>
          </MotionVStack>
        </AnimatePresence>
      </Box>
    </Portal>
  );
}
