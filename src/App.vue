<template>
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside width="200px">aside</el-aside>
        <el-main>main</el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
     <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside width="200px">aside</el-aside>
        <el-main>main</el-main>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  
    <el-button type="primary">
      按钮
    </el-button>
    <el-button type="success">
      按钮
    </el-button>
    <el-button>按钮</el-button>
    <el-button size="small">
      按钮
    </el-button>
  
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>

body{
  width:1000px;
  margin:10px auto;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>