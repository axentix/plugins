(() => {
  class Range extends AxentixComponent {
    static getDefaultOptions() {
      return {};
    }

    constructor(element, options) {
      super();

      try {
        this.preventDbInstance(element);
        Axentix.instances.push({ type: 'Range', instance: this });

        this.el = document.querySelector(element);

        this.options = options;

        this._setup();
      } catch (error) {
        console.error('[Axentix] Range init error', error);
      }
    }

    _setup() {
      this.slider = noUiSlider.create(this.el, this.options);
    }

    _setupListeners() {}

    _removeListeners() {
      this.slider.destroy();
    }

    getSlider() {
      return this.slider;
    }
  }

  Axentix.Config.registerPlugin({
    class: Range,
    name: 'Range',
    author: 'Axentix Team',
    autoInit: {
      enabled: true,
      selector: '.range-axentix:not(.no-axentix-init)',
    },
    description: 'Range slider based on noUiSlider implemented in Axentix as a plugin.',
  });
})();
