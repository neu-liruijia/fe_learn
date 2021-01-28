# Vue代码规范

[[toc]]
## 风格规范

```
1. 组件名称不能是一个单词，例如： Todo, 最好是 TodoItem
2. 非根组件的data是一个函数 除了 new Vue 外的任何地方
3. props定义要详细
4. v-for 需要使用 key配合
5. 组件样式需要增加作用域，防止干扰其他组件样式，scoped
6. 单文件组件文件名称，最好大写：MyComponent.vue
7. 基础组件的名称，最好采用特定前缀开头，例如Base
8. 和父组件紧密耦合的子组件应该以父组件名作为前缀命名，TodoList.vue ==》 TodoListItem.vue ==> TodoListItemButton.vue
9. 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾: SearchButtonClear.vue
10. JS/JSX 中的组件名应该始终是 PascalCase
11. 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case,例如：  <WelcomeMessage greeting-text="hi"/>
    props: {
    greetingText: String
    }
12. 多个 attribute 的元素应该分多行撰写，每个 attribute 一行。
```