/**
 * 1. 整合 L-text的props属性，让我们的业务组件可以快速的添加各种属性
 * 2. 拿到所有的styles的属性名称
 * without - 不会影响原来的数组
 * pull - 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。 这个方法会返回一个新数组。
 * */
import { computed } from "vue"
import { pick } from "lodash-es"
import { TextComponentProps } from "@/defaultProps"

// const arr = [1,2,3,4]
// console.log(pull(arr,2,3),arr) // [1,4] [1,4]
// console.log(without(arr,2,3),arr) // [1, 4]  [1, 2, 3, 4]
const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  picks: string[]
) => {
  // 使用 computed 返回一个 响应式对象
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick,
  }
}

export default useComponentCommon
