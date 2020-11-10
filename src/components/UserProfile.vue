<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.userName }}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
          <strong> Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user_profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.userName"
        :twoot="twoot"
       
      />
    </div>
  </div>
</template>

<script>

import { reactive} from 'vue';
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  setup(){
    const state = reactive ({
      followers: 0,
      user:{
        id: 1,
        userName: "_GJM",
        firstName: "Jono",
        lastName: "GJM",
        email: "fakeuser@gmail.com",
        isAdmin: true,
        twoots: [
          {id: 1, content: 'Twooter is Amazing'},
          {id: 2, content: 'Vue.js people are weebs xD'}
        ]
      }
    });
   function addTwoot(twoot) {
      state.user.twoots.unshift({ id: state.user.twoots.length + 1, content: twoot });
    }


  return{
    state,
    addTwoot
  }
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;

  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__create-twoot {
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: red;
        border-color: red;

        button {
          border-color: red;
          color: red;
        }
      }
    }

    .user-profile__admin-badge {
      background: purple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }
  .user_profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}
</style>