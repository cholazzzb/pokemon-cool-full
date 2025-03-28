import { cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

export const textStyle = cva({
  base: {},
  variants: {
    color: {
      white: {
        color: 'white',
      },
      black: {
        color: 'black',
      },
    },
    variant: {
      h1: {
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '1.1',
        textTransform: 'capitalize',
        md: {
          fontSize: '56px',
        },
        lg: {
          fontSize: '64px',
        },
      },
      h2: {
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: '1.2',
        textTransform: 'capitalize',
        md: {
          fontSize: '42px',
        },
        lg: {
          fontSize: '48px',
        },
      },
      h3: {
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '1.3',
        textTransform: 'capitalize',
        md: {
          fontSize: '28px',
        },
        lg: {
          fontSize: '32px',
        },
      },
      h4: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '1.4',
        textTransform: 'capitalize',
        md: {
          fontSize: '22px',
        },
        lg: {
          fontSize: '24px',
        },
      },
      h5: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '1.5',
        textTransform: 'capitalize',
        md: {
          fontSize: '18px',
        },
        lg: {
          fontSize: '20px',
        },
      },
      h6: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1.6',
        textTransform: 'capitalize',
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
      s1: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.5',
        md: {
          fontSize: '18px',
        },
        lg: {
          fontSize: '20px',
        },
      },
      s2: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '1.4',
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
      s3: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '1.3',
        md: {
          fontSize: '14px',
        },
        lg: {
          fontSize: '16px',
        },
      },
      b1: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '1.6',
        md: {
          fontSize: '20px',
        },
        lg: {
          fontSize: '22px',
        },
      },
      b2: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.5',
        md: {
          fontSize: '18px',
        },
        lg: {
          fontSize: '20px',
        },
      },
      b3: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '1.4',
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
      b4: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '1.3',
        md: {
          fontSize: '14px',
        },
        lg: {
          fontSize: '16px',
        },
      },
      b5: {
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: '1.2',
        md: {
          fontSize: '12px',
        },
        lg: {
          fontSize: '14px',
        },
      },
      caption: {
        fontSize: '12px',
        fontWeight: 200,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        md: {
          fontSize: '14px',
        },
        lg: {
          fontSize: '16px',
        },
      },
      overline: {
        fontSize: '10px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        md: {
          fontSize: '12px',
        },
        lg: {
          fontSize: '14px',
        },
      },
      button: {
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'capitalize',
        md: {
          fontSize: '16px',
        },
        lg: {
          fontSize: '18px',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'h4',
    color: 'white',
  },
});

/**
/**
 /**
 * Text component variants documentation.
 *
 * | Variant   | Font Size | Font Weight | Font Style | Line Height | Letter Spacing | Text Transform |
 * | :-------- | :-------- | :---------- | :--------- | :---------- | :------------- | :------------- |
 * | h1        | 48px      | 700         | normal     | 1.1         | -              | capitalize     |
 * | h2        | 36px      | 600         | normal     | 1.2         | -              | capitalize     |
 * | h3        | 24px      | 500         | normal     | 1.3         | -              | capitalize     |
 * | h4        | 20px      | 500         | normal     | 1.4         | -              | capitalize     |
 * | h5        | 16px      | 500         | normal     | 1.5         | -              | capitalize     |
 * | h6        | 14px      | 500         | normal     | 1.6         | -              | capitalize     |
 * | s1        | 16px      | 400         | normal     | 1.5         | -              | none           |
 * | s2        | 14px      | 400         | normal     | 1.4         | -              | none           |
 * | s3        | 12px      | 400         | normal     | 1.3         | -              | none           |
 * | b1        | 18px      | 400         | normal     | 1.6         | -              | none           |
 * | b2        | 16px      | 400         | normal     | 1.5         | -              | none           |
 * | b3        | 14px      | 400         | normal     | 1.4         | -              | none           |
 * | b4        | 12px      | 400         | normal     | 1.3         | -              | none           |
 * | b5        | 10px      | 400         | normal     | 1.2         | -              | none           |
 * | caption   | 12px      | 200         | italic     | -           | -              | uppercase      |
 * | overline  | 10px      | 500         | normal     | -           | 0.1em          | uppercase      |
 * | button    | 14px      | 500         | normal     | -           | -              | capitalize     |
 */
const Text = styled('p', textStyle);

export default Text;
