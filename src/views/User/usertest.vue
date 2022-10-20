<template>
    <div>
        <table>
            <tr>
                <td>编号</td> 
                <td>图书名称</td> 
                <td>作者</td>
            </tr>
            <tr v-for="item in lists" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
        <!-- 请求状态码：{{code}},请求状态：{{msg}} -->
    </div>
  </template>
  <script>
  import axios from '/src/axios';
  // import axios from 'axios';
    export default {
        name: "Book",
        data() {
            return {
                lists: [],
            }
        },
        mounted() {   //生命周期函数（或者 mounted 函数）调用的方法才能运行
            this.getShops();
        },
        methods: {
            getShops: function () {
                axios.get("/posts", {
                }).then( response=> {
                    console.log(response);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        this.lists = results;
                    }
                }).catch(function (error) {
                    console.log(error);
                    this.lists = [];
                })
            }
        }
    }
  </script>