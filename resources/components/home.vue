<template lang = "html">
	<div id="create" class="container">
		<router-link to="/addform" class = "btn btn-primary" id="abc">{{Create}}</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			Create: 'Create'
			}
		}
	}
</script>

<style>
	.btn{
		background-color: rgb(152, 243, 77);
		border:none;
		color:aliceblue;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

	#create{
    	position: fixed;
    	bottom: 30px;
    	right: 20px;
		width: 300px;
	}
	#abc{
		margin-left: 300px;
		margin-bottom: 100px;
	}
</style>
