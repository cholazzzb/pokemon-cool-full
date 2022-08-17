const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    apiEndpoint:
      process.env.API_ENDPOINT ||
      'https://graphql-pokeapi.vercel.app/api/graphql',
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    pokemonImageUrl:
      process.env.POKEMON_IMAGE_URL ||
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{id}.png',
  },
  images: {
    domains: ['raw.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};
