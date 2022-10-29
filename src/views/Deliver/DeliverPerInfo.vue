<template>
  <div class="information">
    <el-card class="box-card">
      <div class="text item">
        {{ "登录账号：" + this.information_data.account }}
      </div>
      <div class="text item">
        {{ "真实姓名：" + this.information_data.name }}
      </div>
      <div class="text item">
        {{ "手机绑定：" + this.information_data.tel }}
        <el-button
          type="primary"
          class="edit"
          text
          @click="dialogFormVisible = true"
          >修改</el-button
        >
        <el-dialog v-model="dialogFormVisible" title="更换手机号">
          <!-- <el-form :model="form"> -->
          <el-form>
            <el-form-item label="新手机号" :label-width="formLabelWidth">
              <el-input v-model="new_phone" autocomplete="off" />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button
                type="primary"
                @click="
                  dialogFormVisible = false;
                  submit_edit();
                "
                >确定</el-button
              >
            </span>
          </template>
        </el-dialog>
      </div>
      <div class="text item">
        {{ "我的工号：" + this.information_data.id }}
      </div>
      <div class="text item">
        {{ "所属网点：" + this.information_data.station }}
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, ref } from "vue";
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
// const form = reactive({
//   name: '',
//   region: '',
//   date1: '',
//   date2: '',
//   delivery: false,
//   type: [],
//   resource: '',
//   desc: '',
// })
export default {
  name: "tableData",
  data() {
    return {
      tableData: [],
      information_data: [],
      dialogFormVisible,
      formLabelWidth,
      // form,
      new_phone: "",
    };
  },
  mounted() {
    //生命周期函数（或者 mounted 函数）调用的方法才能运行
    this.getData();
    // this.addData();
  },
  methods: {
    getData: function () {
      axios
        .get("http://localhost:3000/wangdian_information", {})
        .then((response) => {
          console.log(response.data);
          let results = response.data || [];
          if (results && results.length > 0) {
            this.information_data = results[0];
            console.log(this.information_data);
          }
        })
        .catch(function (error) {
          console.log(error);
          this.information_data = [];
        });
    },
    submit_edit: function () {
      if (this.new_phone != "") {
        axios({
          method: "PUT",
          url: "http://localhost:3000/wangdian_information/990067",
          data: {
            phone: this.new_phone,
          },
        });
        //  this.$refs[form].resetFields();
      } else {
        alert("请输入手机号");
      }
    },
    // addData: function(){
    //     axios({
    //         method:'POST',
    //         url:'http://localhost:3000/test',
    //         data:{
    //             id:"12320000",
    //             name:"666女士",
    //             sex:"女",
    //             phonenumber:"144444440"
    //         }
    //     })
    // let data = {id:"123234",name:"werewr女士",sex:"女",phonenumber:"12345609870"}
    // axios.post("http://localhost:3000/test",data).then(response=>{
    //     console.log(response)
    // })
    // }
  },
};
</script>
<style scoped>
.item {
  margin-bottom: 18px;
}
.box-card {
  width: auto;
  height: auto;
  box-shadow: none;
}
.text {
  font-size: large;
  color: slategray;
}
.main {
  height: 100%;
}
.tabs {
  border-radius: 2px;
}
</style>
