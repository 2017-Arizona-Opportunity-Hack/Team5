<template>
    <div class="p-4 text-light">
        <nav>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Welcome</router-link>
                </li>
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
                    <router-link class="nav-link" to="/physicians">Physicians</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/reports">Reports</router-link>
                </li>
            </ul>
        </nav>
        <div style="position: absolute; bottom: 20px;">&amp;</div>
    </div>
</template>

<style lang="scss" scoped>
a {
  //   color: white;
  //   font-style: italic;
  //   font-size: 20px;
  //   font-weight: 400;
}
.active {
  text-decoration: underline;
}
.nav-link {
  float: none;
}
</style>
