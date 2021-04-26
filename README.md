# Site Theme

This is the theme of the AEM:Blueprint site template. 

This theme can be modified to customize the visual appearance of sites created from the basic site template.

## Structure

* `src/components`: This is where the CSS/JS files live
* `src/resources`: This is where images, fonts, etc live that need to go into your theme
* `src/site`: These are site level CSS/JS that are loaded first within your bundled CSS/JS
* `src/template`: These files are related to the style system and are used in conjunction with purgecss and tailwind's JIT mode
* `src/main.ts`: This is the main entry point of your JS & CSS theme for webpack purposes.

## Tailwind
This theme uses tailwind to manage the configuration for many site styles and options. You can customize the tailwind theme, as you need. But you will likely need to make updates to the style system to reflect that.
The style system options for this theme are built with knowledge of the tailwind configurations. Which is why the style system allows for so much customization and configuration by authors.

If you are removing tailwind classes or configurations, be sure to coordinate with the site template authors to not remove needed classes.

## Build

1. Initialize the project with following command executed at the theme root:

```
npm install
```

2. Complete the `.env` file with credentials for the local proxy server to access the site created on Cloud Service. 

3. Run the local proxy server while working to preview your changes with the content from the production environment.

```
npm run live
```

4. Once your work completed, check your changes into GitHub, and execute the deployment action on GitHub.

## Update & Policy Style System
You will need to ensure you have the latest style system settings from the production environment to ensure the correct css is created. 
Tailwind's JIT mode combined with PurgeCSS will only output what is needed. It will look at the `src/template/policies.json` file to see what css classes are used within the style system policies.
You can update this file by running `npm run update` for local development or `npm run update:production` for working with a cloud instance.