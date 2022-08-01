export const accordionItemsReduxCycle = [
    {
        id: 1, title: 'Action Creator', content: 'const createPost = ({id, title, description}) => postObject; const deletePost = ({postId}) =>  {type: "DELETE_POST", payload: {id: postId} }', link: ''
    },
    {
        id: 2, title: 'Action', content: 'const postObject = {type: "CREATE_POST", payload: {id: 1, title: "First Post", description: "This is a 1st post"}}', link: ''
    },
    {
        id: 3, title: 'dispatch', content: 'Send an Action to Reducers: store.dispatch(createPost(1, "First Post", "This is a 1st post")); store.dispatch(deletePost(1));', link: ''
    },
    {
        id: 4, title: 'Reducers', content: 'const posts = (listOfPosts = [], action) => { if(action.type === "CREATE_POST") { return [...listOfPosts, action.payload]; } else if (action.type === "DELETE_POST") {' +
            ' return listOfPosts.filter(postId => postId !== action.payload.id); } return listOfPosts }', link: ''
    },
    {
        id: 5, title: 'State', content: 'const { createStore, combineReducers } = Redux; const MyPostsStore = combineReducers({ posts: posts }); const store = createStore(MyPostsStore); store.getState(); ', link: ''
    }

]
