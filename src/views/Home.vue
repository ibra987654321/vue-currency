<template>
  <div class="convert">
    <div class="container">
      <div class="content">
        <div class="item">
          <h4>Имеющаяся валюта</h4>
          <select
            class="currency-line"
            v-model="selectfrom"
            v-on:change="Changefrom($event)"
          >
            <option v-for="cur in currenies" :key="cur">
              {{ cur }}
            </option>
          </select>
        </div>
        <div class="item">
          <h4>Нужная валюта</h4>
          <select
            class="currency-line"
            v-model="selectto"
            v-on:change="Changeto($event)"
          >
            <option v-for="cur in currenies" :key="cur">
              {{ cur }}
            </option>
          </select>
        </div>
      </div>
      <div class="content">
        <div class="item">
          <p>Сумма</p>
          <input type="number" v-model="changecur" @input="ChangeCur" />
        </div>
        <div class="item">
          <p>Сумма</p>
          <p class="item">{{ resultcur | currency(selectValue) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    currenies: ["RUB", "KGS", "EUR", "USD", "KZT", "CNY"],
    selectfrom: "USD",
    selectto: "RUB",
    resultcur: "",
    changecur: "",
    selectValue: "RUB",
  }),
  computed: {},
  async mounted() {
    this.fetchApi(this.selectfrom, this.selectto);
  },
  methods: {
    async Changefrom(currency) {
      this.fetchApi(currency.target.value, this.selectto);
      this.ChangeCur();
    },
    async Changeto(currency) {
      this.fetchApi(this.selectfrom, currency.target.value);
      this.ChangeCur();
      this.selectValue = currency.target.value;
    },
    async ChangeCur() {
      const res = await this.$store.dispatch("fetchCurrency", {
        data: this.selectfrom,
        data2: this.selectto,
      });
      this.resultcur = this.changecur * Object.values(res);
    },
    async fetchApi(first, second) {
      await this.$store.dispatch("fetchCurrency", {
        data: first,
        data2: second,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "vue-select/src/scss/vue-select.scss";
.convert {
  margin-top: 15%;
}
.container {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  justify-content: center;
}
.content .item {
  width: 100%;
}
.item input {
  height: 20px;
  border-radius: 5px;
  border: 1px solid #999999;
}
.currency-line {
  width: 120px;
  height: 30px;
  margin: 10px;
  border-radius: 20px 20px 20px 0;
}
</style>
