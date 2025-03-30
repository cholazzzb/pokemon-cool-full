import { Skeleton } from '@/shared-ui/component/skeleton';
import { Box } from '@/shared-ui/panda-css/jsx';
import { grid } from '@/shared-ui/panda-css/patterns/grid';

export function SkeletonPokemonList() {
  return (
    <Box className={grid({ columns: 2, gap: '20px' })} padding="10x">
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
      <Skeleton height={{ base: '220px', md: '280' }} />
    </Box>
  );
}
