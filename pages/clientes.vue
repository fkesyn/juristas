<template>
  <v-container id="clientes">
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Procurar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="customers"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.nome }}</td>
        <td>{{ props.item.morada }}</td>
        <td>{{ props.item.data_nascimento }}</td>
        <td>{{ props.item.tipo }}</td>
        <td>{{ props.item.naturalidade }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.telefone }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Não foi encontrado nenhum resultado para "{{ search }}"
        </v-alert>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ClientesView',
  data() {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      }
    }
  },
  computed: {
    ...mapGetters({
      customers: 'clientes/customers',
      headers: 'clientes/header'
    })
  }
}
</script>

<style>
#calendar-view {
  font-family: Roboto;
}
</style>
