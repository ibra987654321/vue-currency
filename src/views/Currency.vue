<template>
  <div class="home">
    <h5 v-if="error">There was an error!</h5>
    <select
      class="currency-line"
      v-model="selectfrom"
      v-on:change="Changefrom($event)"
    >
      <option v-for="cur in currenies" :key="cur">
        {{ cur }}
      </option>
    </select>

    <div v-for="cur of showCurrency" :key="cur.id">
      {{ cur[1] | currency(cur[0].slice(4)) }}
    </div>
    <div class="cur_block">
      <div class="kays">
        <p v-for="c in allApi" :key="c.id">
          {{ c[0] }}
        </p>
      </div>
      <div class="values">
        <p v-for="c in allApi2" :key="c.id">
          {{ c[0] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    currenies: ["RUB", "KGS", "EUR", "USD", "CNY", "KZT", "GBP", "TRY"],
    selectfrom: "USD",
    selectto: "RUB",
    showCurrency: "",
    error: null,
    allApi: [],
    allApi2: [],
  }),

  computed: {},
  async mounted() {
    this.fetchApi(this.selectfrom, this.selectto);
  },
  methods: {
    async Changefrom(currency) {
      this.fetchApi(currency.target.value, this.selectto);
    },
    async fetchApi(first) {
      const inter = this.currenies;
      const arr = [];
      inter.map((i) => {
        const res = this.$store.dispatch("fetchCurrency", {
          data: first,
          data2: i,
        });
        arr.push(res);
      });
      const cont = [];
      this.allApi = cont;
      const cont2 = [];
      this.allApi2 = cont2;
      Promise.all(arr).then((responses) => {
        responses.forEach((response) => {
          cont.push(Object.keys(response));
        }),
          responses.forEach((response) => {
            cont2.push(Object.values(response));
          });
      });
    },
  },
};
</script>
<style scoped>
.cur_block {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.currency-line {
  width: 120px;
  height: 30px;
  margin: 10px;
  border-radius: 6px;
}
</style>
