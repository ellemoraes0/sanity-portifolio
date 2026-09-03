import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfólio',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Título da seção',
      type: 'string',
      initialValue: 'Portfólio',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      initialValue: 'Projetos e trabalhos',
    }),

    defineField({
      name: 'projects',
      title: 'Projetos',
      type: 'array',

      of: [
        {
          type: 'object',
          title: 'Projeto',

          fields: [
            defineField({
              name: 'title',
              title: 'Nome do projeto',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'category',
              title: 'Categoria',
              type: 'string',
            }),

            defineField({
              name: 'cover',
              title: 'Imagem de capa',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'images',
              title: 'Imagens do projeto',
              type: 'array',

              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],

              options: {
                layout: 'grid',
              },
            }),
          ],

          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              media: 'cover',
            },
          },
        },
      ],
    }),
  ],
})