<template>

<div class="login container">
  <div class="row">
    <div class="col col-login mx-auto">
      <div class="text-center mb-6">
      </div>
      <form class="card" action="" method="post">
        <div class="card-body p-6">
          <div class="card-title">Login to your account</div>
          <div class="form-group">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label class="form-label">
              Password
              <a href="./forgot-password.html" class="float-right small">I forgot password</a>
            </label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" />
              <span class="custom-control-label">Remember me</span>
            </label>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
          </div>
        </div>
      </form>
      <div class="text-center text-muted">
        Don't have account yet? <a href="./register.html">Sign up</a>
      </div>
      <div>
        <button @click="authenticate('github')">auth Github</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
        console.log(provider)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
