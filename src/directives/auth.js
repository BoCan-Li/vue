import { check } from "@/utils/auth"

function Install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    inserted(el, binding) {
      console.log(binding.value, "binding")
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
  })
}

export default { install: Install }
