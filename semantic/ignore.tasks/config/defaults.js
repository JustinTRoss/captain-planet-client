/*******************************
          Default Paths
*******************************/

module.exports = {

  // base path added to all other paths
  base : '',

  // base path when installed with npm
  pmRoot: './',

  // octal permission for output files, i.e. 644 (false does not adjust)
  permission : 744,

  // whether to generate rtl files
  rtl        : false,

  // file paths
  files: {
    config   : 'semantic.json',
    site     : 'semantic/src/site',
    theme    : 'semantic/src/theme.config'
  },

  // folder paths
  paths: {
    source: {
      config      : 'semantic/src/theme.config',
      definitions : 'semantic/src/definitions/',
      site        : 'semantic/src/site/',
      themes      : 'semantic/src/themes/'
    },
    output: {
      packaged     : 'public/',
      uncompressed : 'public/components/',
      compressed   : 'public/components/',
      themes       : 'public/themes/'
    },
    clean : 'public/'
  },

  // components to include in package
  components: [

    // global
    'reset',
    'site',

    // elements
    'button',
    'container',
    'divider',
    'flag',
    'header',
    'icon',
    'image',
    'input',
    'label',
    'list',
    'loader',
    'rail',
    'reveal',
    'segment',
    'step',

    // collections
    'breadcrumb',
    'form',
    'grid',
    'menu',
    'message',
    'table',

    // views
    'ad',
    'card',
    'comment',
    'feed',
    'item',
    'statistic',

    // modules
    'accordion',
    'checkbox',
    'dimmer',
    'dropdown',
    'embed',
    'modal',
    'nag',
    'popup',
    'progress',
    'rating',
    'search',
    'shape',
    'sidebar',
    'sticky',
    'tab',
    'transition',

    // behaviors
    'api',
    'form',
    'state',
    'visibility'
  ],

  // whether to load admin tasks
  admin: false,

  // globs used for matching file patterns
  globs      : {
    ignored    : '!(*.min|*.map|*.rtl)',
    ignoredRTL : '!(*.min|*.map)'
  }

};
