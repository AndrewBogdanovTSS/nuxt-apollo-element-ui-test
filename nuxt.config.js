export default {
    css: [
        '~/assets/scss/index.scss'
    ],
    plugins: [
        '~/plugins/element-ui'
    ],
    modules: [
        '@nuxtjs/apollo',
    ],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://graphql.wonder.shop/graphql'
            }
        }
    }
}
