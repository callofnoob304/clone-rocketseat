<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/v-slot-style -->

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          Cadastro de categorias
        </h1>
        <v-btn
        fab
        small
        color="green"
        @click="dialog = true"
        >
        <v-icon>
          mdi-plus
        </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-card width="900">
        <v-card-title>
          <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details=""
          ></v-text-field>
        </v-card-title>
        <v-data-table 
          :headers="headers"
          :items="items"
          :search="search"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
            small
            color="blue"
            @click="update(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
            small
            color="red"
            @click="destroy(item)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-row>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="2">
              <v-text-field
              v-model="id"
              outlined
              disabled
              color="green"
              placeholder="Id da categoria"
              label="Id da categoria"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
              v-model="nomeCategoria"
              outlined
              color="green"
              placeholder="Nome da categoria"
              label="Nome da categoria"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          color="green"
          @click="persist"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      search: null,
      items: [],
      dialog: false,
      nomeCategoria: null,
      id: null,
      headers: [
        {
          text: 'id',
          value: 'id',
          align: 'center'
        },
        {
          text: 'nome',
          value: 'nome',
          align: 'center'
        },
        { text: "", value: "actions", filterable: false },
      ]
    }
  },
  async created() {
    await this.getAllCategories();
  },

  methods: {

    update(item) {
      this.nomeCategoria = item.nome;
      this.id = item.id;
      this.dialog = true;
    },

    async destroy(item) {
      try {
        await this.$api.delete(`/categorias/${item.id}`);
        await this.getAllCategories();
      } catch (error) {
        return alert('Moio')
      }
    },

    async persist() {
      try {
        const request = {
          nome: this.nomeCategoria
        }
        if (this.id) {
          await this.$api.patch(`/categorias/${this.id}`, request);
        } else {
          await this.$api.post(`/categorias/`, request);
        }
        this.nomeCategoria = null;
        this.id = null;
        this.dialog = false;
        await this.getAllCategories();
      } catch (error) {
        return alert('F');
      }
    },

    async getAllCategories() {
      try {
        const response = await this.$api.get('/categorias');
        this.items = response.data;
      } catch (error) {
        return alert('F');
      }
    }
  }

}
</script>

<style>

</style>