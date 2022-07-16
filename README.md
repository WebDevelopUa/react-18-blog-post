Blog Post + Semantic UI - React 18.2 App
---

## Prerequisites:

- [Semantic UI](https://cdnjs.com/libraries/semantic-ui) - `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css`
- [Semantic UI React](https://react.semantic-ui.com) - `npm i semantic-ui-react semantic-ui-css` + `import 'semantic-ui-css/semantic.min.css'`
- [Faker](https://www.npmjs.com/package/faker) - `npm i faker`

```shell
npm i
npm run start
```

[localhost:3000](http://localhost:3000)

-------------------------------

# Hints

* [Container](https://react.semantic-ui.com/elements/container/)

```jsx
import React from 'react'
import {Container} from 'semantic-ui-react'

const ContainerExampleContainer = () => (
    <Container>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        </p>
    </Container>
)

export default ContainerExampleContainer
```

* [React Router](https://www.w3schools.com/react/react_router.asp)

```shell
npm i -D react-router-dom
npm i -D react-router-dom@latest

npm audit fix 
```

* [<Link>](https://v5.reactrouter.com/web/api/Link)
* [React Router](https://www.w3schools.com/react/react_router.asp)
* [React Redux Quick Start](https://react-redux.js.org/tutorials/quick-start)
