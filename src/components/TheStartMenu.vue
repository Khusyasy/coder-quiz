<template>
    <div class="start-menu">
        <p>Choose a category</p>
        <div class="categories-container">
            <div
                v-for="cat in catItems"
                :key="cat"
            >
                <input
                    :id="cat"
                    name="categories"
                    :value="cat"
                    type="radio"
                    v-model="catSelected"
                    checked
                >
                <label :for="cat">{{cat}}</label>
            </div>
        </div>
        <button class="btn-play" @click="play">PLAY</button>
    </div>
</template>

<script>
export default {
  name: 'StartMenu',
  data() {
      return {
          catItems: [
              'Linux',
              'PHP',
              'Python',
              'HTML',
              'JS',
          ],
          catSelected: '',
      }
  },
  methods: {
      async play(){
        this.$store.commit('tagSet', this.catSelected);
        await this.$store.commit('playSet', true);
        this.$store.dispatch('getRandomQuiz', this.catSelected);
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";
.start-menu{
    color: $white;
}

.categories-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 1rem;
    margin: 0.5rem;

    & input{
        display: none;
    }

    & label{
        background-color: $green;
        color: $white;
        transition: ease-in-out 150ms;
        width: 100%;
        border: 2px solid $green-l;
        padding: 0.5rem;
        margin: 0.5rem;
        font-family: $font-code;
        font-size: 1.2rem;
        cursor: pointer;
        
        &:hover {
            background-color: $green-l;
            color: $black;
        }
    }
    
    input:checked + label{
        background-color: $green-l;
        color: $black;
    }
}

.btn-play{
  background-color: $green;
  color: $white;
  transition: ease-in-out 150ms;
  width: 100%;
  border: 2px solid $green-l;
  padding: 0.5rem 0;
  font-family: $font-code;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    background-color: $green-l;
    color: $black;
  }
}
</style>
