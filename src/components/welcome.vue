<template>
    <div class="welcome">
        {{user.username}}
    </div>
</template>

<script>
export default {
    data (){
        return{
            user:{}
        }
    }
}
</script>