<template>
  <el-form :model="todoData" @submit.native.prevent="createTodo">
    <el-form-item label="標題" prop="title">
      <el-input v-model="todoData.title" />
    </el-form-item>
    <el-form-item label="電子郵件" prop="email">
      <el-input v-model="todoData.email" />
    </el-form-item>
    <el-form-item label="內容" prop="content">
      <el-input type="textarea" v-model="todoData.content" />
    </el-form-item>
    <el-button type="primary" native-type="submit">創建任務</el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const todoData = ref({
  title: '',
  email: '',
  content: '',
});

const createTodo = async () => {
  try {
    const postData = {
      data: {
        title: todoData.value.title,
        email: todoData.value.email,
        content: todoData.value.content,
      },
    };

    const response = await axios.post('http://localhost:1337/api/todos', postData, {
      headers: {
        'Content-Type': 'application/json', // 如果需要，可以明確指定 Content-Type
      },
    });

    console.log('Todo created:', response.data);
  } catch (error) {
    console.error('Error creating todo:', error);
  }
};
</script>