import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        score: 0,
        time: 0,
        quiz: {},
        play: false,
        submiting: false,
        tag: '',
        diff: '',
    },
    mutations: {
        scoreAdd(state, val) {
            state.score += val;
        },
        scoreSub(state, val) {
            state.score -= val;
        },
        scoreSet(state, val) {
            state.score = val;
        },
        timeAdd(state, val) {
            state.time += val;
        },
        timeSub(state, val) {
            state.time -= val;
        },
        timeSet(state, val) {
            state.time = val;
        },
        quizSet(state, val) {
            state.quiz = val;
        },
        playSet(state, val) {
            state.play = val;
        },
        submitingSet(state, val) {
            state.submiting = val;
        },
        tagSet(state, val) {
            state.tag = val;
        },
        diffSet(state, val) {
            state.diff = val;
        }
    },
    actions: {
        async getRandomQuiz({ commit }, { tag, diff }) {
            console.log(`https://quizapi.io/api/v1/questions?limit=1&tags=${tag}&diffculty=${diff}`);
            await axios.get(`https://quizapi.io/api/v1/questions?limit=1&tags=${tag}&diffculty=${diff}`, {
                headers: {
                    'X-Api-Key': 'l5hxx3nuI016ykQpgAsd7UIkBg5lbIW5y1gUV5O3',
                }
            }).then(res => {
                commit('quizSet', res.data[0]);
            });
        }
    },
    modules: {
    }
})
