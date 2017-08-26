<template>
  <md-layout md-align="center">
    <md-layout md-flex="50">
      <md-card>
        <md-card-header>
          <md-icon @click.native="editListName" class="edit-icon">mode_edit</md-icon>
          <div class="md-title">{{ listName }}</div>
        </md-card-header>
        <md-card-content>
          <md-list>
            <md-list-item v-for="element in list.elements" :key="element.id">
              <div>
                <md-icon @click.native="editElementName(element)">mode_edit</md-icon>
                <md-icon @click.native="onRemoveClick(element.id)">delete</md-icon>
              </div>
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
    <md-dialog-prompt
      md-title="Edit List Name"
      md-ok-text="OK"
      md-cancel-text="CANCEL"
      ref="renameListDialog"
      v-model="listName">
    </md-dialog-prompt>
    <md-dialog-prompt
      md-title="Edit Element Name"
      md-ok-text="OK"
      md-cancel-text="CANCEL"
      ref="renameElementDialog"
      @close="renameElementDialogClose"
      v-model="newElementName">
    </md-dialog-prompt>
  </md-layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        elementName: '',
        newElementName: '',
        elementId: null
      }
    },
    computed: {
      ...mapGetters(['getListById']),
      listId () {
        return this.$route.params.id
      },
      list () {
        return this.getListById(this.listId)
      },
      listName: {
        get () {
          return this.list.name
        },
        set (value) {
          this.changeListName({ listId: this.listId, name: value })
        }
      }
    },
    methods: {
      ...mapActions(['addElementToList', 'checkListElement', 'removeElementFromList', 'changeListName', 'renameListElement']),
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
      },
      editListName () {
        this.$refs.renameListDialog.open()
      },
      editElementName (element) {
        this.newElementName = element.name
        this.elementId = element.id
        this.$refs.renameElementDialog.open()
      },
      renameElementDialogClose (type) {
        if (type === 'ok') {
          this.renameListElement({ listId: this.listId, elementId: this.elementId, name: this.newElementName })
        }
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

  .md-checkbox {
    width: 85%;
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

  .edit-icon {
    float: left;
    margin-right: 10px;
    transform: translateY(3px);
  }

</style>
