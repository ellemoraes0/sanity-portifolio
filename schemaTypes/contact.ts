import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contato',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),

    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      description: 'Adicione quantos links quiser (ex: Instagram, Behance, LinkedIn, WhatsApp...)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            defineField({
              name: 'label',
              title: 'Nome do link',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    })
  ],
})