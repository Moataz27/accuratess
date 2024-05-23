export default {
    introspection: {
      type: 'sdl',
      paths: ['./schema.gql'],
    },
    website: {
      template: 'carbon-multi-page',
      staticAssets: 'assets',
      options: {
        appTitle: 'Accurate Api Documentation',
        appLogo: '/Accurate.png',
        pages: [{
            title: 'Accurate Api',
            content: `
            Accurate Api Documentation`
        }],
        queryGenerationFactories: {
            'Time': '00:00'
          }
      },
    },
  }