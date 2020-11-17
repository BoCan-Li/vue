<script>
import { check } from "@/utils/auth";
export default {
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  functional: true,
  render(h, ctx) {
    const { props, scopedSlots } = ctx;
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>
