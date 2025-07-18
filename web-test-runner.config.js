import { chromeLauncher } from '@web/test-runner-chrome';

export default {
    files: 'test/**/*.test.js',
    nodeResolve: true,
    browsers: [chromeLauncher()],
    coverageConfig: {
        report: true,
        exclude: ['**/test/**', '**/node_modules/**'],
        include: ['src/**/*.js'],
    },
    mimeTypes: {
        '**/*.jpg': 'js',
        '**/*.png': 'js',
    },
    plugins: [
        {
            name: 'mock-images',
            transform(context) {
                if (context.path.endsWith('.jpg') || context.path.endsWith('.png')) {
                    return {
                        body: `export default new URL('/src/imgs/mock-image.jpg', import.meta.url).href;`,
                        contentType: 'js',
                    };
                }
            },
        },
    ],
};
