module.exports = {
  name: 'test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/test',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
