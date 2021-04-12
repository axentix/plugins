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

  - Extend AxentixComponent details :

Extending AxentixComponent allows to get Axentix features working on the plugin as the `sync()` , `reset()`, data init...
```js
// Plugin class example
class PluginName extends AxentixComponent {
    static getDefaultOptions() {
      return {};
    }
    // Constructor example
    constructor(element, options) {
      super();

      try {
        this.preventDbInstance(element);
        Axentix.instances.push({ type: 'PluginName', instance: this });
        
        this._setup();
      } catch (error) {
        console.error('[Axentix] {PluginName} init error', error);
      }
    }
    // Needed methods
    _setup()
    _setupListeners()
    _removeListeners()
  }
}
```
  - Register function parameters :

This method allows you to register your component as an Axentix component, which makes you able to create an instance with  `new Axentix.PluginName`...
```js
Axentix.Config.registerPlugin({
  class: {ClassName},
  name:  {PluginName} (string),
  dataDetection: (boolean),
  author: {authorName} (string),
  autoInit: {
    enabled: (boolean),
    selector: '.{componentName}-axentix:not(.no-axentix-init)',
  },
  description: {pluginDescription} (string),
});
```

More informations about plugin :  
https://useaxentix.com/docs/plugins

## Starter

The starter template allows you to compile your CSS & JS in one file, and your SASS/SCSS to CSS.

Using a starter template isn't mandatory, but recommended since you'll have to create a package.json with all things that are inside the example one.