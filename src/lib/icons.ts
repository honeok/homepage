import { lookupCollection } from "@iconify/json";
import { getIconCSS, getIconData } from "@iconify/utils";

import { SOCIAL_LINKS } from "@/config";

const iconNamePattern = /^([a-z0-9]+(?:-[a-z0-9]+)*):([a-z0-9]+(?:-[a-z0-9]+)*)$/;
const collectionCache = new Map<string, ReturnType<typeof lookupCollection>>();

function loadCollection(collectionPrefix: string) {
  const cachedCollection = collectionCache.get(collectionPrefix);

  if (cachedCollection) {
    return cachedCollection;
  }

  const iconCollection = lookupCollection(collectionPrefix);
  collectionCache.set(collectionPrefix, iconCollection);
  return iconCollection;
}

async function resolveIcon(iconId: string) {
  const iconIdMatch = iconId.match(iconNamePattern);

  if (!iconIdMatch) {
    throw new Error(`Invalid Iconify icon name: ${iconId}`);
  }

  const [, collectionPrefix, iconName] = iconIdMatch;
  const iconCollection = await loadCollection(collectionPrefix);
  const iconData = getIconData(iconCollection, iconName);

  if (!iconData) {
    throw new Error(`Iconify icon not found: ${iconId}`);
  }

  return getIconCSS(iconData, {
    iconSelector: `.social-icon-${collectionPrefix}-${iconName}`,
    format: "compressed",
  });
}

export async function getSocialIconStyles() {
  const iconStyles = await Promise.all(SOCIAL_LINKS.map(({ icon }) => resolveIcon(icon)));

  return iconStyles.join("\n");
}
