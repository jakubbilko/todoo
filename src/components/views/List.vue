<template>
  <md-layout md-align="center">
    <md-layout md-flex="50">
      <md-card>
        <md-card-header>
           <div class="md-title">{{ list.name }}</div>
        </md-card-header>
        <md-card-content>
          <md-list>
            <md-list-item v-for="element in list.elements" :key="element.id">
              <md-icon @click.native="onRemoveClick(element.id)">delete</md-icon>
              <md-checkbox v-model="element.completed" :class="{ completed: element.completed }" @change="checkElement(element.id)">{{ element.name }}</md-checkbox>
            </md-list-item>
          </md-list>
        </md-card-content>
        <md-input-container md-inline>
          <label>Type element name and press enter</label>
          <md-input v-model="elementName" @keyup.native.enter="addElement"></md-input>
        </md-input-container>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        elementName: ''
      }
    },
    computed: {
      ...mapGetters(['getListById']),
      listId () {
        return this.$route.params.id
      },
      list () {
        return this.getListById(this.listId)
      }
    },
    methods: {
      ...mapActions(['addElementToList', 'checkListElement', 'removeElementFromList']),
      addElement (e) {
        if (!e.target.value.trim()) {
          return
        }
        this.addElementToList({ name: e.target.value, listId: this.listId })
        this.elementName = ''
      },
      checkElement (elementId) {
        this.checkListElement({ listId: this.listId, elementId })
      },
      onRemoveClick (elementId) {
        this.removeElementFromList({ listId: this.listId, elementId })
      }
    }
  }
</script>

<style lang="css" scoped>

  .md-layout {
    padding-top: 25px;
  }

  .md-card {
    width: 100%;
  }

  .md-input-container {
    width: 95%;
    margin: auto;
    margin-bottom: 15px;
  }

  .completed {
    text-decoration: line-through;
  }

  .md-icon {
    cursor: pointer;
  }

</style>
