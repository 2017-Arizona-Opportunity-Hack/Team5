<template>
  <div class="bg-dark p-4 text-white">
      <nav>
          <ul class="nav flex-column">
              <li class="nav-item">
                  <router-link class="nav-link" to="/children">Children</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/homes">Homes</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/parents">Parents</router-link>
              </li class="nav-item">
              <li class="nav-item">
                  <router-link class="nav-link" to="/prescriptions">Prescriptions</router-link>
              </li class="nav-item">
              <li class="nav-item">
                  <router-link class="nav-link" to="/physiciancs">Physicians</router-link>
              </li>
          </ul>
      </nav>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
}
.active {
  text-decoration: underline;
}
.nav-link {
  float: none;
}
</style>
