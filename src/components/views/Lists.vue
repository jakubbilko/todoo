<template>
  <div>
    <md-layout md-align="center">
      <md-layout md-flex="80">
        <md-layout md-flex="33" md-gutter v-for="list in lists" :key="list.id">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ list.name }}</div>
            </md-card-header>
            <md-card-actions>
              <router-link tag="md-button" :to="{ name: 'List', params: { id: list.id }}" class="md-raised md-primary">View/Edit</router-link>
            </md-card-actions>
          </md-card>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-dialog-prompt
      md-title="Add List"
      md-ok-text="OK"
      md-cancel-text="CANCEL"
      ref="addDialog"
      v-model="newListName"
      @close="dialogClosed"
      value=""
    >
    </md-dialog-prompt>
    <md-button @click="openDialog('addDialog')" class="md-fab md-fab-bottom-right">
      <md-tooltip md-direction="top">Add List</md-tooltip>
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        newListName: ''
      }
    },
    computed: {
      ...mapGetters(['getLatestListId', 'lists'])
    },
    methods: {
      ...mapMutations(['addList']),
      openDialog (ref) {
        this.$refs[ref].open()
      },
      dialogClosed (type) {
        if (type === 'ok') {
          this.addList(this.newListName)
          this.$router.push({
            name: 'List',
            params: {
              id: this.getLatestListId
            }
          })
        }
      }
    }
  }
</script>

<style lang="css" scoped>

  .md-layout {
    padding-top: 15px;
  }

  .md-card {
    width: 95%;
    margin: auto;
  }

</style>
