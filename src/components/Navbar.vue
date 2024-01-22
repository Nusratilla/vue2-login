<template >
  <div>
    <header class="header">
      <div class="menubar">
        <a href="#" class="logo" @click="toHomeHandler"> Logo
          <!-- <RouterLink :to="{ name: 'home' }" class="router-link">Logo</RouterLink> -->
        </a>

        <!-- {{ user }} {{ isLoggedIn }} -->

        <nav class="navbar">
          <template v-if="isLoggedIn">
            <a href="#">
              <RouterLink :to="{ name: 'home' }">Hi {{ currentUser.username }}</RouterLink>
            </a>
          </template>
          <template v-if="!isLoggedIn">
            <a href="#">
              <RouterLink :to="{ name: 'login' }">Login</RouterLink>
            </a>
            <a href="#">
              <RouterLink :to="{ name: 'register' }">Register</RouterLink>
            </a>
          </template>

        </nav>


      </div>
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      // currentUser: state => state.auth.user,
      isLoggedIn: state => state.auth.isLoggedIn,
    }),
    currentUser() {
      return this.$store.getters.currentUser
    },
  },
  methods: {
    toHomeHandler() {
      return this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style >
.header {
  height: 5rem;
}

.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0px 6rem;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.menubar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -110%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(225, 0, 255, 0.4));
  transition: .7s ease;
}

.menubar:hover::before {
  left: 100%;
}

/* .router-link {
  text-decoration: none;
  color: rgb(255, 255, 255);
} */

.logo {
  font-size: 2rem;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.navbar a {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-decoration: none;
  margin: 0 15px;
  transition: .3s;
}

.navbar a:hover {
  color: #e203ff;
}

#menu-icon {
  font-size: 32px;
  color: aliceblue;
  display: none;
}

@media (max-width: 954px) {
  .header {
    height: 4rem;
  }

  .menubar {
    height: 4rem;
    padding: 0 4%;
  }
}
</style>
