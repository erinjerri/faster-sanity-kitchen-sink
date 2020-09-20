export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f67a8c53e1e08bfda75de90',
                  title: 'Sanity Studio',
                  name: 'faster-sanity-kitchen-sink-studio',
                  apiId: 'e50c64d6-9c7f-472a-ad3e-e677eb11aff9'
                },
                {
                  buildHookId: '5f67a8c56ac815cb653ec359',
                  title: 'Blog Website',
                  name: 'faster-sanity-kitchen-sink',
                  apiId: '6b7aa3e3-7856-415f-b5f8-d66415f25dd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/faster-sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://faster-sanity-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
