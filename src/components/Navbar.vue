<template >
  <div>
    <header class="header">
      <div class="menubar">
        <a href="#" class="logo">Logo</a>

        <i class="fa-solid fa-bars" id="menu-icon"></i>

        <nav class="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  // const menuIcon = document.querySelector("#menu-icon");
  // const navbar = document.querySelector(".navbar");

  // menuIcon.addEventListener("click", () => {
  //   menuIcon.classList.toggle("fa-solid fa-xmark");
  //   navbar.classList.toggle("active");
  // });
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
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(190, 190, 190, 0.4));
  transition: .7s;
}

.menubar:hover::before {
  left: 100%;
}

.logo {
  color: aliceblue;
  font-size: 25px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

.navbar a {
  color: aliceblue;
  font-size: 20px;
  text-decoration: none;
  margin: 0 15px;
  transition: .3s;
}

.navbar a:hover {
  color: #FF0303;
}

#menu-icon {
  font-size: 32px;
  color: aliceblue;
  display: none;
}

@media (max-width: 954px) {
  .menubar {
    padding: 1.25rem 4%;
  }
}

@media (max-width: 700px) {
  #menu-icon {
    display: block;
  }

  .navbar {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    padding: .5rem 4%;
    background: rgba(0, 0, 0, .7);
    border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    text-align: center;
    display: none;
  }

  .navbar.active {
    display: block;
  }

  .navbar a {
    display: block;
    margin: 1.5rem 0;
  }
}
</style>
