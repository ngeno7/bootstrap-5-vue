<script>
import Nav from "./Nav.vue";
export default {
    name: "DashBoardLayout",

    components: {
      Nav,
    },
}
</script>
<template>
    <div>
        <Nav/>
       <div class="container-fluid mt-3">
            <div class="row">
              <div class="col-12">
                <router-view></router-view>
              </div>
            </div>
        </div> 
    </div>
    
</template>