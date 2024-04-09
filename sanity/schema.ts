import { type SchemaTypeDefinition } from 'sanity'
import { SchemaType } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [

        {
          name: 'utvikling',
          title: 'Utvikling',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
        {
          name: 'brukerstotte',
          title: 'Brukerstøtte',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
        {
          name: 'drift',
          title: 'Drift',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },


            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
  ],
}
