<template>
  <div>
    <main class="app-content">
      <div class="app-page">
        <div class="container" ng-app="app" ng-controller="AppController as vm">
          <div class="payments">
            <div class="payments_side">
              <div>
                <div class="payments">Валюта</div>
                <Navbar />
              </div>
              <div>
                <p>Made it with Vue</p>
              </div>
            </div>
            <div class="payments_body">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from "../components/app/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(201, 201, 201);

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, "Helvetica Neue", "Lucida Grande", "Open Sans";
  letter-spacing: 0.05em;
}

.container {
  display: flex;
  height: 96vh;
  width: 97vw;
  justify-content: center;
  align-items: center;
}

.payments {
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 500px;
  display: flex;

  &_side {
    background: linear-gradient(
        rgba(226, 66, 105, 0.8),
        rgba(156, 66, 105, 0.8)
      ),
      url(https://www.akchabar.kg/media/news/1f50f877-128a-4058-ab8b-803c436ee6c1.jpg.850x445_q82_crop.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    flex: 1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding: 48px 0;

      .payments {
        border: 4px solid rgba(255, 255, 255, 0.9);
        color: rgba(255, 255, 255, 0.9);
        width: 70px;
        height: 70px;
        border-radius: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 300;
        font-size: 0.9em;
        margin-bottom: 8px;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        font-weight: 300;
        font-size: 0.8em;
        text-align: center;
      }
    }
  }

  &_body {
    background: #fff;
    flex: 3;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow-y: auto;
  }
}
</style>
