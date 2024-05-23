import path from 'path'

export default {
    introspection: {
      type: 'sdl',
      paths: ['./schema.gql'],
    },
    website: {
      template: 'carbon-multi-page',
      staticAssets: path.join(__dirname, 'assets'),
      options: {
        appTitle: 'Accurate Api Documentation',
        appLogo: '/Accurate.png',
        siteRoot: '/accuratess',
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