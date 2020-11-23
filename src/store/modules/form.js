import router from "@/router";
import request from "@/utils/request";

const state = {
  step: {
    payAccount: "123456",
    receiveAccount: {
      type: "alipay",
      number: ""
    }
  }
};

const actions = {
  async submitStepForm({ commit }, { payload }) {
    await request("/api/form", "POST", payload);
    commit("saveFormData", { payload });
    router.push("/form/step-form/result");
  }
};

const mutations = {
  saveFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload
    };
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
