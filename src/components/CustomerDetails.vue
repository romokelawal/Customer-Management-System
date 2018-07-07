<template>
  <div class="details container">
      <router-link to="/" class="btn btn-light">Back</router-link>
    <h1 class="page-header">{{customer.first_name}} {{customer.last_name}}
        <span class="float-right">
          <router-link v-bind:to="'/edit/'+customer.id" class="btn btn-primary">Edit</router-link>
          <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button>
        </span>
    </h1>
  
  <ul class="list-group">
    <li class="list-group-item">{{customer.phone}}</li>
    <li class="list-group-item">{{customer.email}}</li>
  </ul>
  <ul class="list-group">
    <li class="list-group-item">{{customer.address}}</li>
    <li class="list-group-item">{{customer.city}}</li>
    <li class="list-group-item">{{customer.state}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data () {
    return {
      customer: ''
    }
  },
  methods: {
      fetchCustomer(id){
          this.$http.get('http://slimapp/api/customer/'+id)
        .then(function(response){
          this.customer = response.body;
        }); 
      },
      deleteCustomer(id){
          this.$http.delete('http://slimapp/api/customer/delete/'+id)
        .then(function(response){
          this.$router.push({path: '/', query: {alert: 'Customer Deleted'}});
        });
      }
  },
  created: function(){
      this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
