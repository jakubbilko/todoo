<template>
  <div>
    <md-layout md-align="center">
      <md-layout md-flex="80">
        <div v-if="!lists.length" class="md-subheading">Looks like you have no lists yet, click the '+' button to start adding!</div>
        <div v-else class="md-subheading">My Lists</div>
        <md-layout md-flex="33" md-gutter v-for="list in filteredLists" :key="list.id">
          <md-card>
            <md-card-header>
              <div class="md-title">{{ list.name }}</div>
            </md-card-header>
            <md-card-actions>
              <md-button @click.prevent="removeListClicked(list.id)" class="md-raised md-warn">Remove</md-button>
              <router-link tag="md-button" :to="{ name: 'List', params: { id: list.id }}" class="md-raised md-primary">View/Edit</router-link>
            </md-card-actions>
          </md-card>
        </md-layout>
        <div v-if="lists.length" class="search">
          <md-input-container md-inline>
            <label>Search lists</label>
            <md-input v-model="searchTerm"></md-input>
          </md-input-container>
        </div>
      </md-layout>
    </md-layout>
    <md-dialog-prompt
      md-title="Add List"
      md-ok-text="OK"
      md-cancel-text="CANCEL"
      ref="addDialog"
      v-model="newListName"
      @close="dialogClosed"
      value="">
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
        newListName: '',
        searchTerm: ''
      }
    },
    computed: {
      ...mapGetters(['getLatestListId', 'lists']),
      filteredLists () {
        let lists = this.lists

        if (this.searchTerm) {
          return lists.filter(e => e.name.match(this.searchTerm))
        }

        return lists
      }
    },
    methods: {
      ...mapMutations(['addList', 'removeList']),
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
      },
      removeListClicked (listId) {
        this.removeList(listId)
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

  .md-subheading {
    width: 100%;
    text-align: center;
  }

  .search {
    width: 100%;
  }

  .search .md-input-container {
    width: 60%;
    margin: auto;
  }

</style>
