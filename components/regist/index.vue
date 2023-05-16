<template>
    <div class="regist">
      <el-drawer
        :model-value="drawer"
        direction="rtl"
        append-to-body
        :before-close="handleClose"
      >
        <template #header>
          <h2>注册</h2>
        </template>
        <template #default>
          <div class="container">
            <div class="avatar">
              <el-avatar
                :size="150"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
            </div>
            <el-form :model="form" :rules="rules"  ref="ruleFormRef">
              <el-form-item prop="username">
                <el-input
                  v-model="form.username"
                  placeholder="用户名"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password">
                </el-input>
              </el-form-item>
              <el-form-item >
                <el-input v-model="form.phone" placeholder="手机">
                </el-input>
              </el-form-item>
              <el-form-item >
                <el-input v-model="form.email" placeholder="邮箱">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="cancelClick">取消</el-button>
                <el-button type="primary" @click="submitForm">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </template>
      </el-drawer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import type {  FormInstance,FormRules } from 'element-plus'
  
  defineProps({
    drawer: {
      type: Boolean,
      default: false,
    },
  });
  const emit = defineEmits(["close"]);
  
  const ruleFormRef =ref()
  const form = reactive({
    username: "",
    password: "",
    phone: "",
    email: "",
  });
  const rules = reactive<FormRules>({
      username: [
      { required: true, message: '请输入用户名、手机号或邮箱', trigger: 'blur' },
      { min: 3, message: '最小长度大于3字符', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '最小长度大于6字符', trigger: 'blur' },
    ],
   
  })
  const submitForm = async () => {
      (ruleFormRef.value as FormInstance).validate(valid=>{
          if(valid){
              console.log('dl');
          }        else{
              console.log('验证未通过');
  
          }
      })
   
  }
  
  
  const handleClose = (done: () => void) => {
    emit("close");
  };
  function cancelClick() {
    emit("close");
  }
  function confirmClick() {}
  </script>
  
  <style scoped lang="scss">
  .container {
    height: 100%;
    .avatar {
      text-align: center;
      margin-bottom: 40px;
    }
  }
  </style>
  