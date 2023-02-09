import assets from '@/__generated__/assets.json';

type AssetKey = keyof typeof assets;
type AssetPath = string;

function getAsset(key: AssetKey): AssetPath {
  return assets[key];
}

export { getAsset };
