<template>
  <div>
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Todoo</h2>
      <router-link to="/lists" class="md-button" :class="`md-theme-${$material.currentTheme}`">My Lists <md-ink-ripple /></router-link>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
