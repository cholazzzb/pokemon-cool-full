import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { mainTheme } from '@/presentational/theme';

type SkeletonProps = ComponentProps<typeof BaseSkeleton>;

export default function Skeleton(props: SkeletonProps) {
  return (
    <BaseSkeleton
      {...props}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    />
  );
}

const BaseSkeleton = mainTheme.styled(motion.div, {
  width: 300,
  height: 160,
  borderRadius: '24px',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
});
