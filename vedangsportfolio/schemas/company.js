export default {
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Company Title',
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
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Instagram Link',
            name: 'instagramLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Youtube Link',
            name: 'youtubeLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Facebook Link',
            name: 'fbLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Website Link',
            name: 'webLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Twitter Link',
            name: 'twitterLink',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ]

}