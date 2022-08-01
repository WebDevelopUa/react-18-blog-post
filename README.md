Blog Post + Semantic UI - React 18.2 App
---

## Prerequisites:

- [Semantic UI](https://cdnjs.com/libraries/semantic-ui) - `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css`
- [Semantic UI React](https://react.semantic-ui.com) - `npm i semantic-ui-react semantic-ui-css` + `import 'semantic-ui-css/semantic.min.css'`
- [Faker](https://www.npmjs.com/package/faker) - `npm i faker`
- [axios](https://www.npmjs.com/package/axios) - `npm i axios`
- [Unsplash API](https://unsplash.com/developers)
- [Unsplash App](https://unsplash.com/oauth/applications)
- Access Key `id-zPQ9_VR8YvApMDzNeGhehuSR4eL5Us0Y7gmAnYV8`
- [Search photos](https://unsplash.com/documentation#search-photos)

```shell
npm i
npm run start
```

[localhost:3000](http://localhost:3000)

-------------------------------

# Hints

* [Lang codes](https://datahub.io/core/language-codes)
* [Google Translation APIs documents](https://cloud.google.com/translate/docs/apis)
* [Google Translation Languagws](https://cloud.google.com/translate/docs/languages)
* [Google Translation Reference documents](https://cloud.google.com/translate/docs/reference/rest/v2/translate) => `POST https://translation.googleapis.com/language/translate/v2`
* Google Translate API Key => `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`; This API can only be used when your browser is at http://localhost:3000
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

----------

## Response of Unsplash API

```json5

{
  "total": 22,
  "total_pages": 3,
  "results": [
    {
      "id": "yEUuPgmaeOg",
      "created_at": "2022-04-10T11:09:02-04:00",
      "updated_at": "2022-07-21T09:25:53-04:00",
      "promoted_at": null,
      "width": 4249,
      "height": 4767,
      "color": "#f3f3f3",
      "blur_hash": "LfGu?yWX%MWX?wRj%Mof_4WBa#s:",
      "description": "Old Valais house. Ritzingen, Upper Valais, Switzerland. Altes Walliser Haus. Ritzingen, Oberwallis, Schweiz.",
      "alt_description": null,
      "urls": {
        "raw": "https://images.unsplash.com/photo-1649602481559-8c35246c6d64?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA\u0026ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1649602481559-8c35246c6d64?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA\u0026ixlib=rb-1.2.1\u0026q=80",
        "regular": "https://images.unsplash.com/photo-1649602481559-8c35246c6d64?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        "small": "https://images.unsplash.com/photo-1649602481559-8c35246c6d64?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        "thumb": "https://images.unsplash.com/photo-1649602481559-8c35246c6d64?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1649602481559-8c35246c6d64"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/yEUuPgmaeOg",
        "html": "https://unsplash.com/photos/yEUuPgmaeOg",
        "download": "https://unsplash.com/photos/yEUuPgmaeOg/download?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA",
        "download_location": "https://api.unsplash.com/photos/yEUuPgmaeOg/download?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxfHxnb21zfGVufDB8fHx8MTY1ODQzMjk1OA"
      },
      "categories": [],
      "likes": 0,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "topic_submissions": {},
      "user": {
        "id": "yXx7x9ezp_8",
        "updated_at": "2022-07-20T22:42:54-04:00",
        "username": "peter_borter",
        "name": "Peter Borter",
        "first_name": "Peter",
        "last_name": "Borter",
        "twitter_username": null,
        "portfolio_url": "https://www.flickr.com/photos/peter-borter/albums/",
        "bio": "Hello, I am Peter, a hobby photographer from Switzerland. I am retired. In the last years I travel through Asia and try to capture everything interesting and beautiful in photos.\r\nIn the link below you can see more of my photos.",
        "location": "Zurich, Switzerland",
        "links": {
          "self": "https://api.unsplash.com/users/peter_borter",
          "html": "https://unsplash.com/@peter_borter",
          "photos": "https://api.unsplash.com/users/peter_borter/photos",
          "likes": "https://api.unsplash.com/users/peter_borter/likes",
          "portfolio": "https://api.unsplash.com/users/peter_borter/portfolio",
          "following": "https://api.unsplash.com/users/peter_borter/following",
          "followers": "https://api.unsplash.com/users/peter_borter/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-fb-1577976698-c38e1f2986a9.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          "medium": "https://images.unsplash.com/profile-fb-1577976698-c38e1f2986a9.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          "large": "https://images.unsplash.com/profile-fb-1577976698-c38e1f2986a9.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
        },
        "instagram_username": null,
        "total_collections": 4,
        "total_likes": 0,
        "total_photos": 107,
        "accepted_tos": true,
        "for_hire": false,
        "social": {
          "instagram_username": null,
          "portfolio_url": "https://www.flickr.com/photos/peter-borter/albums/",
          "twitter_username": null,
          "paypal_email": null
        }
      },
      "tags": []
    },
    {
      "id": "cLagfTU6XbE",
      "created_at": "2022-07-19T12:12:33-04:00",
      "updated_at": "2022-07-20T19:42:13-04:00",
      "promoted_at": null,
      "width": 2112,
      "height": 3108,
      "color": "#738c40",
      "blur_hash": "L7Ep17^*B0J#xM$-XL%I.XpE=$$n",
      "description": "At first I only saw the butterfly. Then I noticed that the thistle had two visitors",
      "alt_description": null,
      "urls": {
        "raw": "https://images.unsplash.com/photo-1658246310162-3a119e434a1e?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg\u0026ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1658246310162-3a119e434a1e?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg\u0026ixlib=rb-1.2.1\u0026q=80",
        "regular": "https://images.unsplash.com/photo-1658246310162-3a119e434a1e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        "small": "https://images.unsplash.com/photo-1658246310162-3a119e434a1e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        "thumb": "https://images.unsplash.com/photo-1658246310162-3a119e434a1e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1658246310162-3a119e434a1e"
      },
      "links": {
        "self": "https://api.unsplash.com/photos/cLagfTU6XbE",
        "html": "https://unsplash.com/photos/cLagfTU6XbE",
        "download": "https://unsplash.com/photos/cLagfTU6XbE/download?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg",
        "download_location": "https://api.unsplash.com/photos/cLagfTU6XbE/download?ixid=MnwzNDg1NDR8MHwxfHNlYXJjaHwxMHx8Z29tc3xlbnwwfHx8fDE2NTg0MzI5NTg"
      },
      "categories": [],
      "likes": 1,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "topic_submissions": {},
      "user": {
        "id": "Gd5m1OC8alM",
        "updated_at": "2022-07-21T15:37:32-04:00",
        "username": "monikamanenti",
        "name": "Monika Manenti",
        "first_name": "Monika",
        "last_name": "Manenti",
        "twitter_username": null,
        "portfolio_url": "https://mmanenti.ch/",
        "bio": "Because I love to draw, paint and write, I am always looking for reference photos. This Unsplash account is my way to give back to a platform that has become an important source for reference photos.",
        "location": "Switzerland",
        "links": {
          "self": "https://api.unsplash.com/users/monikamanenti",
          "html": "https://unsplash.com/@monikamanenti",
          "photos": "https://api.unsplash.com/users/monikamanenti/photos",
          "likes": "https://api.unsplash.com/users/monikamanenti/likes",
          "portfolio": "https://api.unsplash.com/users/monikamanenti/portfolio",
          "following": "https://api.unsplash.com/users/monikamanenti/following",
          "followers": "https://api.unsplash.com/users/monikamanenti/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1635530071180-b58b52286b58image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
          "medium": "https://images.unsplash.com/profile-1635530071180-b58b52286b58image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
          "large": "https://images.unsplash.com/profile-1635530071180-b58b52286b58image?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
        },
        "instagram_username": null,
        "total_collections": 36,
        "total_likes": 126,
        "total_photos": 60,
        "accepted_tos": true,
        "for_hire": false,
        "social": {
          "instagram_username": null,
          "portfolio_url": "https://mmanenti.ch/",
          "twitter_username": null,
          "paypal_email": null
        }
      },
      "tags": []
    }
  ]
}

```
