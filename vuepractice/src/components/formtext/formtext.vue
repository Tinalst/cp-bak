<template>
    <div>
        <div>
            <label>messaage:</label>
            <input v-model.lazy="messaage"/>
            {{messaage}}
        </div>
        <div>
            <label>message2:</label>
            <textarea v-model="message2"></textarea>
            {{message2}}
        </div>
        <div>
            <label>message3:</label>
           <input type="checkbox" id="a" value="a" v-model="message3"/>
            <label for="a"></label>
            <input type="checkbox" id="b" value="b" v-model="message3"/>
            <label for="b"></label>
            <input type="checkbox"id="c" value="c" v-model="message3"/>
            <label for="c"></label>
            {{message3}}
        </div>
        <div>
            <input type="radio" value="one" v-model="message4">
            <label>one</label>
            <br>
            <input type="radio" value="two" v-model="message4">
            <label>two</label>
            {{message4}}
        </div>
        <div>
            <select v-model="message5">
                <option  disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            {{message5}}
        </div>
        <div>
            <select v-model="message6">
                <option  multiple>请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            {{message6}}
        </div>
        <custom-input-component></custom-input-component>
    </div>
</template>

<script>
    import CustomInputComponent from 'components/formtext/customInputComponent';
    export default {
        data() {
            return {
                messaage: 'please enter ...',
                message2: 'message2...',
                message3: [],
                message4: '',
                message5: '',
                message6: []
            }
        },
        components: {
            CustomInputComponent
        }
    }
</script>

<style scoped>

</style>
