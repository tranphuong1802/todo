<template>
  <div style="margin-left: 100px">
    <h1 style="text-align: center; top: 100px; bottom: 50px; font-size: 30px">
      Bảng Nhân Sự
    </h1>
    <div>
      <el-button type="success" @click="centerDialogVisible = true"
        >Thêm nv</el-button
      >
      <el-input
        style="width: 200px; margin-left: 50px"
        placeholder="search..."
        @keyup.enter.native="checkEnter()"
      ></el-input>
    </div>

    <el-dialog
      title="Thêm nhân sự"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
    >
      <el-input
        type="text"
        hidden
        placeholder="Nhập tên nhân viên"
        v-model="input.name"
      ></el-input>
      <el-input
        type="text"
        placeholder="Nhập chức danh"
        v-model="input.cd"
      ></el-input>
      <el-input
        type="text"
        placeholder="Nhập đơn vị"
        v-model="input.dv"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          value="Reset Form"
          @click="(centerDialogVisible = false), abc()"
          >Save</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="Sửa nhân sự"
      :visible.sync="centerDialogVisible2"
      width="50%"
      center
    >
      <el-input placeholder="Sửa tên nhân viên" v-model="name"></el-input>
      <el-input placeholder="Sửa chức danh" v-model="cd"></el-input>
      <el-input placeholder="Sửa đơn vị" v-model="dv"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">Cancel</el-button>
        <el-button type="primary" @click="(centerDialogVisible2 = false), forceUpdate()"
          >Confirm</el-button
        >
      </span>
    </el-dialog>

    <el-table :data="tableData" style="width: 100%" ref="editItem">
      <el-table-column prop="stt" label="#" width="180"> </el-table-column>
      <el-table-column prop="name" label="Nhân viên" width="180">
      </el-table-column>
      <el-table-column prop="cd" label="Chức danh" width="180">
      </el-table-column>
      <el-table-column prop="dv" label="Đơn vị"> </el-table-column>
      <el-table-column prop="action" label="Action">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="delete1(scope.row)"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="(centerDialogVisible2 = true), editItem(scope.$index)"

          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      input: {},
      form:{},
      stt: "",
      name: "",
      cd: "",
      dv: "",
      centerDialogVisible: false,
      centerDialogVisible2: false,
    };
  },
  created() {
    this.getAllUser();
  },
  computed: {
    ...mapState(["tableData"]),
  },
  methods: {
    ...mapActions(["delete1", "getAllUser", "addItem"]),
    abc() {
      this.addItem(this.input), (this.input = {});
    },
    
    // editItemCom(row){
    //   this.form.name = row.name,
    //   this.form.cd = row.cd,
    //   this.form.dv = row.dv
    // }
    editItem(a) {
      const index = this.tableData.find((item, index) => index === a);
      this.name = index.name;
      this.cd = index.cd;
      this.dv = index.dv;
      this.stt = index.stt;
    },

    forceUpdate() {
      this.tableData.forEach((items) => {
        if (items.stt == this.stt) {
          items.cd = this.cd;
          items.name = this.name;
          items.dv = this.dv;
        }
      });
      this.saveItems();
    },
     saveItems() {
      const parsed = JSON.stringify(this.tableData);
      localStorage.setItem("items", parsed);
    },

  },
};
</script>

<style lang="scss">
.el-input__inner {
  margin-bottom: 10px;
}
</style>