import assets from '@/__generated__/assets.json';

type AssetMap = typeof assets;
export function getAsset(key: keyof AssetMap) {
  return assets[key];
}
