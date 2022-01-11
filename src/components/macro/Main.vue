<template>
    <main>
        <Section1/>
        <Section2/>

    </main>
</template>

<script>
import Section1 from '../../components/sections/Section1'
import Section2 from '../../components/sections/Section2'

export default {
    name: 'Main',
    components: {
        Section1,
        Section2
    }
}
</script>

<style lang="scss" scoped>

</style>