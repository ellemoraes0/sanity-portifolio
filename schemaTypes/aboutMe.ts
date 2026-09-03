import {defineField, defineType} from 'sanity'

export const aboutMe = defineType({
  name: 'aboutme',
  title: 'Sobre mim',
  type: 'document',

  fields: [
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),
    defineField({
      name: 'experience',
      title: 'Experiências',
      type: 'text',
    }),
    defineField({
      name: 'education',
      title: 'Formação',
      type: 'text',
    }),
    defineField({
      name: 'languages',
      title: 'Idiomas',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'cellphone',
      title: 'Celular',
      type: 'string',
    }),
    defineField({
      name: 'skill1',
      title: 'Habilidade1',
      type: 'image',
    }),
    defineField({
      name: 'skill2',
      title: 'Habilidade2',
      type: 'image',
    }),
    defineField({
      name: 'skill3',
      title: 'Habilidade3',
      type: 'image',
    }),
    defineField({
      name: 'skill4',
      title: 'Habilidade4',
      type: 'image',
    }),
    defineField({
      name: 'skill5',
      title: 'Habilidade5',
      type: 'image',
    }),
    defineField({
      name: 'skill6',
      title: 'Habilidade6',
      type: 'image',
    }),
  ],
})