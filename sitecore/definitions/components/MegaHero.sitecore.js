// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the MegaHero component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'MegaHero',
    icon: SitecoreIcon.Star,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'lead', type: CommonFieldTypes.SingleLineText },
      { name: 'text', type: CommonFieldTypes.RichText },
      { name: 'link', type: CommonFieldTypes.GeneralLink },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
