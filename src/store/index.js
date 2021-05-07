import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
    state: {
        score: 0,
        time: 0,
        quiz: {},
        nextQuiz: [],
        play: false,
        submiting: false,
        tag: '',
        diff: '',
        timeInterval: null,
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
        nextQuizSet(state, val) {
            state.nextQuiz = val;
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
        },
        timeIntervalSet(state, val) {
            state.timeInterval = val;
        },
        timeIntervalClear(state) {
            clearInterval(state.timeInterval)
        }
    },
    actions: {
        async setNextQuiz({ commit }) {
            var tempQuiz = this.state.nextQuiz;
            commit('quizSet', tempQuiz.shift());
            commit('nextQuizSet', tempQuiz);
        },
        async getRandomQuiz({ commit }, { tag, diff }) {
            if (this.state.nextQuiz.length > 3) return false;

            await axios.get(`https://quizapi.io/api/v1/questions?limit=10&tags=${tag}&diffculty=${diff}`, {
                headers: {
                    'X-Api-Key': 'l5hxx3nuI016ykQpgAsd7UIkBg5lbIW5y1gUV5O3',
                }
            }).then(res => {
                commit('nextQuizSet', [...this.state.nextQuiz, ...res.data]);
            });
        },
        startCountdown({ commit, dispatch }) {
            var countdown = () => {
                commit('timeSub', 1);
                if (this.state.time < 1) {
                    dispatch('stopCountdown');
                    commit('playSet', false);
                    commit('quizSet', {});
                }
            }

            commit('timeIntervalSet', setInterval(countdown, 1000));
        },
        stopCountdown({ commit }) {
            commit('timeIntervalClear')
        },
    },
    modules: {
    }
})
