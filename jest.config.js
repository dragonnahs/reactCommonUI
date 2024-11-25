/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-11-25 11:58:30
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-11-25 17:15:50
 * @FilePath: \react-common-ui\jest.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest'
  }
}; 