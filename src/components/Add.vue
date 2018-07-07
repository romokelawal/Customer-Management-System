<template>
  <div class="add container">
    <h1 class="page-header">Add Customer</h1>
    <Alert v-if="alert" v-bind:message="alert"/>
    <form v-on:submit="addCustomer">
        <div class="card">
            <div class="card-header">
                <h4>Customer info</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>First Name*</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
                </div>
                <div class="form-group">
                    <label>Last Name*</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-header">
                <h4>Customer Contact</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>Email*</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="customer.email">
                </div>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-header">
                <h4>Customer Location</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="customer.city">
                </div>
                <div class="form-group">
                    <label>Sate</label>
                    <input type="text" class="form-control" placeholder="State" v-model="customer.state">
                </div>
            </div>
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      customer: {},
      alert: ''
    }
  },
  methods: {
      addCustomer(e){
          if(!this.customer.first_name || !this.customer.last_name || !this.customer.email) {
              this.alert = 'Please fill in all required fields';
          } else {
              let newCustomer = {
                first_name: this.customer.first_name,
                last_name: this.customer.last_name,
                phone: this.customer.phone,
                email: this.customer.email,
                address: this.customer.address,
                city: this.customer.city,
                state: this.customer.state
              }

                this.$http.post('http://slimapp/api/customer/add', newCustomer)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Customer Added'}});
                    });

              e.preventDefault();
          }
          e.preventDefault();
      }
  },
  components: {
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
