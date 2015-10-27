define({
    environments: [{
        browserName: 'chrome',
        platform: ['MAC']
    }],

    maxConcurrency: 2,

    tunnel: 'NullTunnel',
    loaderOptions: {
        packages: [{
            name: 'yadda',
            location: './node_modules/intern-yadda-loader'
        }, {
            name: 'steps',
            location: './test/steps'
        }]
    },

    reporters: [
        "Pretty"
    ],

    functionalSuites: [
        // 'yadda!test/features/google.feature',
        'yadda!test/features/buggy.feature'
    ],

    excludeInstrumentation: /^(?:test|node_modules)\//,

    yadda: {
        steps: [
            // 'steps/google-library',
            'steps/given'
        ],
        lang: 'English'
    }
});
