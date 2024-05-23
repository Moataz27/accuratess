import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

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