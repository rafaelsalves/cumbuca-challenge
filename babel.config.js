module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: 'src/global/assets',
            rootPathPrefix: '@assets',
          },
          {
            rootPathSuffix: 'src/global/components',
            rootPathPrefix: '@components',
          },
          {
            rootPathSuffix: 'src/global/config',
            rootPathPrefix: '@config',
          },
          {
            rootPathSuffix: 'src/global/models',
            rootPathPrefix: '@models',
          },
          {
            rootPathSuffix: 'src/global/helpers',
            rootPathPrefix: '@helpers',
          },
          {
            rootPathSuffix: 'src/global/routes',
            rootPathPrefix: '@routes',
          },
          {
            rootPathSuffix: 'src/screens',
            rootPathPrefix: '@screens',
          },
          {
            rootPathSuffix: 'src/global/services',
            rootPathPrefix: '@services',
          },
          {
            rootPathSuffix: 'src',
            rootPathPrefix: '~',
          },
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
