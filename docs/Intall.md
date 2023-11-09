---
sidebar_position: 1
---

# Install

npm

```bash
npm install @fun-eat/design-system
```

yarn

```bash
yarn add @fun-eat/design-system
```

# FunEatProvider

`@fun-eat/design-system` 컴포넌트를 사용하기 위해서는 사용할 프로젝트의 APP을 FunEatProvider로 감싸줘야합니다.

```tsx
//index.tsx

import FunEatProvider from '@fun-eat/design-system';

<FunEatProvider>
  <App />
</FunEatProvider>;
```
