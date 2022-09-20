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
                        <v-btn>

                        </v-btn>
                        <th>customerid</th>
                        <th>name</th>
                        <th>owner</th>
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