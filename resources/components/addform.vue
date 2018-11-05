<template lang="html">

	<div class="container">
		 <nav v-bind:class="active" v-on:click.prevent>
		<form id="form">
			<p>Name</p>
			<input  type="text" name = "name"> </input>
			<p>Movie</p>
			<input type="text" name = "movie"></input>
			<p>Price</p>
			<input type="text" name = "price"></input>
		</form>
			<router-link to="/retriveInfo" class = "btn btn-primary" v-on:click = "signup()">Submit</router-link>
		</nav>
	</div>

</template>

<script>
export default {
	data(){
		return{
			input:{
		name : "",
		movie: "",
		price: ""
		}
	}
	},

	methods:{
		validate(){
			if(this.input.name != "" && this.input.movie !="" && this.input.price !=""){
				this.$emit("authenticated", true)
				console.log('Logged Sucessfully')
			} else{
				console.log('Enter Valid Information')
			}
		}


	,
	 signUp(){
				var instance=this
				axios.post('/create', {
					payload: this.input
				}).then(function (response) {
					console.log(response)
					//console.log(instance.id)
					/* if(response.err.errors.contact_no.message==this.contact_no+"is not a valid mobile no format"){
						//alert("invalid")

					} */

				}).catch(function (err) {
					console.log(err)
				})
			},
			warning(){
				console.log("not matching")
			}
		}
}
</script>

<style>
#bce {
  position: relative;
  top: 10px;
  left: 60px;
}
</style>

