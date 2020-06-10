<template>
  <div class="c-auth">
    <template v-if="!$auth.loggedIn">
      <button
        type="button"
        class="c-auth-button"
        @click="$auth.loginWith('auth0')">
        <c-icon icon="lock" class="fa-fw" />
        Sign In
      </button>

      <button
        type="button"
        class="c-auth-button"
        @click="$auth.loginWith('auth0')">
        <c-icon icon="id-badge" class="fa-fw" />
        Register
      </button>
    </template>
    <template v-else>
      <button
        type="button"
        class="c-auth-button c-auth-button--profile"
        @click="$router.push('/ask')">
        <img class="c-auth-avatar" :src="$auth.user.picture">
        <span v-text="$auth.user.given_name" />
      </button>
      <button
        type="button"
        class="c-auth-button"
        @click="$auth.logout()">
        <c-icon icon="sign-out-alt" class="fa-fw" />
        Sign Out
      </button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.c-auth {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 10px;
}

.c-auth-button {
  float: left;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 15px;
  min-height: 40px;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
}

.c-auth-avatar {
  float: left;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

svg {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
</style>
