export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Blender',
                        value: 'blender'
                    },
                    {
                        title: 'Adobe Illustrator',
                        value: 'adobeIllustrator'
                    },
                    {
                        title: 'After Effects',
                        value: 'afterEffects'
                    }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'projectImage'}]
        }
    ]

}