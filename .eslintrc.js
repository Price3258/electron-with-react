module.exports = {
    extends: ['react-app', 'airbnb'],
    rules: {
      'react/jsx-filename-extension': ['off'],
      'class-methods-use-this': 'off',
      'func-names': 'off',
      'import/prefer-default-export': 'off',
      'react/forbid-prop-types': ['error', { forbid: ['any'] }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'global-require': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'max-len': 'off',
      'no-console': 'off',
      camelcase: 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
  
      'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['draft'] }],
  
      // 불필요한 변수
      'no-unused-vars': [
        2,
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      // 인라인 함수
      'react/jsx-no-bind': 1,
      'react/jsx-props-no-spreading': 'off',
    },
  };
  