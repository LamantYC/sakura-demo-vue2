<template>
  <div class="home">
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
      <i-col :md="6" :sm="12"></i-col>
    </Row>
  </div>
</template>

<style lang="scss">
  .home{
    .ivu-col{
      height: 50px;
      background: pink;
      margin-top: 10px;
      background-clip: content-box;
    }
    .blue{
      .ivu-col{
        background: blue;
        background-clip: content-box;
      }
    }
  }
</style>
