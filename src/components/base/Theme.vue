<template>
  <div class="toop-tip-box">
    <!-- <a-button goust>切换主题</a-button> -->

    <div class="color-box">
      <div v-for="item in colors">
        <div
          class="item-color-1 item"
          :style="item.background"
          @click="changTheme(item.color)"
        ></div>
      </div>
      <div class="drapdown-icon">
        <input
          type="color"
          class="color-input"
          :value="colorRef"
          @change="colorChange($event)"
          @input="colorChange($event)"
        />
      </div>
      <!-- <div class="item-color-2 item" @click="changTheme('#efb788')"></div>
      <div class="item-color-3 item" @click="changTheme('#7194a9')"></div>
      <div class="item-color-4 item" @click="changTheme('#795548')"></div>
      <div class="item-color-5 item" @click="changTheme('#907cb3')"></div> -->
      <!-- <div class="item" @click="changTheme('#907cb3')">
       
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmit, defineProps, reactive } from "@vue/runtime-core";
import { DownOutlined, MoreOutlined } from "@ant-design/icons-vue";
import MoreColor from "../../components/base/MoreColor.vue";
import { ref } from "vue";
interface ColorItem {
  color: string;
  background: string;
}
const props = defineProps({
  colors: {
    type: Array,
    default: [
      { color: "#062743", background: "background-color:#062743" },
      { color: "#7194a9", background: "background-color:#7194a9" },
      { color: "#795548", background: "background-color:#795548" },
      { color: "#907cb3", background: "background-color:#907cb3" },
      { color: "#907cb3", background: "background-color:#907cb3" },
    ],
  },
});

const colors = computed(() => props.colors as ColorItem[]);
const colorRef = ref<string>("#EB5505");
const visible = ref<boolean>(false);
const emit = defineEmit({
  changeTheme: (val: string) => Boolean,
  "update:visible": (value: boolean) => Boolean,
});
const changTheme = (color: string) => {
  document.body.style.setProperty("--rs-bgcolor-1", color);
  emit("changeTheme", color);
};

const colorChange = (e: any) => {
  // console.log(e.target.value);
  document.body.style.setProperty("--rs-bgcolor-1", e.target.value);
  emit("changeTheme", e.target.value);
};
</script>

<style lang="less" scoped>
button {
  width: 100px;
}

.item-color-1 {
  background-color: #25252a;
}
.item-color-2 {
  background-color: #efb788;
}
.item-color-3 {
  background-color: #7194a9;
}
.item-color-4 {
  background-color: #795548;
}
.item-color-5 {
  background-color: #a487d8;
}
.item-color-6 {
  background-color: #4caf50;
}

.item {
  width: 16px;
  height: 16px;
  margin: 10px 0;
}

.item:hover {
  // width: 17px;
  // height: 17px;
  border: 1px rgb(14, 11, 11) solid;
  cursor: pointer;
}

.toop-tip-box {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 260px;
  position: fixed;
  border: 1px #e2e1e1 solid;
  right: 50px;
  top: 100px;
  align-items: center;
  justify-content: space-around;
  .color-box {
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .drapdown-icon {
    // width: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .drapdown-icon:hover {
    cursor: pointer;
  }
  .menu-btn {
    background-color: transparent;

    &:hover {
      background-color: #928f8a33;
    }
  }
}

.color-input {
  padding: 0;
  width: 20px;
  height: 24px;
  line-height: 30px;
  border: 0px;
  margin: 10px;
  border-radius: 5px;
  background-color: transparent;
}
</style>
