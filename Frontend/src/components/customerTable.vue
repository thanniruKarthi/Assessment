<template>
    <v-app>
        <div>
                <v-form refs="form">
                    <v-dialog width="600" v-model="formDialog">

                        <template v-slot:activator="{ on,attr }">
                            <v-flex text-right align-right>
                                <v-btn  elevation='5' color="primary" v-bind="attr" v-on="on">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-flex>

                        </template>
                        <v-card text class="white">
                            <v-text-field v-model="input.cusid" label="customer id"></v-text-field>
                            <v-text-field v-model="input.name" :rules="nameRules" label="customer Name">
                            </v-text-field>
                            <v-text-field v-model="input.owner" :rules="nameRules" label="owner"></v-text-field>
                            <v-btn v-if="flag" @click="addItem" class="red">
                                submit</v-btn>
                            <v-btn v-else @click="editItem" class="green">
                                save</v-btn>
                        </v-card>
                    </v-dialog>
                </v-form>
            </div>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>customerid<button @click="idasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="idDesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                    
                        <th>name<button @click="nameasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="nameDesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                        
                        <th>owner<button @click="ownerasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="ownerDesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                            <th>Edit/Delete</th>
                        
                            
                        
                    </tr>
                </thead>
                <tr v-for="(item,i) in list" :key="i">
                    <td>{{item.id}}</td>
                    <td>{{item.cusid}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.owner}}</td>
                    <td>
                        <v-btn @click="edit(item)" color="transparent" fab small elevation="0">
                            <v-icon small color="green">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="remove(item.id)" color="transparent" fab small elevation="0">
                            <v-icon small color="red">mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
               
            </v-simple-table>
    </v-app>
</template>
<script>
    var test;
    import Vue from 'vue';
     import axios from 'axios';
     import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    export default{

    data() {
        return {
            input: {
                cusid: '',
                name:'',
                owner: ''
            },
            formDialog: false,
            nameRules: [
                v => /^[a-zA-Z]+$/.test(v) || 'Name must be valid'
            ],
            list:[],
            flag:true
        }
    },
    mounted() {
        Vue.axios.get('http://127.0.0.1:40193/read')
      .then((resp) => {
        this.list = resp.data;
      })
  
    },
    methods:{
        async addItem() {
      await Vue.axios.post(`http://127.0.0.1:40193/insert`, {
        id: this.input.cusid,
        name: this.input.name,
        owner: this.input.owner,
        
      })
      this.formDialog=false
      Vue.axios.get('http://127.0.0.1:40193/read')
      .then((resp) => {
        this.list = resp.data;
      })
      this.$refs.form.reset()

    },
    async edit(item)
    {
        this.flag=false
      this.formDialog = true
      test = item
      this.input.cusid=item.cusid
      this.input.name=item.name
      this.input.owner=item.owner
    },
    async editItem() {
      this.flag=false
      test.cusid = this.input.cusid
      test.name = this.input.name
      test.owner = this.input.owner
      this.$refs.form.reset()
      this.formDialog=false
      await axios.post(`http://127.0.0.1:40193/update/${test.id}`, {
        id: test.cusid,
        name: test.name,
        owner: test.owner
      })
.then(response => {
          console.log(response);
        });

      
      
    },
    idasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/read')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    idDesc()
    {
        
        Vue.axios.get('http://127.0.0.1:40193/iddsc')
      .then((resp) => {
        this.list = resp.data;
    })
    },
    nameasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/nameasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    nameDesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/namedesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    ownerasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/ownerasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    ownerDesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/ownerdesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },


    async remove(id){
      await Vue.axios.delete(`http://127.0.0.1:40193/delete/${id}`)
      Vue.axios.get('http://127.0.0.1:40193/read')
        .then((resp) => {
          this.list = resp.data;
        })
    },
    

    }
    }
</script>