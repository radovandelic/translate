var translation_schema = {
    votes: {
        type: 'object',
        properties: {
            up: { type: 'number' },
            down: { type: 'number' }
        },
        required: true
    },
    text: {
        type: 'string',
        required: true
    },
    language: {
        type: 'string',
        required: false
    }
}

var translation_request_schema = {
    text: {
        type: 'string',
        required: true
    },
    languages: {
        type: 'object',
        properties: {
            type: 'string',
            required: false
        },
        required: false
    },
    language: {
        type: 'string',
        required: false
    },
    translations: {
        type: 'object',
        properties: {
            type: 'number'
        }
    }
}

module.exports = { translation_schema: translation_schema, translation_request_schema: translation_request_schema };