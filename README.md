# svelte_projects

Svelte😀

## 초기 세팅

### 설치 및 실행

#### 기본실행

- npm create svelte@latest basic-svelte
- cd basic-svelte
- npm install
- npm run dev

#### 템플릿실행

###### 스벨트와 라우트가 포함된 템플릿으로 시작합니다.

- npx degit italypaleale/svelte-spa-router-template hi-svelte
- cd svelte-app
- npm install
- npm run dev

### 익스텐션

- Svelte for VS Code

## 라우팅

### 설치

- npm i svelte-spa-router

## Material UI

- https://sveltematerialui.com/

### 설치

###### 테스트용

- npm i -D @smui/button
- npm i -D @smui/tab @smui/tab-bar
- npm i -D @smui/card

## 개념

### 스토어

- state management tool in svelete

###### writable();

- create writable store

```typescript
import { writable } from "svelte/store";
export const Repository = writable(1);
export default Repository;
```

- update store value

```typescript
import { update } from "svelte/store";
import Repository from "./repository";
Repository.update((value) => value + 1);
```

- get store value

```typescript
import { get } from "svelte/store";
import Repository from "./repository";
const numListInStore = get(Repository);
```
