<template>
  <div class="collapse-card">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <span class="collapse-title">公司</span>
          <i class="header-icon el-icon-office-building"></i>
          <div v-if="selectedCompany">
            <el-tag type="danger" class="user-selected" effect="plain">
              您选择的公司是 —— {{ selectedCompany }}
            </el-tag>
          </div>
        </template>
        <div class="company">
          <div v-for="(item, index) in collapseCardData" :key="index">
            <img :src="item.companyUrl" class="companyImage" @click="selectedVal(item.companyName, key='companyName')">
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span class="collapse-title">职位</span>
          <i class="header-icon el-icon-s-custom"></i>
          <div v-if="selectedJob">
            <el-tag type="danger" class="user-selected" effect="plain">
              您选择的职位是 —— {{ selectedJob }}
            </el-tag>
          </div>
        </template>
        <el-tag
          v-for="(item, index) in collapseCardData"
          :key="index"
          :type="item.tagType"
          @click="selectedVal(item.post, key='post')">
          {{item.post}}
        </el-tag>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <span class="collapse-title">年份</span>
          <i class="header-icon el-icon-time"></i>
          <div v-if="selectedTime">
            <el-tag type="danger" class="user-selected" effect="plain">
              您选择的年份是 —— {{ selectedTime }}
            </el-tag>
          </div>
        </template>
        <el-tag
          v-for="(item, index) in collapseCardData"
          :key="index"
          :type="item.tagType"
          @click="selectedVal(item.time, key='time')">
          {{item.time}}
        </el-tag>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['collapseCardData'],
  data () {
    return {
      activeNames: ['1'],
      selectedCompany: '',
      selectedJob: '',
      selectedTime: '',
      selectedValList: {}
    }
  },
  methods: {
    handleChange (val) {
      console.log(1111, this.activeNames)
      console.log(1234, val)
    },
    selectedVal (val, key) {
      console.log(6666, val, key)
      this.selectedValList[key] = val
      console.log(this.selectedValList)
      this.$emit('selectedValList', this.selectedValList)
    }
  }
}
</script>

<style scoped>
.el-collapse {
  border: none;
}
.el-tag {
  margin: 0 20px 10px 0;
  font-size: 16px;
  cursor: pointer;
}
.collapse-title {
  font-size: 18px;
  padding-right: 5px;
  /* color: #003ecc; */
  font-weight: bold;
  /* font-size: 17px; */
  /* padding-right: 5px; */
  color: cornflowerblue;
}
.header-icon {
  /* font-size: 17px; */
  /* color: cornflowerblue; */
  font-size: 18px;
  color: #003ecc;
  font-weight: bold;
}
.company {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.companyImage {
  width: 90px;
  height: 30px;
  margin: 0 20px 10px 0;
  cursor: pointer;
}
.user-selected {
  font-size: 10px;
  margin-left: 10px;
}
</style>
