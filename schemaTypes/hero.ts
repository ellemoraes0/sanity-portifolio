import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'hero',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),

    defineField({
      name: 'description1',
      title: 'Descrição1',
      type: 'text',
    }),
    defineField({
      name: 'description2',
      title: 'Descrição2',
      type: 'text',
    }),
  ],
})