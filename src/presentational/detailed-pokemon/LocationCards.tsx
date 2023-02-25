import { Flex } from '@/presentational/components/Layout';
import Text from '@/presentational/components/Text';

const LocationCards = () => {
  return (
    <>
      <Text variant="h2" color="black" style={{ marginInlineStart: 20 }}>
        Locations
      </Text>
      <Flex style={{ width: '100%', height: 30, paddingInlineStart: 20 }}>
        Wait for it soon!
      </Flex>
    </>
  );
};

export default LocationCards;
