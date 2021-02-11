import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        likes: 15,
        creator: {
            avatar: 'http://via.placeholder.com/100x100/a74848',
            user: 'exampleCreator'
        },
        currentUser: {
            avatar: 'http://via.placeholder.com/100x100/a74848',
            user: 'exampler'
        },
        comments: [
            {
                id: 1,
                user: 'example',
                avatar: 'http://via.placeholder.com/100x100/a74848',
                text: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
            },
            {
                id: 2,
                user: 'example1',
                avatar: 'http://via.placeholder.com/100x100/2d58a7',
                text: 'lorem ipsum dolor',
            },
            {
                id: 3,
                user: 'example2',
                avatar: 'http://via.placeholder.com/100x100/36846e',
                text: 'lorem ipsum dolor again',
            },
        ]
    },
    getters: {
        getLikes(state) {
            return state.likes
        },
        getCreator(state) {
            return state.creator
        },
        getCurrentUser(state) {
            return state.currentUser
        },
        getComments(state) {
            return state.comments
        }
    },
    mutations: {
        updateComments(state, update) {
            state.comments.push(update)
        }
    },
    actions: {
        addComment(ctx, update) {
            console.log(update)
            ctx.commit('updateComments', update)
        }
    },
    modules: {}
})

createApp(App).use(router).use(store).mount('#app')