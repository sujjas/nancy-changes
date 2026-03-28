import { defineField, defineType } from 'sanity';

export const programmeType = defineType({
  name: 'programme',
  title: 'Programme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      options: { list: ['Live Cohort', 'Self-Paced', 'Coming Soon'] },
    }),
    defineField({
      name: 'badgeType',
      title: 'Badge Type',
      type: 'string',
      options: { list: ['live', 'self', 'soon'] },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity / Modules',
      type: 'string',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'priceNote',
      title: 'Price Note',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatYoullLearn',
      title: "What You'll Learn",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whoIsItFor',
      title: 'Who Is It For',
      type: 'text',
    }),
    defineField({
      name: 'structure',
      title: 'Programme Structure',
      type: 'text',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
