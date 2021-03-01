# Plugins

## Plugin definition

A plugin can entirely be created from scratch, or imported and adaptated from an open-source component already existing. 

## Install

Every validated component will be published on NPM.
To install any component, use 
```sh
npm install @axentix/plugin-{pluginName}
```

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
    - 

## Starter

Using a starter template isn't mandatory, but recommended.

We provide a package.json to automatically compile your JS and SCSS.