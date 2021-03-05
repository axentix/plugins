# Contributing

## Git
  - Branches
    - Master branch : this branch refers all the verified plugins

    - Plugin develop branch
      - Branch name: plugin/{pluginName}
      - Commit name: [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

  - Pull requests
    - Create a pull request on master with a conventional title
    - PR name : {pluginName}: {pullRequest}
    - Add Stallos and/or Xelzs as reviewer(s)
    - When verified, the PR will be merged, and your plugin automatically published on NPM

## Code

In order to not have conflict with other plugins, we need specific rules on class names.

  - CSS/SCSS
    - Class name: `.{pluginName}-{className}`

  - JavaScript
    - The plugin class have to extend AxentixComponent
    - Use the Axentix.Config.registerPlugin method to register your plugin in Axentix

More informations on how to register a plugin :  
https://useaxentix.com/docs/plugins

## Starter

Using a starter template isn't mandatory, but recommended.

We provide a package.json to automatically compile your JS and SCSS.